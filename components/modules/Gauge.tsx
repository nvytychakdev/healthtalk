import useGaugeColor, { Color } from "@hooks/useGaugeColor";
import { useMantineTheme } from "@mantine/core";
import { FC, ReactNode } from "react";

const Gauge: FC<{ children: ReactNode; color?: Color }> = ({
  children,
  color,
}) => {
  const theme = useMantineTheme();
  const gaugeColor = useGaugeColor(color);

  return (
    <div
      className={`inline-flex text-lg font-bold items-center justify-center px-3 py-2 rounded-xl`}
      style={{
        color: theme.white,
        minWidth: "100px",
        backgroundColor: gaugeColor,
        textShadow: `0px 0px 4px ${theme.colors.dark[3]}`,
      }}
    >
      {children}
    </div>
  );
};

export default Gauge;
