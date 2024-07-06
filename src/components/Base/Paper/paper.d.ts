import { PaperProps as PaperPropsMUI } from "@mui/material";

interface PaperProps extends PaperPropsMUI {
  borderPosition?: "bottom" | "right" | "left" | "top";
}
