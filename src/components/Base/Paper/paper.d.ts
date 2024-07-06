import { PaperProps as PaperPropsMUI } from "@mui/material";

export interface PaperProps extends PaperPropsMUI {
  borderPosition?: "bottom" | "right" | "left" | "top";
}
