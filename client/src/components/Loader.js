import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(() => ({
  loader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Loader = () => {
  const classes = useStyles();

  return (
    <Box className={classes.loader} data-testid="loader">
      <CircularProgress color="secondary" />
    </Box>
  );
};

export default Loader;
