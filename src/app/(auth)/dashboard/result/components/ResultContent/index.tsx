"use client";

import React from "react";

import { Box } from "@mui/material";

import { SingleTable } from "@/components";
import { useBoundStore } from "@/store";

const ResultContent: React.FC = () => {
  const { questionScore } = useBoundStore();

  return (
    <Box justifyContent="center" display="flex" gap="16px" mt="24px">
      <SingleTable value={`${questionScore} %`} title="Score" />
      <SingleTable value={`${questionScore} %`} title="Poin" />
    </Box>
  );
};

export default ResultContent;
