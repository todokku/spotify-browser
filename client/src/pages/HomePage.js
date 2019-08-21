import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import { REACT_APP_API_VERSION } from "../constants";
import TokenStorage from "../TokenStorage";
import { SEARCH_URL, ERROR_URL } from "../routes";

import Loader from "../components/Loader";

const tokenStorage = new TokenStorage();

export const HomePage = ({ isLoading, error }) => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  if (isLoading || isLoggingIn) {
    return <Loader />;
  }

  if (error) {
    return <Redirect to={ERROR_URL} />;
  }

  const onLoginLinkClick = () => {
    setIsLoggingIn(true);

    axios
      .get(`api/${REACT_APP_API_VERSION}/login`)
      .then(({ data: { url } }) => {
        window.location = url;
      })
      .catch(() => {
        setIsLoggingIn(false);
      });
  };

  if (!tokenStorage.hasToken()) {
    return (
      <Box textAlign="center" data-testid="home-page">
        <Button
          onClick={onLoginLinkClick}
          size="large"
          variant="contained"
          color="secondary"
          disableRipple
          data-testid="login-link"
        >
          Login
        </Button>
      </Box>
    );
  }

  return <Redirect to={SEARCH_URL} />;
};

const mapStateToProps = ({ root: { isLoading, error } }) => ({
  isLoading,
  error,
});

export default connect(mapStateToProps)(HomePage);
