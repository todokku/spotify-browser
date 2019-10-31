import React from "react";

import theme from "../theme";
import useFigmaColors from "../hooks/useFigmaColors";

import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Box from "@material-ui/core/Box";

import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(() => ({
  loader: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const FigmaThemeProvider = ({ children }) => {
  const classes = useStyles();
  const figmaColors = useFigmaColors();

  if (!figmaColors) {
    return (
      <Box className={classes.loader}>
        <CircularProgress />
      </Box>
    );
  }

  const muiTheme = createMuiTheme({
    theme,
    palette: figmaColors,
  });

  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
};

export default FigmaThemeProvider;
