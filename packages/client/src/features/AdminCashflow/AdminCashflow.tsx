import {
  Alert,
  Loader,
  Paper,
  ScrollArea,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { IconAlertTriangle } from "@tabler/icons-react";
import dayjs from "dayjs";
import { useQuery } from "urql";
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
