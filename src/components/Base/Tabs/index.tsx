"use client";

import { Tabs as TabsMUI, TabsProps, styled } from "@mui/material";

const Tabs = styled(({ ...rest }: TabsProps) => (
  <TabsMUI
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    {...rest}
  />
))(({ theme }) => ({
  "& .MuiTabs-indicator": {
    justifyContent: "center",
    backgroundColor: "red",
    display: "flex",
    top: 0,
  },
  "& .MuiTabs-indicatorSpan": {
    backgroundColor: theme.palette.primary.main,
    height: "4px",
    width: "100%",
  },
}));

export default Tabs;
