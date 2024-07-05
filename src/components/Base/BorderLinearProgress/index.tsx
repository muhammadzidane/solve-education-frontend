"use client";

import React from "react";

import {
  linearProgressClasses,
  LinearProgressProps,
  LinearProgress,
  Box,
} from "@mui/material";

const BorderLinearProgress: React.FC<LinearProgressProps> = ({
  value = 20,
  ...rest
}) => {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress
        sx={{
          [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 10,
          },
          borderRadius: 10,
          height: 20,
        }}
        className="!bg-white-2"
        variant="determinate"
        color="success"
        value={value}
        {...rest}
      />
    </Box>
  );
};

export default BorderLinearProgress;
