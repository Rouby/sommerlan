import {
  Avatar,
  CheckIcon,
  Combobox,
  Group,
  Pill,
  PillsInput,
  PillsInputProps,
  Text,
  useCombobox,
} from "@mantine/core";
import { forwardRef, useState } from "react";

export function GamesCombobox({
  loading,
  value,
  games,
  onChange,
  onCreate,
  ...props
}: {
  loading?: boolean;
  value: string[];
  games: { id: string; name: string; image: string }[];
  onChange: (value: string[]) => void;
  onCreate: (name: string) => void;
} & Omit<PillsInputProps, "onChange" | "value">) {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex("active"),
  });

  const [search, setSearch] = useState("");

  return (
    <Combobox
      disabled={loading}
      store={combobox}
      onOptionSubmit={(val) => {
        setSearch("");

        if (val === "$create") {
          onCreate(search);
        } else {
          onChange(
            value?.includes(val)
              ? value?.filter((g) => g !== val) ?? []
              : [...(value ?? []), val],
          );
        }
      }}
      withinPortal={false}
    >
      <Combobox.DropdownTarget>
        <PillsInput {...props}>
          <Pill.Group>
            {value?.map((gameId) => (
              <Pill
                key={gameId}
                withRemoveButton
                onRemove={() => {
                  onChange(value?.filter((g) => g !== gameId) ?? []);
                }}
              >
                {games?.find((g) => g.id === gameId)?.name}
              </Pill>
            ))}

            <Combobox.EventsTarget>
              <PillsInput.Field
                onFocus={() => combobox.openDropdown()}
                onBlur={() => combobox.closeDropdown()}
                value={search}
                placeholder="Search games"
                onChange={(event) => {
                  combobox.updateSelectedOptionIndex();
                  setSearch(event.currentTarget.value);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Backspace" && search.length === 0) {
                    event.preventDefault();
                    onChange(value?.slice(0, -1) ?? []);
                  }
                }}
              />
            </Combobox.EventsTarget>
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>
      <Combobox.Dropdown>
        <Combobox.Options>
          {games
            ?.filter((game) =>
              game.name.toLowerCase().includes(search.trim().toLowerCase()),
            )
            .map((game) => (
              <Combobox.Option
                key={game.id}
                value={game.id}
                active={value?.includes(game.id)}
              >
                <GameItem
                  active={value?.includes(game.id)}
                  label={game.name}
                  image={game.image}
                />
              </Combobox.Option>
            ))}

          {!games?.some((game) => game.name === search) &&
            search.trim().length > 0 && (
              <Combobox.Option value="$create">+ Add {search}</Combobox.Option>
            )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}

const GameItem = forwardRef(function GameItem(
  {
    image,
    label,
    active,
    ...props
  }: { image: string; label: string; active?: boolean },
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <div ref={ref} {...props}>
      <Group wrap="nowrap">
        <Avatar radius="xl" src={image}>
          {label
            .split(" ")
            .map((name) => name[0])
            .join("")}
        </Avatar>

        <Text size="sm" flex="1 1 auto">
          {label}
        </Text>

        {active && <CheckIcon size={12} />}
      </Group>
    </div>
  );
});
