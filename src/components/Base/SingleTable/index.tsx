import React from "react";

import { Typography, Box } from "@mui/material";

const SingleTable: React.FC<SingleTableProps> = ({ title, value }) => {
  return (
    <Box
      sx={{
        borderColor: "primary.main",
        borderStyle: "solid",
        borderWidth: "1px",
        minWidth: "96px",
      }}
    >
      <Box bgcolor="primary.main" p="6px">
        <Typography color="background.paper">{title}</Typography>
      </Box>
      <Typography p="6px">{value}</Typography>
    </Box>
  );
};

export default SingleTable;
