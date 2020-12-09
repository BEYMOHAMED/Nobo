import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    margin: "10% 0",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: 1000,
  },
  media: {
    height: 500,
  },
  text: {
    marginTop: "20px",
  },
});

const Detail = () => {
  const movie = useSelector((state) => state.movieReducer);
  const classes = useStyles();
  console.log(movie);

  if (movie.show === undefined) {
    return <Redirect from="/detail" to="/" />;
  }

  let {
    name,
    image,
    language,
    premiered,
    rating,
    status,
    summary,
    type,
    network,
    genres,
    externals,
    officialSite,
  } = movie.show;

  return (
    <Container maxWidth="md" className={classes.container}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={movie.show.image === null ? " " : image.original}
          title={name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h3"
            component="h2"
            className={classes.text}
          >
            {name}
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            component="p"
            className={classes.text}
          >
            Summary:
            <br />
            {summary.replace(/<(.|\n)*?>/g, "")}
          </Typography>
          <Typography
            color="textPrimary"
            component="h2"
            className={classes.text}
          >
            Language: {language}
          </Typography>
          <Typography
            color="textPrimary"
            component="h2"
            className={classes.text}
          >
            Premiere date: {premiered}
          </Typography>
          <Typography
            color="textPrimary"
            component="h2"
            className={classes.text}
          >
            {genres.length > 0 ? (
              <>
                <p>Genre:</p>
                <ul>
                  {genres.map((genre) => {
                    return <li>{genre}</li>;
                  })}
                </ul>
              </>
            ) : (
              ""
            )}
          </Typography>
          <Typography
            color="textPrimary"
            component="h2"
            className={classes.text}
          >
            {rating.average ? <p>Rating: {rating.average}</p> : ""}
          </Typography>
          <Typography
            color="textPrimary"
            component="h2"
            className={classes.text}
          >
            Status: {status}
          </Typography>
          <Typography
            color="textPrimary"
            component="h2"
            className={classes.text}
          >
            Type: {type}
          </Typography>
          <Typography
            color="textPrimary"
            component="h2"
            className={classes.text}
          >
            {externals ? (
              <>
                <p>Externals:</p>
                <ul>
                  {externals.imbd ? <li>Imbd: {externals.imbd}</li> : ""}
                  {externals.thetvdb ? (
                    <li>The TV DB: {externals.thetvdb}</li>
                  ) : (
                    ""
                  )}
                  {externals.tvrage ? <li>TV Rage: {externals.tvrage}</li> : ""}
                </ul>
              </>
            ) : (
              ""
            )}
          </Typography>
          <Typography
            color="textPrimary"
            component="h2"
            className={classes.text}
          >
            {network ? (
              <>
                <p>Network:</p>
                <ul>
                  {network.country.name ? (
                    <li>Country: {network.country.name}</li>
                  ) : (
                    ""
                  )}
                  {network.name ? <li>Name: {network.name}</li> : ""}
                </ul>
              </>
            ) : (
              ""
            )}
          </Typography>
          <Typography
            color="textPrimary"
            component="h2"
            className={classes.text}
          >
            {officialSite ? <a href={officialSite}>Official website</a> : ""}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Detail;
