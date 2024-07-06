"use client";

import React from "react";

import {
  linearProgressClasses,
  LinearProgressProps,
  LinearProgress,
  Box,
} from "@mui/material";

const BorderLinearProgress: React.FC<LinearProgressProps> = ({
  value = 0,
  ...rest
}) => {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress
        sx={{
          [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 10,
          },
          bgcolor: "background.paper",
          borderRadius: 10,
          height: 20,
        }}
        variant="determinate"
        color="success"
        value={value}
        {...rest}
      />
    </Box>
  );
};

export default BorderLinearProgress;
