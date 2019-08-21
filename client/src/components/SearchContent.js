import React from "react";

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import SearchResults from "./SearchResults";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexFlow: "column nowrap",
    margin: `${theme.spacing(3)}px 0`,
  },
}));

const SearchContent = ({ results }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} data-testid="search-content">
      {(!results && (
        <Typography
          variant="subtitle2"
          color="primary"
          data-testid="search-message"
        >
          What are you waiting for? Click GO! :)
        </Typography>
      )) || <SearchResults results={results} />}
    </Box>
  );
};

export default SearchContent;
