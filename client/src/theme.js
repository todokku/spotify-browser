import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#1ed760",
    },
    grey: {
      main: "#282828",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: "500px",
        border: 0,
      },
      containedSecondary: {
        color: "#fff",
      },
    },
  },
});

export default theme;
