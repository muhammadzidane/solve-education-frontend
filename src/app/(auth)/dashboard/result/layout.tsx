import React from "react";

import { Container, Box } from "@mui/material";

const LayoutDashboardResult: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <Container maxWidth="lg" sx={{ p: 8 }}>
      <Box textAlign="center">{children}</Box>
    </Container>
  );
};

export default LayoutDashboardResult;
