import { Box, useMantineTheme } from "@mantine/core";
import { motion } from "framer-motion";
import { useState } from "react";

export function Computer({ active }: { active?: boolean }) {
  const [delay] = useState(() => Math.random());
  const { colorScheme, colors, black } = useMantineTheme();
  const backgroundColor = colorScheme === "dark" ? black : colors.gray[4];
  const activeColor = "#00adef";

  return (
    <Box
      component="svg"
      viewBox="0 0 55 78"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ fill: colorScheme === "dark" ? black : colors.gray[5] }}
    >
      <path d="M47.523 40.55h-40c-2.206 0-4-1.794-4-4v-30c0-2.206 1.794-4 4-4h40c2.206 0 4 1.794 4 4v30c0 2.206-1.794 4-4 4zm-40-36c-1.103 0-2 .897-2 2v30c0 1.103.897 2 2 2h40c1.103 0 2-.897 2-2v-30c0-1.103-.897-2-2-2h-40zm34 42h-28a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2z" />
      <motion.rect
        x="8"
        y="7"
        width="39"
        height="25"
        fill={backgroundColor}
        animate={
          active
            ? {
                fill: [
                  backgroundColor,
                  activeColor,
                  backgroundColor,
                  activeColor,
                ],
              }
            : undefined
        }
        transition={{
          duration: 1,
          times: [0, 0.05, 0.1, 1],
          delay,
        }}
      />
      <path d="M34.543 46.55h-14.02a1.002 1.002 0 0 1-.949-1.317l2-6a1 1 0 0 1 .949-.683h10a1 1 0 0 1 .949.684l1.94 5.821a1 1 0 0 1-.87 1.495zm-12.633-2h11.226l-1.333-4h-8.559l-1.334 4zm25.613-12h-40v-26h40v26zm-38-2h36v-22h-36v22z" />
      <circle r="2" cy="35.55" cx="27.523" />
      <g transform="scale(0.8) translate(7,14)">
        <path d="M51.298 72.768h-48v-24h48v24zm-46-2h44v-20h-44v20z" />
        <path d="M7.298 52.768h3v2h-3zm6 0h3v2h-3zm6 0h3v2h-3zm6 0h3v2h-3zm6 0h3v2h-3zm6 0h3v2h-3zm6 0h3v2h-3zm-36 8h3v2h-3zm6 0h3v2h-3zm6 0h3v2h-3zm6 0h3v2h-3zm6 0h3v2h-3zm6 0h3v2h-3zm6 0h3v2h-3zm-33-4h3v2h-3zm6 0h3v2h-3zm6 0h3v2h-3zm6 0h3v2h-3zm6 0h3v2h-3zm7 0h3v2h-3zM9.298 65.768h3v2h-3zM15.298 65.768h3v2h-3zM21.298 65.768h3v2h-3zM27.298 65.768h10v2h-10zM40.298 65.768h3v2h-3zM45.298 65.768h2v2h-2z" />
      </g>
    </Box>
  );
}
