import { atom } from "jotai";

export const colorSchemeAtom = atom<"dark" | "light">(
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
);
