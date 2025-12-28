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
} from "@mantine/core";
import {
  IconThumbUp,
  IconThumbDown,
  IconMinus,
  IconCurrencyEuro,
} from "@tabler/icons-react";
import { useMutation, useQuery } from "urql";
import { graphql } from "../../gql";
import { VoteValue, PurchaseStatus } from "../../gql/graphql";
import { formatCurrency } from "../../utils";
import { UserAvatar } from "../../components";
import classes from "./styles.module.css";

export function PurchasesList() {
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
            id
            vote
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

  return (
    <Stack mt="md" gap="md">
      {data.purchases.map((purchase) => (
        <Card key={purchase.id} shadow="sm" padding="lg" radius="md" withBorder>
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
            <Text size="sm">Vorgeschlagen von {purchase.proposer.displayName}</Text>
          </Group>

          <VoteResults voteCount={purchase.voteCount} />

          {purchase.status === PurchaseStatus.Proposed && (
            <VoteButtons purchaseId={purchase.id} userVote={purchase.userVote} />
          )}
        </Card>
      ))}
    </Stack>
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

function VoteResults({ voteCount }: { voteCount: { yes: number; no: number; abstain: number } }) {
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
          <Progress.Label>{Math.round(yesPercent)}%</Progress.Label>
        </Progress.Section>
        <Progress.Section value={noPercent} color="red">
          <Progress.Label>{Math.round(noPercent)}%</Progress.Label>
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
  userVote: { id: string; vote: VoteValue } | null | undefined;
}) {
  const [{ fetching }, vote] = useMutation(
    graphql(`
      mutation voteOnPurchase($purchaseId: ID!, $vote: VoteValue!) {
        voteOnPurchase(purchaseId: $purchaseId, vote: $vote) {
          id
          vote
          purchase {
            id
            voteCount {
              yes
              no
              abstain
            }
            userVote {
              id
              vote
            }
          }
        }
      }
    `),
  );

  const handleVote = async (voteValue: VoteValue) => {
    await vote({ purchaseId, vote: voteValue });
  };

  return (
    <Group>
      <Button
        leftSection={<IconThumbUp size={16} />}
        color="green"
        variant={userVote?.vote === VoteValue.Yes ? "filled" : "outline"}
        onClick={() => handleVote(VoteValue.Yes)}
        loading={fetching}
      >
        Ja
      </Button>
      <Button
        leftSection={<IconThumbDown size={16} />}
        color="red"
        variant={userVote?.vote === VoteValue.No ? "filled" : "outline"}
        onClick={() => handleVote(VoteValue.No)}
        loading={fetching}
      >
        Nein
      </Button>
      <Button
        leftSection={<IconMinus size={16} />}
        color="gray"
        variant={userVote?.vote === VoteValue.Abstain ? "filled" : "outline"}
        onClick={() => handleVote(VoteValue.Abstain)}
        loading={fetching}
      >
        Enthaltung
      </Button>
    </Group>
  );
}
