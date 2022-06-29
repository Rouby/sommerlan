export async function verifyWebhook(
  headers: Headers,
  body: any,
  webhookId: string
) {
  var webhookEventBody = typeof body === "string" ? JSON.parse(body) : body;

  const response = await fetch(
    `${process.env.PAYPAL_ENDPOINT}/v1/notifications/verify-webhook-signature`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await authenticate()}`,
      },
      body: JSON.stringify({
        auth_algo: headers.get("paypal-auth-algo"),
        cert_url: headers.get("paypal-cert-url"),
        transmission_id: headers.get("paypal-transmission-id"),
        transmission_sig: headers.get("paypal-transmission-sig"),
        transmission_time: headers.get("paypal-transmission-time"),
        webhook_id: webhookId,
        webhook_event: webhookEventBody,
      }),
    }
  );

  const { verification_status } = await response.json();

  if (verification_status !== "SUCCESS") {
    throw new Error("Request validation failed");
  }
}

export async function capturePayment(orderId: string) {
  const {
    status,
    purchase_units: [
      {
        payments: {
          captures: [
            {
              status: captureStatus,
              amount: { value },
            },
          ],
        },
      },
    ],
  } = await fetch(
    `${process.env.PAYPAL_ENDPOINT}/v2/checkout/orders/${orderId}/capture`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await authenticate()}`,
      },
    }
  ).then((resp) => resp.json());

  return { status, captureStatus, value };
}

let authToken = "";
export async function authenticate() {
  if (authToken) {
    return authToken;
  }

  const { access_token: token, expires_in } = await fetch(
    `${process.env.PAYPAL_ENDPOINT}/v1/oauth2/token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          Buffer.from(
            process.env.PAYPAL_CLIENT_ID +
              ":" +
              process.env.PAYPAL_CLIENT_SECRET
          ).toString("base64"),
      },
      body: "grant_type=client_credentials",
    }
  ).then((resp) => resp.json());

  setTimeout(() => {
    authToken = "";
  }, Math.max(1000, (expires_in - 5) * 1000));

  return (authToken = token);
}
