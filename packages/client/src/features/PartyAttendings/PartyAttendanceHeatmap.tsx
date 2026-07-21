import {
  Badge,
  Box,
  Card,
  Group,
  Progress,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import {
  IconDeviceDesktop,
  IconFlame,
  IconUser,
  IconUsers,
} from "@tabler/icons-react";
import type { Dayjs } from "dayjs";
import classes from "./PartyAttendanceHeatmap.module.css";

export interface AttendingUser {
  id: string;
  displayName: string;
}

export interface AttendingItem {
  id: string;
  dates: string[];
  room?: string | null;
  withPc?: boolean | null;
  user: AttendingUser;
}

export interface PartyAttendanceHeatmapProps {
  dates: Dayjs[];
  seatsAvailable: number;
  roomsAvailable?: number | null;
  attendings: AttendingItem[];
  onSelectDate?: (dateStr: string) => void;
}

const WEEKDAYS = ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."];

export function PartyAttendanceHeatmap({
  dates,
  seatsAvailable,
  roomsAvailable,
  attendings,
  onSelectDate,
}: PartyAttendanceHeatmapProps) {
  if (!dates || dates.length === 0) {
    return null;
  }

  // Calculate daily breakdown statistics
  const dayStats = dates.map((date) => {
    const formattedDate = date.format("YYYY-MM-DD");
    const dayAttendings = attendings.filter((att) =>
      att.dates.includes(formattedDate),
    );
    const withPcCount = dayAttendings.filter((att) => att.withPc === true).length;
    const withoutPcCount = dayAttendings.filter(
      (att) => att.withPc === false,
    ).length;
    const roomsGrantedCount = dayAttendings.filter(
      (att) => att.room === "GRANTED",
    ).length;
    const count = dayAttendings.length;
    const capacityPct =
      seatsAvailable > 0 ? Math.round((count / seatsAvailable) * 100) : 0;

    return {
      date,
      formattedDate,
      count,
      withPcCount,
      withoutPcCount,
      roomsGrantedCount,
      capacityPct,
      attendings: dayAttendings,
    };
  });

  const maxCount = Math.max(...dayStats.map((s) => s.count));
  const totalSlots = dayStats.reduce((sum, s) => sum + s.count, 0);
  const avgAttendance =
    dayStats.length > 0 ? (totalSlots / dayStats.length).toFixed(1) : "0";

  const uniqueAttendeesCount = new Set(
    attendings.filter((att) => att.dates && att.dates.length > 0).map((att) => att.user.id),
  ).size;

  const peakDaysFormatted = dayStats
    .filter((s) => s.count === maxCount && maxCount > 0)
    .map((s) => WEEKDAYS[s.date.day()] + " " + s.date.format("DD.MM."));

  return (
    <Card withBorder radius="md" p="md" mb="md" className={classes.heatmapCard}>
      <Card.Section withBorder inheritPadding py="xs">
        <Group justify="space-between" align="center">
          <Group gap="xs">
            <IconFlame size={20} color="var(--mantine-color-orange-6)" />
            <Text fw="bold">Tagesauslastung & Frequentierung</Text>
          </Group>

          {maxCount > 0 && (
            <Badge
              color="orange"
              variant="light"
              leftSection={<IconFlame size={12} />}
            >
              Peak: {maxCount} / {seatsAvailable} Da ({peakDaysFormatted.join(", ")})
            </Badge>
          )}
        </Group>
      </Card.Section>

      <Box mt="sm">
        <Group gap="xs" mb="sm" wrap="wrap">
          <Box className={classes.statBadge}>
            <IconUsers size={16} color="gray" />
            <Text size="xs">
              <strong>{uniqueAttendeesCount}</strong> Teilnehmer gesamt
            </Text>
          </Box>
          <Box className={classes.statBadge}>
            <Text size="xs">
              Ø <strong>{avgAttendance}</strong> Personen / Tag
            </Text>
          </Box>
        </Group>

        <Box className={classes.tilesContainer}>
          {dayStats.map((stat) => {
            const isPeak = stat.count === maxCount && maxCount > 0;
            const weekdayName = WEEKDAYS[stat.date.day()];
            const dayNum = stat.date.format("DD.MM.");

            let heatClass = classes.heatLevel0;
            if (isPeak) {
              heatClass = classes.heatLevelPeak;
            } else if (stat.capacityPct >= 66) {
              heatClass = classes.heatLevel3;
            } else if (stat.capacityPct >= 36) {
              heatClass = classes.heatLevel2;
            } else if (stat.count > 0) {
              heatClass = classes.heatLevel1;
            }

            const tooltipContent = (
              <Stack gap="xs" className={classes.tooltipContent}>
                <Text fw="bold" size="sm">
                  {weekdayName}, {dayNum}
                </Text>
                <Text size="xs">
                  <strong>{stat.count}</strong> von {seatsAvailable} Plätzen belegt ({stat.capacityPct}%)
                </Text>
                <Group gap="xs">
                  <Badge size="xs" color="blue" variant="filled">
                    <IconDeviceDesktop size={10} style={{ marginRight: 3, verticalAlign: "middle" }} />
                    {stat.withPcCount} mit PC
                  </Badge>
                  <Badge size="xs" color="gray" variant="filled">
                    <IconUser size={10} style={{ marginRight: 3, verticalAlign: "middle" }} />
                    {stat.withoutPcCount} ohne PC
                  </Badge>
                </Group>
                {roomsAvailable ? (
                  <Text size="xs" c="dimmed">
                    🛏️ {stat.roomsGrantedCount} / {roomsAvailable} Zimmer vergeben
                  </Text>
                ) : null}
                <Text size="xs" c="dimmed" fs="italic">
                  Klicken zum Tag springen
                </Text>
              </Stack>
            );

            return (
              <Tooltip
                key={stat.formattedDate}
                label={tooltipContent}
                multiline
                withArrow
                withinPortal
                classNames={{ tooltip: classes.tooltipContainer }}
              >
                <Box
                  className={`${classes.heatTile} ${heatClass}`}
                  onClick={() => onSelectDate?.(stat.formattedDate)}
                >
                  {isPeak && (
                    <Box className={classes.peakBadge}>
                      <IconFlame size={10} /> Peak
                    </Box>
                  )}
                  <Box ta="center">
                    <Text className={classes.tileDate}>{weekdayName}</Text>
                    <Text className={classes.tileDayNumber}>{dayNum}</Text>
                  </Box>

                  <Box ta="center" w="100%">
                    <Text className={classes.tileCount}>
                      {stat.count} / {seatsAvailable}
                    </Text>
                    <Box className={classes.tileBarContainer}>
                      <Progress
                        size="xs"
                        radius="xl"
                        value={Math.min(100, stat.capacityPct)}
                        color={
                          isPeak
                            ? "orange"
                            : stat.capacityPct >= 66
                              ? "grape"
                              : stat.capacityPct >= 36
                                ? "blue"
                                : "teal"
                        }
                      />
                    </Box>
                  </Box>
                </Box>
              </Tooltip>
            );
          })}
        </Box>
      </Box>
    </Card>
  );
}
