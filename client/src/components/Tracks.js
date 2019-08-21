import React from "react";
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { ReactComponent as AlbumIcon } from "../assets/album.svg";
import SearchResultItem from "./SearchResultItem";
import SearchResultsEmpty from "./SearchResultsEmpty";

const Tracks = ({ classes, items }) => {
  return (
    <Box className={classes.root} data-testid="tracks">
      <Typography
        className={classes.title}
        color="primary"
        variant="h4"
        data-testid="tracks-title"
      >
        Tracks
      </Typography>
      {(!!items.length && (
        <Box className={classes.items}>
          {items.map(({ id, name, album }) => (
            <SearchResultItem
              data-testid="track"
              key={id}
              href={album.external_urls.spotify}
              name={album.name}
              image={album.images[1]}
              icon={<AlbumIcon />}
              title={name}
              subtitle={album.artists[0].name}
            />
          ))}
        </Box>
      )) || <SearchResultsEmpty entity="tracks" />}
    </Box>
  );
};

Tracks.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    title: PropTypes.string,
    items: PropTypes.string,
  }),
  items: PropTypes.array,
};

Tracks.defaultProps = {
  classes: {
    root: "",
    title: "",
    items: "",
  },
  items: [],
};

export default Tracks;
