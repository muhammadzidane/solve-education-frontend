"use client";

import React, { useState } from "react";

import { FontDownloadOutlined } from "@mui/icons-material";
import { Typography, Container } from "@mui/material";

import DicreteSlider from "../DicreteSlider";
import Paper from "../Paper";

const QuestionContent: React.FC<QuestionContentProps> = ({ text }) => {
  const [contentFontSize, setContentFontSize] = useState<number>(16);

  const onChangeSlider = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const value = parseInt(target.value, 10);

    switch (value) {
      case 0:
        setContentFontSize(14);
        break;
      case 1:
        setContentFontSize(18);
        break;
      case 2:
        setContentFontSize(22);
        break;
    }
  };

  return (
    <div>
      <div className="bg-light-blue-1 h-[144px] pt-4">
        <Container maxWidth="lg">
          <div className="flex items-center gap-4">
            <FontDownloadOutlined fontSize="small" />
            <DicreteSlider
              onChange={onChangeSlider}
              color="secondary"
              defaultValue={0}
              step={1}
              min={0}
              max={2}
            />
            <FontDownloadOutlined />
          </div>
        </Container>
      </div>
      <Paper className="min-h-[100px]">
        <Typography fontSize={contentFontSize}>{text}</Typography>
      </Paper>
    </div>
  );
};

export default QuestionContent;
