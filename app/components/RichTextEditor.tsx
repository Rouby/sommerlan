import type { RichTextEditorProps } from "@mantine/rte";
import { useEffect, useState } from "react";

let hydrating = true;

export function RichTextEditor(props: RichTextEditorProps) {
  const [hydrated, setHydrated] = useState(() => !hydrating);

  useEffect(function hydrate() {
    hydrating = false;
    setHydrated(true);
  }, []);

  if (hydrated) {
    const { RichTextEditor } = require("@mantine/rte");
    return <RichTextEditor {...props} />;
  }

  return null;
}
