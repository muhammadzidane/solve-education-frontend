"use client";

import React, { useState } from "react";

import { FontDownloadOutlined } from "@mui/icons-material";
import { Container, Box } from "@mui/material";

import DicreteSlider from "../DicreteSlider";
import Paper from "../Paper";
import TextTranslation from "../TextTranslation";
import { PassageContentProps } from "./passage-content";

const PassageContent: React.FC<PassageContentProps> = ({ text }) => {
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
      <Box bgcolor="secondary.light" height="144px" pt="16px">
        <Container maxWidth="lg">
          <Box alignItems="center" display="flex" gap="16px">
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
          </Box>
        </Container>
      </Box>
      <Paper
        sx={{
          position: "relative",
          minHeight: "100px",
          top: "-64px",
          mx: "80px",
        }}
      >
        <TextTranslation fontSize={contentFontSize}>{text}</TextTranslation>
      </Paper>
    </div>
  );
};

export default PassageContent;
