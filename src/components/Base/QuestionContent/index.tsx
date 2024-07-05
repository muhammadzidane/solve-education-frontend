"use client";

import React, { useState } from "react";

import { FontDownloadOutlined } from "@mui/icons-material";
import { Typography, Container, Paper } from "@mui/material";

import DicreteSlider from "../DicreteSlider";

const QuestionContent: React.FC = () => {
  const [contentFontSize, setContentFontSize] = useState<number>(16);

  const onChangeSlider = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const value = parseInt(target.value, 10);

    switch (value) {
      case 0:
        setContentFontSize(16);
        break;
      case 1:
        setContentFontSize(20);
        break;
      case 2:
        setContentFontSize(24);
        break;
    }
  };

  return (
    <div>
      <div className="bg-light-blue-1 h-[144px] pt-4">
        <Container maxWidth="lg">
          <div className="flex items-center gap-6">
            <FontDownloadOutlined fontSize="small" />
            <DicreteSlider
              onChange={onChangeSlider}
              defaultValue={0}
              step={1}
              min={0}
              max={2}
            />
            <FontDownloadOutlined />
          </div>
        </Container>
      </div>
      <Paper className="h-[100px] p-3 mx-16 relative -top-16 !rounded-xl">
        <Typography fontSize={contentFontSize}>Blablabla</Typography>
      </Paper>
    </div>
  );
};

export default QuestionContent;
