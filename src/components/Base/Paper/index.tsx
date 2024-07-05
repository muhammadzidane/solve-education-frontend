import React from "react";

import { Paper as PaperMUI, PaperProps } from "@mui/material";
import classNames from "classnames";

const Paper: React.FC<PaperProps> = ({ className, children, ...rest }) => {
  const paperClassName = classNames(
    "py-2 px-3 mx-20 relative -top-16 !rounded-xl",
    className
  );

  return (
    <PaperMUI
      sx={{
        borderTop: "3px solid #03A9F4",
      }}
      className={paperClassName}
      elevation={2}
      {...rest}
    >
      {children}
    </PaperMUI>
  );
};

export default Paper;
