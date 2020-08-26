import React from "react";
import {
  Grid,
  CardMedia,
  makeStyles,
  Box,
  Typography,
} from "@material-ui/core";
import imgbanner from "../images/post_3.jpg";
import Container from "@material-ui/core/Container";
const useStyle = makeStyles((theme) => ({
  media: { width: "100%", height: "400px" },
  backgorundbanner: {
    backgroundImage: `url(${imgbanner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "500px",
    color: "white",
  },
  spanText: {
    textAlign: "center",
    fontSize: "40px",
  },
  span: {
    fontWeight: "bold",
  },
}));
export const Banner = () => {
  const classes = useStyle();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.backgorundbanner}
    >
      <Typography className={classes.spanText}>
        <span>Hello, I'm</span>
        <h1 className={classes.span}>Charles Anderson</h1>
        <p>AND THIS IS MY REZUME</p>
      </Typography>
    </Grid>
  );
};
