import {
  Alert,
  Button,
  Group,
  Loader,
  NumberInput,
  Paper,
  ScrollArea,
  Stack,
  Table,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { IconAlertTriangle } from "@tabler/icons-react";
import dayjs from "dayjs";
import { useMutation, useQuery } from "urql";
import { graphql } from "../../gql";
import { formatCurrency } from "../../utils";

export function AdminCashflow() {
  const [{ data, fetching, error }] = useQuery({
    query: graphql(`
      query MoneyTransfers {
        moneyTransfers {
          id
          amount
          valuationDate
          note
          correlationId
        }
      }
    `),
  });

  const [{ fetching: isCreating, error: createError }, createMoneyTransfer] =
    useMutation(
      graphql(`
        mutation createMoneyTransfer($input: CreateMoneyTransferInput!) {
          createMoneyTransfer(input: $input) {
            id
            amount
            valuationDate
            note
            correlationId
          }
        }
      `),
    );

  if (fetching) {
    return <Loader />;
  }

  if (error) {
    return (
      <Alert
        icon={<IconAlertTriangle size="1rem" />}
        title="Error!"
        color="red"
      >
        Failed to load cashflow data: {error.message}
      </Alert>
    );
  }

  if (!data?.moneyTransfers || data.moneyTransfers.length === 0) {
    return <Text>No money transfers found.</Text>;
  }

  const totalAmount = data.moneyTransfers.reduce(
    (sum, transfer) => sum + transfer.amount,
    0,
  );

  return (
    <Paper shadow="xs" p="md">
      <Title order={3} mb="md">
        Cashflow Overview
      </Title>

      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const form = event.target as HTMLFormElement;

          const amount = +form["amount"].value;
          const note = form["note"].value;
          const valuationDate = form["valuationDate"].value;

          const result = await createMoneyTransfer({
            input: {
              amount,
              note,
              valuationDate,
            },
          });

          if (!result.error) {
            form.reset();
          }
        }}
      >
        <Stack gap="sm" mb="md">
          <Group grow align="end">
            <TextInput
              required
              type="date"
              name="valuationDate"
              label="Date"
              defaultValue={dayjs().format("YYYY-MM-DD")}
              disabled={isCreating}
            />
            <TextInput
              required
              name="note"
              label="Note"
              placeholder="e.g. Snacks reimbursement"
              disabled={isCreating}
            />
            <NumberInput
              required
              name="amount"
              label="Amount"
              min={0}
              decimalScale={2}
              fixedDecimalScale
              rightSection="€"
              disabled={isCreating}
            />
            <Button type="submit" loading={isCreating}>
              Add Entry
            </Button>
          </Group>
          {createError && (
            <Alert icon={<IconAlertTriangle size="1rem" />} color="red">
              Failed to create cashflow entry: {createError.message}
            </Alert>
          )}
        </Stack>
      </form>

      <ScrollArea>
        <Table striped highlightOnHover withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Datum</Table.Th>
              <Table.Th>Note</Table.Th>
              <Table.Th align="right">Amount</Table.Th>
              {/* <Table.Th>Korrelation</Table.Th> */}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {data.moneyTransfers.map((transfer) => (
              <Table.Tr key={transfer.id}>
                <Table.Td>{dayjs(transfer.valuationDate).format("L")}</Table.Td>
                <Table.Td>{transfer.note}</Table.Td>
                <Table.Td align="right">
                  {formatCurrency(transfer.amount)}
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
          <Table.Tfoot>
            <Table.Tr>
              <Table.Td colSpan={2} align="right">
                <Text fw={700}>Total Cash Status</Text>
              </Table.Td>
              <Table.Td align="right">
                <Text fw={700}>{formatCurrency(totalAmount)}</Text>
              </Table.Td>
            </Table.Tr>
          </Table.Tfoot>
        </Table>
      </ScrollArea>
    </Paper>
  );
}
