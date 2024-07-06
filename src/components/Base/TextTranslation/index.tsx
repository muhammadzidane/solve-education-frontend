"use client";

import React, { useState } from "react";

import {
  ClickAwayListener,
  Typography,
  Button,
  Popper,
  Card,
  Box,
} from "@mui/material";
import Image from "next/image";

import { TextTranslationProps } from "./text-translation";

const TextTranslation: React.FC<TextTranslationProps> = ({
  children = "",
  fontWeight,
  fontSize,
}) => {
  const splitText = children.split(" ");

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // Handle open
  const onOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle Clouse
  const onClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display="flex">
      <Typography>
        {splitText.map((text, textIndex) => (
          <Button
            onClick={onOpen}
            sx={{
              bgcolor:
                open && anchorEl?.tabIndex === textIndex
                  ? "secondary.light"
                  : "",
              minWidth: "fit-content",
              color: "#000000",
              fontWeight,
              fontSize,
              px: 0.23,
              py: 0,
            }}
            aria-describedby={id}
            tabIndex={textIndex}
            key={textIndex}
          >
            {text}
          </Button>
        ))}
      </Typography>

      <Popper anchorEl={anchorEl} open={open} id={id}>
        <ClickAwayListener onClickAway={onClose}>
          <div>
            <Box
              sx={{
                ":after": {
                  boxShadow: "-1px -1px 10px -2px rgba(0, 0, 0, 0.3)",
                  background: "background.paper",
                  transform: "rotate(45deg)",
                  position: "absolute",
                  height: "20px",
                  width: "20px",
                  content: '""',
                  top: "10px",
                },
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                height: "20px",
                width: "100%",
              }}
            />
            <Card
              sx={{ position: "relative", borderRadius: "6px" }}
              elevation={2}
            >
              <Box alignItems="center" display="flex" gap={1} p={2}>
                <Image
                  className="rounded-full object-cover"
                  alt="United Kingdom Flag"
                  src="/svg/icon-uk.svg"
                  height={18}
                  width={18}
                />
                <Typography fontWeight={600}>{anchorEl?.innerText}</Typography>
              </Box>
              <Box
                bgcolor="secondary.light"
                alignItems="center"
                display="flex"
                gap={1}
                p={2}
              >
                <Image
                  className="rounded-full object-cover"
                  src="/svg/icon-indonesia.svg"
                  alt="Indonesia Flag"
                  height={18}
                  width={18}
                />
                <Typography>
                  {anchorEl?.innerText}, {anchorEl?.innerText},{" "}
                  {anchorEl?.innerText}
                </Typography>
              </Box>
            </Card>
          </div>
        </ClickAwayListener>
      </Popper>
    </Box>
  );
};

export default TextTranslation;
