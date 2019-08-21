import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { refreshToken, cleanToken, setError } from "../redux/actions";

import TokenStorage from "../TokenStorage";
import { INVALID_OR_EXPIRED_ACCESS_TOKEN_ERROR_CODE } from "../errors";
import { HOME_URL } from "../routes";

import ErrorContent from "../components/ErrorContent";
import Loader from "../components/Loader";

const tokenStorage = new TokenStorage();

const useStyles = makeStyles((theme) => ({
  message: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    fontWeight: 500,
    color: theme.palette.error.main,
    textTransform: "uppercase",
    letterSpacing: 4,
  },
}));

export const ErrorPage = ({
  isLoading,
  error,
  refreshToken,
  cleanToken,
  setError,
}) => {
  const classes = useStyles();

  useEffect(() => {
    if (!error) return;

    if (error.code === INVALID_OR_EXPIRED_ACCESS_TOKEN_ERROR_CODE) {
      if (tokenStorage.hasToken() && tokenStorage.isTokenExpired()) {
        refreshToken();
        return;
      }

      cleanToken();
    }
  });

  if (isLoading) {
    return <Loader />;
  }

  if (!error) {
    return <Redirect to={HOME_URL} />;
  }

  const onBackClick = () => {
    setError(null);
  };

  return (
    <Box data-testid="error-page">
      <ErrorContent message="Something went wrong :(">
        <Typography className={classes.message} data-testid="error-message">
          {error.message}
        </Typography>
        <Button
          onClick={onBackClick}
          size="large"
          variant="contained"
          color="secondary"
          disableRipple
          data-testid="back-button"
        >
          Back
        </Button>
      </ErrorContent>
    </Box>
  );
};

const mapStateToProps = ({ root: { isLoading, error } }) => ({
  isLoading,
  error,
});

const mapDispatchToProps = {
  refreshToken,
  cleanToken,
  setError,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorPage);
