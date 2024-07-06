import React from "react";

import { Typography, Box } from "@mui/material";

const SingleTable: React.FC<SingleTableProps> = ({ title, value, type }) => {
  const typeColor = `${type}.main`;

  return (
    <Box
      sx={{
        borderColor: typeColor,
        borderStyle: "solid",
        borderWidth: "2px",
        minWidth: "96px",
      }}
    >
      <Box bgcolor={typeColor} p="6px">
        <Typography color="background.paper">{title}</Typography>
      </Box>
      <Typography p="6px">{value}</Typography>
    </Box>
  );
};

export default SingleTable;
