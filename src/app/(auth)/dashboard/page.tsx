/* eslint-disable @typescript-eslint/no-misused-promises */
import React from "react";

import { type Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "...",
};

const Dashboard = () => {
  return (
    <>
      <Link href="/dashboard/detail">
        <Button type="button">Detail</Button>
      </Link>
    </>
  );
};

export default Dashboard;
