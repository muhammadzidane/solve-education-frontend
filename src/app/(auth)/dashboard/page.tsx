/* eslint-disable @typescript-eslint/no-misused-promises */
import React from "react";

import { Typography, Container } from "@mui/material";
import { Button } from "@mui/material";
import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "...",
};

const Dashboard = () => {
  return (
    <Container sx={{ py: "36px" }}>
      <Typography sx={{ mb: "24px" }} component="h5" variant="h5">
        Welcome to Ed The Learning Bot - Made by Muhammad Zidane Al - Saadawi
      </Typography>

      <Typography sx={{ mb: "8px" }}>
        Click the start button below to start the questions
      </Typography>

      <Link href="/dashboard/detail" className="no-underline">
        <Button variant="contained" color="info">
          Start
        </Button>
      </Link>
    </Container>
  );
};

export default Dashboard;
