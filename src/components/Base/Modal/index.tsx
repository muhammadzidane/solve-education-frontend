import React from "react";

import { Modal as ModalMUI, ClickAwayListener, Box } from "@mui/material";

import { ModalProps } from "./modal-types";

const style = {
  transform: "translate(-50%, -50%)",
  position: "absolute" as const,
  bgcolor: "background.paper",
  boxShadow: 24,
  left: "50%",
  top: "50%",
  width: 400,
  p: 4,
};

const Modal: React.FC<ModalProps> = ({ children, onClose, ...rest }) => {
  return (
    <ModalMUI
      aria-describedby="modal-modal-description"
      aria-labelledby="modal-modal-title"
      {...rest}
    >
      <ClickAwayListener onClickAway={onClose}>
        <Box sx={style}>{children}</Box>
      </ClickAwayListener>
    </ModalMUI>
  );
};

export default Modal;
