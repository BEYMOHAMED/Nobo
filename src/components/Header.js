import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    alignSelf: "center",
    fontSize: 30,
    padding: 10,
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Typography variant="h6" className={classes.title}>
          <Link to={"/"} className={classes.link}>
            TV MAZE
          </Link>
        </Typography>
      </AppBar>
    </div>
  );
};

export default Header;
