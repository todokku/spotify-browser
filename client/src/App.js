import React, { Fragment } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import { FigmaThemeProvider } from "./figma";

import { Provider } from "react-redux";
import { store } from "./redux";

import Router from "./Router";
import "./App.css";

import LogoIcon from "./components/LogoIcon";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <FigmaThemeProvider>
        <Container id="container" fixed data-testid="main-container">
          <Box id="box">
            <LogoIcon className="logo" size="medium" />
            <Welcome />
            <Provider store={store}>
              <Router />
            </Provider>
          </Box>
        </Container>
      </FigmaThemeProvider>
    </Fragment>
  );
};

export default App;
