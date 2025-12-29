import {
  Card,
  Text,
  Badge,
  Group,
  Stack,
  Button,
  Box,
  Progress,
  Loader,
  Collapse,
} from "@mantine/core";
import {
  IconThumbUp,
  IconThumbDown,
  IconMinus,
  IconCurrencyEuro,
  IconCheck,
  IconX,
  IconChevronDown,
  IconChevronUp,
} from "@tabler/icons-react";
import { useState } from "react";
import { useMutation, useQuery } from "urql";
import { graphql } from "../../gql";
import { VoteValue, PurchaseStatus } from "../../gql/graphql";
import { formatCurrency } from "../../utils";
import { UserAvatar, Can } from "../../components";

export function PurchasesList() {
  const [showCompleted, setShowCompleted] = useState(false);
  
  const [{ data, fetching }] = useQuery({
    query: graphql(`
      query purchases {
        purchases {
          id
          title
          description
          estimatedCost
          status
          createdAt
          proposer {
            id
            displayName
            avatar
          }
          voteCount {
            yes
            no
            abstain
          }
          userVote {
            vote
            user {
              id
            }
          }
        }
      }
    `),
  });

  if (fetching) {
    return <Loader />;
  }

  if (!data?.purchases || data.purchases.length === 0) {
    return (
      <Text mt="md" c="dimmed">
        Keine geplanten Anschaffungen vorhanden.
      </Text>
    );
  }

  const activePurchases = data.purchases.filter(
    (p) => p.status === PurchaseStatus.Proposed || p.status === PurchaseStatus.Approved
  );
  const completedPurchases = data.purchases.filter(
    (p) => p.status === PurchaseStatus.Completed || p.status === PurchaseStatus.Rejected
  );

  return (
    <Stack mt="md" gap="md">
      {activePurchases.map((purchase) => (
        <PurchaseCard key={purchase.id} purchase={purchase} />
      ))}

      {completedPurchases.length > 0 && (
        <Box>
          <Button
            variant="subtle"
            onClick={() => setShowCompleted(!showCompleted)}
            rightSection={showCompleted ? <IconChevronUp size={16} /> : <IconChevronDown size={16} />}
            fullWidth
          >
            {showCompleted ? "Abgeschlossene ausblenden" : `Abgeschlossene anzeigen (${completedPurchases.length})`}
          </Button>
          <Collapse in={showCompleted}>
            <Stack mt="md" gap="md">
              {completedPurchases.map((purchase) => (
                <PurchaseCard key={purchase.id} purchase={purchase} />
              ))}
            </Stack>
          </Collapse>
        </Box>
      )}
    </Stack>
  );
}

function PurchaseCard({ purchase }: { purchase: any }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="space-between" mb="xs">
        <Group>
          <Text fw={500} size="lg">
            {purchase.title}
          </Text>
          <PurchaseStatusBadge status={purchase.status} />
        </Group>
        <Group>
          <IconCurrencyEuro size={16} />
          <Text>{formatCurrency(purchase.estimatedCost)}</Text>
        </Group>
      </Group>

      <Text size="sm" c="dimmed" mb="md">
        {purchase.description}
      </Text>

      <Group mb="md">
        <UserAvatar user={purchase.proposer} />
        <Text size="sm">
          Vorgeschlagen von {purchase.proposer.displayName}
        </Text>
      </Group>

      <VoteResults voteCount={purchase.voteCount} />

      {purchase.status === PurchaseStatus.Proposed && (
        <>
          <VoteButtons
            purchaseId={purchase.id}
            userVote={purchase.userVote}
          />
          <Can I="update" this={{ __typename: "Purchase" } as any}>
            <AdminActions purchaseId={purchase.id} />
          </Can>
        </>
      )}
    </Card>
  );
}

function PurchaseStatusBadge({ status }: { status: PurchaseStatus }) {
  const statusConfig = {
    [PurchaseStatus.Proposed]: { color: "blue", label: "Vorgeschlagen" },
    [PurchaseStatus.Approved]: { color: "green", label: "Genehmigt" },
    [PurchaseStatus.Rejected]: { color: "red", label: "Abgelehnt" },
    [PurchaseStatus.Completed]: { color: "gray", label: "Abgeschlossen" },
  };

  const config = statusConfig[status];
  return <Badge color={config.color}>{config.label}</Badge>;
}

