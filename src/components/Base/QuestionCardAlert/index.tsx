import React from "react";

import { Typography, Button, Card, Box } from "@mui/material";
import Image from "next/image";

const QuestionCardAlert: React.FC<QuestionCardAlertProps> = ({
  title,
  type,
}) => {
  const imageSrc = type === "success" ? "correct" : "incorrect";

  return (
    <Card elevation={2}>
      <Box flexDirection="column" display="flex" gap={2} p={1}>
        <Box justifyContent="center" alignItems="center" display="flex">
          <Image
            src={`/animation/ed-${imageSrc}.gif`}
            alt="Animation"
            height={80}
            width={80}
          />
          <Typography color="error" variant="h5">
            {title}
          </Typography>
        </Box>
        <Box justifyContent="center" display="flex">
          <Button variant="contained" color="error" size="large">
            Continue
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default QuestionCardAlert;
