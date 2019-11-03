import React, { useState } from "react";

import useFigmaComments from "../hooks/useFigmaComments";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
  },
  button: {
    marginTop: theme.spacing(3),
    minWidth: "120px",
  },
}));

const useInputStyles = makeStyles((theme) => ({
  root: {
    border: "none",
    overflow: "hidden",
    borderRadius: 0,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey.main,
    "&:hover": {
      backgroundColor: theme.palette.grey.main,
    },
    "&$focused": {
      backgroundColor: theme.palette.grey.main,
    },
  },
  input: {
    padding: `0 ${theme.spacing(4)}px`,
    fontSize: theme.typography.h5.fontSize,
    letterSpacing: "-.005em",
    fontWeight: 900,
    caretColor: theme.palette.secondary.main,
    boxSizing: "border-box",
    color: theme.palette.primary.main,
    "&::placeholder": {
      color: theme.palette.primary.main,
    },
    "&::selection": {
      background: theme.palette.secondary.main,
    },
  },
  focused: {},
}));

const SearchInput = ({ queryTerm, search }) => {
  const classes = useStyles();
  const inputClasses = useInputStyles();

  const [value, setValue] = useState(queryTerm);

  const handleSubmit = (event) => {
    event.preventDefault();
    search(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  let figmaComments = useFigmaComments();
  if (figmaComments) {
    /// Buscar una forma de mapear comentarios con componentes mas reusable
    figmaComments = figmaComments
      .map((comment) => JSON.parse(comment.message))
      .filter((comment) => comment.id === "search");
  }

  return (
    <form
      className={classes.root}
      onSubmit={handleSubmit}
      data-testid="search-input-form"
    >
      <TextField
        id="search"
        placeholder={
          figmaComments && figmaComments[0].placeholder
            ? figmaComments[0].placeholder
            : "Start typing here..."
        }
        onChange={handleChange}
        value={value}
        margin="none"
        InputProps={{ classes: inputClasses, disableUnderline: true }}
        fullWidth
        // eslint-disable-next-line react/jsx-no-duplicate-props
        inputProps={{
          "data-testid": "search-input",
        }}
        autoFocus
        required
      />
      <Button
        className={classes.button}
        size="large"
        variant="contained"
        color="secondary"
        type="submit"
        disableRipple
        data-testid="search-submit-button"
      >
        Go
      </Button>
    </form>
  );
};

export default SearchInput;
