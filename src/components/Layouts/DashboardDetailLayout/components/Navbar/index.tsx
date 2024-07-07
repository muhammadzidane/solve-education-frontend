"use client";

import React from "react";

import {
  InfoOutlined as InfoIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { IconButton, Typography, Container, Box } from "@mui/material";
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
    <Box bgcolor="primary.main" boxShadow={3}>
      <Container maxWidth="xl">
        <Box alignItems="center" display="flex" height="64px">
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
      </Container>
    </Box>
  );
};

export default Navbar;
