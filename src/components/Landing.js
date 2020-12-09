import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import api from "../api/tvmaze";

import Movie from "./Movie";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "50px 0px",
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "ms",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: 1000,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  card: {
    margin: "50px 0px",
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Landing = () => {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const classes = useStyles();

  const setQuery = (e) => {
    setInputValue(e.target.value);
  };

  const getContent = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get(`/shows?q=${inputValue}`);
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Container maxWidth="md" className={classes.container}>
        <Paper component="form" className={classes.root} onSubmit={getContent}>
          <IconButton
            className={classes.iconButton}
            aria-label="menu"
          ></IconButton>
          <InputBase
            className={classes.input}
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
            onChange={setQuery}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        {movies.map((movie) => {
          return (
            <Movie
              data={movie}
              title={movie.show.name}
              image={movie.show.image}
            />
          );
        })}
      </Container>
    </div>
  );
};

export default Landing;
