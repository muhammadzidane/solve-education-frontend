import React from "react";

import { PopperProps, Typography, Popper } from "@mui/material";

const PopperTranslation: React.FC<PopperProps> = ({ ...rest }) => {
  return (
    <Popper {...rest}>
      <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
    </Popper>
  );
};

export default PopperTranslation;
