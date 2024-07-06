"use client";

import React from "react";

import {
  InfoOutlined as InfoIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { IconButton, Typography, Box } from "@mui/material";
import { useRouter } from "next/navigation";

import { BorderLinearProgress, Modal } from "@/components";
import { useToggle } from "@/hooks";
import { useBoundStore } from "@/store";

const Navbar: React.FC = () => {
  const router = useRouter();
  const { isToggle, onToggle } = useToggle();
  const { questionProgress, resetQuestion } = useBoundStore();

  const onRedirectDashboard = () => {
    resetQuestion();
    router.push("/dashboard");
  };

  return (
    <Box
      bgcolor="primary.main"
      alignItems="center"
      display="flex"
      boxShadow={3}
      height="64px"
      mb="0.025rem"
      px="24px"
    >
      <IconButton onClick={onRedirectDashboard} size="large">
        <CloseIcon fontSize="large" />
      </IconButton>
      <BorderLinearProgress value={questionProgress * 20} />
      <IconButton onClick={onToggle} sx={{ ml: "8px" }}>
        <InfoIcon />
      </IconButton>
      <Modal onClose={onToggle} open={isToggle}>
        <Typography>Tap to translate!</Typography>
      </Modal>
    </Box>
  );
};

export default Navbar;
