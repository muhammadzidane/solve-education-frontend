import React from "react";

import { Box } from "@mui/material";

import { ChildrenProps } from "@/types";

import { Footer, Navbar } from "./components";

const DashboardDetailLayout: React.FC<ChildrenProps> = ({ children }) => (
  <Box display="flex" height="100vh">
    <Box flexDirection="column" display="flex" width="100%" ml="auto">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </Box>
  </Box>
);

export default DashboardDetailLayout;
