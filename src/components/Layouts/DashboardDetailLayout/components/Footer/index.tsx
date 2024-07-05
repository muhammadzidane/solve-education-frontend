"use client";

import React, { useState } from "react";

import DescriptionIcon from "@mui/icons-material/Description";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { Box } from "@mui/material";

import { Tabs, Tab } from "@/components";

const Footer: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
          onChange={handleChange}
          aria-label="styled tabs example"
          variant="fullWidth"
          value={value}
          centered
        >
          <Tab
            icon={
              <DescriptionIcon
                sx={{ color: value === 0 ? "primary.main" : "" }}
              />
            }
            iconPosition="start"
            label="Passage"
          />
          <Tab
            icon={
              <QuestionAnswerIcon
                sx={{ color: value === 1 ? "primary.main" : "" }}
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
