import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    secondary: {
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
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#000000",
        },
      },
    },
  },
});
