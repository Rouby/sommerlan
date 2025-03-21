import { getEnv } from "../env";

const baseUrl = `https://api-m.${getEnv() === "production" ? "" : "sandbox."}paypal.com`;

async function getPayPalAuthToken() {
  if (getEnv() === "production") {
    throw new Error("PayPal is not available in production");
  }

  const auth = Buffer.from(
    `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`,
  ).toString("base64");

  const response = await fetch(`${baseUrl}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();

  return data.access_token;
}

export async function createPayPalOrder(value: number) {
  const authToken = await getPayPalAuthToken();

  const response = await fetch(`${baseUrl}/v2/checkout/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify({
      purchase_units: [
        {
          amount: {
            currency_code: "EUR",
            value: value.toFixed(2),
          },
        },
      ],
      intent: "CAPTURE",
      payment_source: {
        paypal: {
          experience_context: {
            brand_name: "SommerLAN",
            shipping_preference: "NO_SHIPPING",
            landing_page: "NO_PREFERENCE",
            user_action: "PAY_NOW",
            payment_method_preference: "IMMEDIATE_PAYMENT_REQUIRED",
            locale: "de-DE",
          },
        },
      },
    }),
  });

  return response.json() as Promise<{ id: string }>;
}

export async function capturePayPalOrder(orderId: string) {
  const authToken = await getPayPalAuthToken();

  const response = await fetch(
    `${baseUrl}/v2/checkout/orders/${orderId}/capture`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    },
  );

  return response.json() as Promise<{
    id: string;
    status: "COMPLETED";
    purchase_units: {
      payments: { captures: { amount: { value: string } }[] }[];
    }[];
  }>;
}
