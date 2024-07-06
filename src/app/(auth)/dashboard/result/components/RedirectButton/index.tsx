"use client";

import React from "react";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

import { useBoundStore } from "@/store";

const RedirectButton: React.FC = () => {
  const router = useRouter();
  const { resetQuestion } = useBoundStore();

  const onRedirectDashboard = () => {
    resetQuestion();
    router.push("/dashboard");
  };

  return (
    <Button
      onClick={onRedirectDashboard}
      startIcon={<KeyboardBackspaceIcon />}
      sx={{ pt: "24px" }}
      variant="text"
    >
      Back to Home
    </Button>
  );
};

export default RedirectButton;
