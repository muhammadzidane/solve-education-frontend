import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          borderRadius: "10px",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#000000",
        },
      },
    },
  },
  palette: {
    secondary: {
      light: "#D0E0F9",
      main: "#1976D2",
      dark: "#222E3A",
    },
    primary: {
      main: "#FFD018",
      dark: "#000000",
    },
    success: {
      main: "#4CAF50",
    },
    error: {
      main: "#EF5350",
    },
  },
});
