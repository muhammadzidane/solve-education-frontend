"use client";

import React from "react";

import { Paper as PaperMUI, styled } from "@mui/material";

import { capitalizeFirstLetter } from "@/helpers";

import { PaperProps } from "./paper";

const Paper = styled(({ ...rest }: PaperProps) => <PaperMUI {...rest} />)(
  ({ borderPosition = "top" }) => ({
    [`border${capitalizeFirstLetter(borderPosition)}`]: "3px solid #03A9F4",
    padding: "6px 10px",
  })
);

export default Paper;
