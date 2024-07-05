import React from "react";

import {
  InfoOutlined as InfoIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

import { BorderLinearProgress } from "@/components/Base";

/**
 * @param children Children content to be displayed inside the main template
 */
const MainTemplate: React.FC<ChildrenProps> = ({ children }) => (
  <div className="flex h-screen">
    <div className="flex flex-col ml-auto w-full">
      <div className="bg-primary px-6 h-16 shadow-md flex items-center">
        <IconButton size="large">
          <CloseIcon fontSize="large" />
        </IconButton>
        <BorderLinearProgress />
        <IconButton className="ml-2">
          <InfoIcon />
        </IconButton>
      </div>
      <div>{children}</div>
    </div>
  </div>
);

export default MainTemplate;
