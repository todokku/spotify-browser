import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: theme.spacing(3),
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

const SearchResultsEmpty = ({ entity }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} data-testid="search-results-empty">
      <Typography
        className={classes.title}
        variant="h5"
        color="primary"
        gutterBottom
        data-testid="search-results-empty-query"
      >
        {`No ${entity} results found`}
      </Typography>
      <Typography
        className={classes.subtitle}
        color="primary"
        data-testid="search-results-empty-message"
      >
        Please make sure your words are spelled correctly or use less or
        different keywords.
      </Typography>
    </Box>
  );
};

SearchResultsEmpty.propTypes = {
  entity: PropTypes.string,
};

SearchResultsEmpty.defaultProps = {
  entity: "",
};

export default SearchResultsEmpty;
