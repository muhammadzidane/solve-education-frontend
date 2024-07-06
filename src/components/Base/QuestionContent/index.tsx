"use client";

import React from "react";

import { Box } from "@mui/material";

import Paper from "../Paper";
import TextTranslation from "../TextTranslation";
import { QuestionContentProps } from "./question-content";

const QuestionContent: React.FC<QuestionContentProps> = ({ text }) => {
  return (
    <div>
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
          <TextTranslation fontWeight={600}>{text}</TextTranslation>
        </Paper>
      </Box>
    </div>
  );
};

export default QuestionContent;
