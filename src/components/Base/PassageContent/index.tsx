"use client";

import React from "react";

import { FontDownloadOutlined } from "@mui/icons-material";
import { Container, Box } from "@mui/material";

import { useBoundStore } from "@/store";

import DicreteSlider from "../DicreteSlider";
import Paper from "../Paper";
import TextTranslation from "../TextTranslation";
import { PassageContentProps } from "./passage-content";

const PassageContent: React.FC<PassageContentProps> = ({ text }) => {
  const {
    setQuestionFontSlider,
    setQuestionFontSize,
    questionFontSlider,
    questionFontSize,
  } = useBoundStore();

  const onChangeSlider = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const value = parseInt(target.value, 10);
    const fontSettings = [
      { slider: 0, size: 14 },
      { slider: 1, size: 18 },
      { slider: 2, size: 22 },
    ];

    setQuestionFontSize(fontSettings[value].size);
    setQuestionFontSlider(value);
  };

  return (
    <div>
      <Box bgcolor="secondary.light" height="144px" pt="16px">
        <Container maxWidth="lg">
          <Box alignItems="center" display="flex" gap="16px">
            <FontDownloadOutlined fontSize="small" />
            <DicreteSlider
              onChange={onChangeSlider}
              defaultValue={questionFontSlider}
              color="secondary"
              step={1}
              min={0}
              max={2}
            />
            <FontDownloadOutlined />
          </Box>
        </Container>
      </Box>
      <Paper
        sx={{
          position: "relative",
          minHeight: "100px",
          top: "-64px",
          width: "90%",
          mx: "auto",
        }}
      >
        <TextTranslation fontSize={questionFontSize}>{text}</TextTranslation>
      </Paper>
    </div>
  );
};

export default PassageContent;
