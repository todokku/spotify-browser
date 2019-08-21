import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ErrorIcon from "@material-ui/icons/Error";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    backgroundColor: theme.palette.grey.main,
    padding: theme.spacing(4),
    margin: `${theme.spacing(3)}px 0`,
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  icon: {
    color: theme.palette.common.white,
    width: 50,
    height: 50,
    marginRight: theme.spacing(1),
  },
  message: {
    color: theme.palette.common.white,
  },
}));

const ErrorContent = ({ message, children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} data-testid="error-content">
      <Box className={classes.header}>
        <ErrorIcon data-testid="error-icon" className={classes.icon} />
        <Typography
          className={classes.message}
          data-testid="error-title"
          variant="h3"
        >
          Ops!
        </Typography>
      </Box>
      <Typography
        className={classes.message}
        variant="subtitle1"
        data-testid="error-content-message"
      >
        {message}
      </Typography>
      {children}
    </Box>
  );
};

ErrorContent.propTypes = {
  message: PropTypes.string.isRequired,
  children: PropTypes.any,
};

ErrorContent.defaultProps = {
  children: null,
};

export default ErrorContent;
