/* eslint-disable @typescript-eslint/no-misused-promises */
import React from "react";

import { Typography } from "@mui/material";
import { type Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "...",
};

const Dashboard = () => {
  return (
    <div className="p-8">
      <Typography className="!mb-6" component="h5" variant="h5">
        Welcome to Ed The Learning Bot - Made by Muhammad Zidane Al - Saadawi
      </Typography>

      <Typography className="!mb-2">
        Click the start button below to start the questions
      </Typography>

      <Link href="/dashboard/detail" className="no-underline">
        <Button type="button">Start</Button>
      </Link>
    </div>
  );
};

export default Dashboard;
