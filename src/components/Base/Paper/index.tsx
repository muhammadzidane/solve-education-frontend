import React from "react";

import { Paper as PaperMUI } from "@mui/material";

import { capitalizeFirstLetter } from "@/helpers";

import { PaperProps } from "./paper";

const Paper: React.FC<PaperProps> = ({
  borderPosition = "top",
  children,
  sx,
}) => {
  return (
    <PaperMUI
      sx={{
        [`border${capitalizeFirstLetter(borderPosition)}`]: "3px solid #03A9F4",
        borderRadius: "10px",
        padding: "6px 10px",
        ...sx,
      }}
    >
      {children}
    </PaperMUI>
  );
};

export default Paper;