function VoteResults({
  voteCount,
}: {
  voteCount: { yes: number; no: number; abstain: number };
}) {
  const total = voteCount.yes + voteCount.no + voteCount.abstain;

  if (total === 0) {
    return (
      <Text size="sm" c="dimmed" mb="md">
        Noch keine Stimmen abgegeben
      </Text>
    );
  }

  const yesPercent = (voteCount.yes / total) * 100;
  const noPercent = (voteCount.no / total) * 100;
  const abstainPercent = (voteCount.abstain / total) * 100;

  return (
    <Box mb="md">
      <Group justify="space-between" mb="xs">
        <Group gap="xs">
          <IconThumbUp size={16} />
          <Text size="sm">{voteCount.yes} Ja</Text>
        </Group>
        <Group gap="xs">
          <IconThumbDown size={16} />
          <Text size="sm">{voteCount.no} Nein</Text>
        </Group>
        <Group gap="xs">
          <IconMinus size={16} />
          <Text size="sm">{voteCount.abstain} Enthaltung</Text>
        </Group>
      </Group>

      <Progress.Root size="xl">
        <Progress.Section value={yesPercent} color="green">
          <Progress.Label>
            {yesPercent > 5 ? Math.round(yesPercent) + "%" : ""}
          </Progress.Label>
        </Progress.Section>
        <Progress.Section value={noPercent} color="red">
          <Progress.Label>
            {noPercent > 5 ? Math.round(noPercent) + "%" : ""}
          </Progress.Label>
        </Progress.Section>
        <Progress.Section value={abstainPercent} color="gray">
          <Progress.Label>
            {abstainPercent > 5 ? Math.round(abstainPercent) + "%" : ""}
          </Progress.Label>
        </Progress.Section>
      </Progress.Root>
    </Box>
  );
}

function VoteButtons({
  purchaseId,
  userVote,
}: {
  purchaseId: string;
  userVote: { vote: VoteValue } | null | undefined;
}) {
  const [{ fetching }, vote] = useMutation(
    graphql(`
      mutation voteOnPurchase($purchaseId: ID!, $vote: VoteValue!) {
        voteOnPurchase(purchaseId: $purchaseId, vote: $vote) {
          id
          voteCount {
            yes
            no
            abstain
          }
          userVote {
            vote
            user {
              id
            }
          }
        }
      }
    `),
  );

  return (
    <Group>
      <Button
        leftSection={<IconThumbUp size={16} />}
        color="green"
        variant={userVote?.vote === VoteValue.Yes ? "filled" : "outline"}
        onClick={() => vote({ purchaseId, vote: VoteValue.Yes })}
        loading={fetching}
      >
        Ja
      </Button>
      <Button
        leftSection={<IconThumbDown size={16} />}
        color="red"
        variant={userVote?.vote === VoteValue.No ? "filled" : "outline"}
        onClick={() => vote({ purchaseId, vote: VoteValue.No })}
        loading={fetching}
      >
        Nein
      </Button>
      <Button
        leftSection={<IconMinus size={16} />}
        color="gray"
        variant={userVote?.vote === VoteValue.Abstain ? "filled" : "outline"}
        onClick={() => vote({ purchaseId, vote: VoteValue.Abstain })}
        loading={fetching}
      >
        Enthaltung
      </Button>
    </Group>
  );
}

function AdminActions({ purchaseId }: { purchaseId: string }) {
  const [{ fetching }, updateStatus] = useMutation(
    graphql(`
      mutation updatePurchaseStatus($purchaseId: ID!, $status: PurchaseStatus!) {
        updatePurchaseStatus(purchaseId: $purchaseId, status: $status) {
          id
          status
        }
      }
    `),
  );

  return (
    <Group mt="md" justify="flex-end">
      <Button
        leftSection={<IconCheck size={16} />}
        color="green"
        onClick={() => updateStatus({ purchaseId, status: PurchaseStatus.Approved })}
        loading={fetching}
        size="sm"
      >
        Genehmigen
      </Button>
      <Button
        leftSection={<IconX size={16} />}
        color="red"
        onClick={() => updateStatus({ purchaseId, status: PurchaseStatus.Rejected })}
        loading={fetching}
        size="sm"
      >
        Ablehnen
      </Button>
    </Group>
  );
}
