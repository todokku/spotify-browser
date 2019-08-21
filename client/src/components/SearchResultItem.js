import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import SearchResultImage from "./SearchResultImage";

const useStyles = makeStyles((theme) => ({
  item: {
    width: 200,
    margin: theme.spacing(1),
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      width: 150,
    },
    [theme.breakpoints.down("xs")]: {
      width: 100,
    },
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
    [theme.breakpoints.up("lg")]: {
      width: 300,
    },
  },
  info: {
    display: "flex",
    flexFlow: "column nowrap",
    textAlign: "center",
    justifyContent: "center",
  },
  subtitle1: {
    letterSpacing: "-.005em",
    fontWeight: 900,
  },
  subtitle2: {
    letterSpacing: ".015em",
  },
}));

const SearchResultItem = ({
  href,
  image,
  name,
  icon,
  title,
  subtitle,
  ...attrs
}) => {
  const classes = useStyles();

  return (
    <a
      href={href}
      className={classes.item}
      rel="noopener noreferrer"
      target="_blank"
      {...attrs}
    >
      <SearchResultImage image={image} name={name} icon={icon} />
      <Box className={classes.info}>
        <Typography
          className={classes.albumName}
          color="primary"
          variant="subtitle1"
          noWrap
          data-testid="search-result-item-title"
        >
          {title}
        </Typography>
        <Typography
          className={classes.artistName}
          color="primary"
          variant="subtitle2"
          noWrap
          data-testid="search-result-item-subtitle"
        >
          {subtitle}
        </Typography>
      </Box>
    </a>
  );
};

SearchResultItem.propTypes = {
  href: PropTypes.string.isRequired,
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

SearchResultItem.defaultProps = {
  image: null,
};

export default SearchResultItem;
