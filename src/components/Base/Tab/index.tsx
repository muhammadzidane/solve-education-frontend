"use client";

import { Tab as TabMUI, TabProps, styled } from "@mui/material";

const Tab = styled(({ ...rest }: TabProps) => (
  <TabMUI disableRipple {...rest} />
))(({ theme }) => ({
  "& .Mui-focusVisible": {
    backgroundColor: "rgba(100, 95, 228, 0.32)",
  },
  "& .Mui-selected": {
    color: "#FFFFFF",
  },
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.pxToRem(15),
  color: "rgba(255, 255, 255, 0.7)",
  marginRight: theme.spacing(1),
  textTransform: "none",
}));

export default Tab;
