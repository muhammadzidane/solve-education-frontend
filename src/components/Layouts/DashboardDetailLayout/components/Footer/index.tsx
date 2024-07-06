"use client";

import React from "react";

import DescriptionIcon from "@mui/icons-material/Description";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { Box } from "@mui/material";

import { Tabs, Tab } from "@/components";
import { useBoundStore } from "@/store";

const Footer: React.FC = () => {
  const { questionToggleTab, questionTab } = useBoundStore();

  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        height: 72,
        bottom: 0,
      }}
    >
      <Box sx={{ bgcolor: "secondary.dark" }}>
        <Tabs
          onChange={questionToggleTab}
          aria-label="styled tabs example"
          variant="fullWidth"
          value={questionTab}
          centered
        >
          <Tab
            icon={
              <DescriptionIcon
                sx={{ color: questionTab === 0 ? "primary.main" : "" }}
              />
            }
            iconPosition="start"
            label="Passage"
          />
          <Tab
            icon={
              <QuestionAnswerIcon
                sx={{ color: questionTab === 1 ? "primary.main" : "" }}
              />
            }
            iconPosition="start"
            label="Question"
          />
        </Tabs>
        <Box sx={{ p: 3 }} />
      </Box>
    </Box>
  );
};

export default Footer;
