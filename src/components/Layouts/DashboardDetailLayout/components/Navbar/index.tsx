"use client";

import React from "react";

import {
  InfoOutlined as InfoIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { IconButton, Typography, Box } from "@mui/material";
import Link from "next/link";

import { BorderLinearProgress, Modal } from "@/components";
import { useToggle } from "@/hooks";
import { useBoundStore } from "@/store";

const Navbar: React.FC = () => {
  const { isToggle, onToggle } = useToggle();
  const { questionProgress } = useBoundStore();

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
      <Link href="/dashboard">
        <IconButton size="large">
          <CloseIcon fontSize="large" />
        </IconButton>
      </Link>

      <BorderLinearProgress value={questionProgress} />

      <IconButton onClick={onToggle} className="ml-2">
        <InfoIcon />
      </IconButton>

      <Modal onClose={onToggle} open={isToggle}>
        <Typography>Tap to translate!</Typography>
      </Modal>
    </Box>
  );
};

export default Navbar;
