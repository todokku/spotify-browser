import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: `${theme.spacing(3)}px 0`,
    alignSelf: "center",
    textAlign: "center",
  },
  title: {
    letterSpacing: "-.005em",
    fontWeight: 900,
    marginTop: 0,
  },
  subtitle: {
    letterSpacing: ".015em",
  },
}));

const Welcome = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root} data-testid="welcome">
      <Typography
        className={classes.title}
        variant="h5"
        color="primary"
        gutterBottom
        data-testid="welcome-title"
      >
        Looking for music?
      </Typography>
      <Typography
        className={classes.subtitle}
        color="primary"
        data-testid="welcome-subtitle"
      >
        Find your favorite tracks and artists.
      </Typography>
    </Box>
  );
};

export default Welcome;
