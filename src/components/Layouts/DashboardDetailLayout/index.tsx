import React from "react";

import { Box } from "@mui/material";

import { Footer, Navbar } from "./components";

/**
 * @param children Children content to be displayed inside the main template
 */
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
