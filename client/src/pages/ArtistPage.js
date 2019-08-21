import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { getArtist } from "../redux/actions";

import Loader from "../components/Loader";
import ArtistTopTracks from "../components/ArtistTopTracks";
import Albums from "../components/Albums";

import { ERROR_URL, SEARCH_URL } from "../routes";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey.main,
    flexGrow: 1,
  },
  header: {
    display: "flex",
    flexFlow: "column nowrap",
    minHeight: "405px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  title: {
    letterSpacing: "-.005em",
    fontWeight: 900,
    marginBottom: theme.spacing(2),
  },
  content: {
    padding: `0 ${theme.spacing(4)}px`,
  },
  section: {
    margin: `${theme.spacing(4)}px 0`,
  },
  button: {
    marginTop: theme.spacing(4),
    minWidth: "175px",
  },
}));

const ArtistPage = ({
  match: {
    params: { artistId },
  },
  error,
  artist,
  isLoading,
  getArtist,
}) => {
  const classes = useStyles();

  useEffect(() => {
    if (artistId) {
      getArtist(artistId);
    }
    // eslint-disable-next-line
	}, [artistId]);

  if (error) {
    return <Redirect to={ERROR_URL} />;
  }

  if (isLoading || !artist) {
    return <Loader />;
  }

  const { images, popularity, topTracks, albums } = artist;

  let headerStyles = {};
  if (images.length) {
    headerStyles = {
      backgroundImage: `url(${images[0].url})`,
    };
  }

  return (
    <Box className={classes.root} data-testid="artist-details">
      <Box className={classes.header} style={headerStyles}>
        <Typography className={classes.title} color="primary" variant="h2">
          {artist.name}
        </Typography>
        <Typography color="primary" variant="subtitle1">
          Popularity: {popularity}/100
        </Typography>
        <Link to={SEARCH_URL}>
          <Button
            className={classes.button}
            size="large"
            variant="contained"
            color="secondary"
            disableRipple
          >
            Back
          </Button>
        </Link>
      </Box>
      <Box className={classes.content}>
        <Box className={classes.section}>
          <Typography className={classes.title} color="primary" variant="h4">
            Top Tracks
          </Typography>
          <ArtistTopTracks tracks={topTracks} />
        </Box>
        <Box className={classes.section}>
          <Typography className={classes.title} color="primary" variant="h4">
            Albums
          </Typography>
          <Albums albums={albums} />
        </Box>
      </Box>
    </Box>
  );
};

const mapStateToProps = ({ root: { error, artist, isLoading } }) => ({
  error,
  artist,
  isLoading,
});

const mapDispatchToProps = {
  getArtist,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistPage);
