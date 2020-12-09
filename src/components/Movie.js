import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  card: {
    margin: "50px 0px",
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Movie = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const check = (movie) => {
    dispatch({ type: "show_movie", payload: movie });
  };
  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        alt={props.title}
        height="160"
        image={props.image === null ? " " : props.image.original}
        title={props.title}
        style={{ objectFit: "contain", width: "150px" }}
      />
      <CardActions
        style={{
          flex: 1,
          justifyContent: "space-around",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
        </CardContent>
        <Link to={"/detail"} style={{ textDecoration: "none" }}>
          <Button
            size="medium"
            variant="outlined"
            color="secondary"
            onClick={() => check(props.data)}
            style={{ alignSelf: "flex-end" }}
          >
            See more details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Movie;
