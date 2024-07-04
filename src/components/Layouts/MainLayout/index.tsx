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
      <div className="bg-primary px-6 h-16 shadow-md flex gap-3 items-center">
        <IconButton size="large">
          <CloseIcon fontSize="large" />
        </IconButton>
        <BorderLinearProgress />
        <IconButton size="large">
          <InfoIcon fontSize="large" />
        </IconButton>
      </div>
      <div className="p-8">
        <div>{children}</div>
      </div>
    </div>
  </div>
);

export default MainTemplate;
