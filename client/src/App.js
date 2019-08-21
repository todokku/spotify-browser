import React, { Fragment } from "react";

import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import { Provider } from "react-redux";
import { store } from "./redux";

import Router from "./Router";
import theme from "./theme";
import "./App.css";

import LogoIcon from "./components/LogoIcon";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container id="container" fixed data-testid="main-container">
          <Box id="box">
            <LogoIcon className="logo" size="medium" />
            <Welcome />
            <Provider store={store}>
              <Router />
            </Provider>
          </Box>
        </Container>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
