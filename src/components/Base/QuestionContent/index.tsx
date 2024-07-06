"use client";

import React from "react";

import { Typography, Box } from "@mui/material";

import Paper from "../Paper";

const QuestionContent: React.FC<QuestionContentProps> = ({ text }) => {
  return (
    <Box flexDirection="column" display="flex" gap={2}>
      <Box
        sx={{
          bgcolor: "secondary.light",
          alignItems: "center",
          display: "flex",
          width: "100%",
          height: 144,
        }}
      >
        <Paper
          sx={{
            alignItems: "center",
            minHeight: "100px",
            display: "flex",
            width: "100%",
            mx: 6,
          }}
          borderPosition="left"
        >
          <Typography fontWeight={600}>{text}</Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default QuestionContent;
