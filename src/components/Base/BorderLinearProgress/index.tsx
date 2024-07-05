import React from "react";

import { LinearProgressProps, LinearProgress, Box } from "@mui/material";

const BorderLinearProgress: React.FC<LinearProgressProps> = ({
  value = 20,
  ...rest
}) => {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress
        sx={{
          ".MuiLinearProgress-bar": {
            borderRadius: 10,
          },
          borderRadius: 10,
          height: 20,
        }}
        variant="determinate"
        value={value}
        {...rest}
      />
    </Box>
  );
};

export default BorderLinearProgress;
