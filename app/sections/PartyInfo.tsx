import { Container } from "@mantine/core";
import dayjs from "dayjs";

export function PartyInfo({ nextDate }: { nextDate: string }) {
  return (
    <Container>
      Die nächste Sommerlan findet am {dayjs(nextDate).format("LLL")} statt!
    </Container>
  );
}
