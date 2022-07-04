import { useMantineTheme } from "@mantine/core";
import { Dispatch, SetStateAction, useState } from "react";

export type Color = "red" | "amber" | "green";

function useGaugeColor(gaugeColor?: Color) {
  const theme = useMantineTheme();
  const [color] = useState(gaugeColor || "");

  switch (color) {
    case "red":
      return theme.colors.main[4];
    case "amber":
      return theme.colors.main[2];
    case "green":
      return theme.colors.main[1];
    default:
      return theme.colors.dark[5];
  }
}

export default useGaugeColor;
