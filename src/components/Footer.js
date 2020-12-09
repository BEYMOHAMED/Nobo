import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#3F51B5",
    padding: theme.spacing(6, 0),
    color: "#fff",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" component="p">
            A simple Footer
          </Typography>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
