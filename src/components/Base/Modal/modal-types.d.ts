import { ModalProps as ModalPropsMUI } from "@mui/material";

export interface ModalProps extends ModalPropsMUI {
  onClose: () => void;
}
