import React from "react";

import {
  InfoOutlined as InfoIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Link from "next/link";

import { BorderLinearProgress } from "@/components/Base";

const Navbar: React.FC = () => {
  return (
    <div className="bg-primary px-6 h-16 shadow-bold mb-[0.025rem] flex items-center">
      <Link href="/dashboard">
        <IconButton size="large">
          <CloseIcon fontSize="large" />
        </IconButton>
      </Link>
      <BorderLinearProgress />
      <IconButton className="ml-2">
        <InfoIcon />
      </IconButton>
    </div>
  );
};

export default Navbar;
