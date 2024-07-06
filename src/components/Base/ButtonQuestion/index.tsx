import React from "react";

import { ButtonProps, Typography, Button } from "@mui/material";

const ButtonQuestion: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Button
      sx={{ justifyContent: "start", borderRadius: 2, height: 56 }}
      variant="outlined"
      color="secondary"
      fullWidth
      {...rest}
    >
      <Typography
        sx={{
          textTransform: "capitalize",
        }}
        fontWeight={600}
        fontSize={14}
      >
        {children}
      </Typography>
    </Button>
  );
};

export default ButtonQuestion;
