import {
  Button,
  Popover,
  type ButtonProps,
  type PopoverProps,
} from "@mantine/core";
import { useState } from "react";

export function PopoverButton<C = "button">({
  label,
  width,
  position = "bottom",
  withArrow,
  title,
  withCloseButton,
  children,
  ...props
}: {
  label: React.ReactNode;
  width?: number;
  position?: PopoverProps["position"];
  withArrow?: PopoverProps["withArrow"];
  title?: PopoverProps["title"];
  withCloseButton?: PopoverProps["withCloseButton"];
  children: (p: { setIsOpen: (b: boolean) => void }) => React.ReactNode;
} & Omit<ButtonProps<C>, "onClick" | "children">) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover
      opened={isOpen}
      onClose={() => setIsOpen(false)}
      target={
        <Button onClick={() => setIsOpen((o) => !o)} {...props}>
          {label}
        </Button>
      }
      width={width}
      position={position}
      withArrow={withArrow}
      title={title}
      withCloseButton={withCloseButton}
    >
      {children({ setIsOpen })}
    </Popover>
  );
}
