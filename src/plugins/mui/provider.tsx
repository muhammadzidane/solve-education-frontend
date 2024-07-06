"use client";

import React from "react";

import { ThemeProvider } from "@mui/material";

import { ChildrenProps } from "@/types";

import { theme } from "./theme";

const MUIThemeProvider: React.FC<ChildrenProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MUIThemeProvider;
