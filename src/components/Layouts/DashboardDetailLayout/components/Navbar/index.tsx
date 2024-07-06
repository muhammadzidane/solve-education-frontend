"use client";

import React from "react";

import {
  InfoOutlined as InfoIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import Link from "next/link";

import { BorderLinearProgress, Modal } from "@/components";
import { useToggle } from "@/hooks";

const Navbar: React.FC = () => {
  const { isToggle, onToggle } = useToggle();

  return (
    <div className="bg-primary px-6 h-16 shadow-bold mb-[0.025rem] flex items-center">
      <Link href="/dashboard">
        <IconButton size="large">
          <CloseIcon fontSize="large" />
        </IconButton>
      </Link>

      <BorderLinearProgress />

      <IconButton onClick={onToggle} className="ml-2">
        <InfoIcon />
      </IconButton>

      <Modal onClose={onToggle} open={isToggle}>
        <Typography>Tap to translate!</Typography>
      </Modal>
    </div>
  );
};

export default Navbar;
