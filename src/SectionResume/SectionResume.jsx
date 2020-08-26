import React, { Fragment } from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
const useStyle = makeStyles((them) => ({
  backgourd: {
    padding: "40px 0 0 40px",
    backgroundColor: "#222222",
  },
  textF: {
    textAlign: "center",
    color: "white",
    paddingBottom: "40px",
  },
  textF2: {
    fontSize: "35px",
    color: "white",
  },
  automargin: {
    margin: " 0 auto",
  },
  boxBorder: {
    margin: "10px",
    padding: "30px",
    background: "#333",
    borderRadius: "7px",

    height: "200px",
    border: "4px solid transparent",
  },
  ResumeText: {
    color: "#bac964",
  },
}));
export const SectionResume = () => {
  const classes = useStyle();
  return (
    <Fragment>
      <Grid className={classes.backgourd}>
        <Typography className={classes.textF} variant="h2">
          My Resume
        </Typography>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid itme sm={5}>
            <Typography className={classes.textF2}>Education</Typography>
          </Grid>
          <Grid itme sm={5}>
            <Typography className={classes.textF2}>Experience</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          xs={9}
          sm={11}
          
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid itme sm={5} className={classes.boxBorder}>
            <Typography color="primary">
              <AddShoppingCartIcon /> 26/8/2020 - Present Deacember.
            </Typography>
            <Typography className={classes.ResumeText}>
              Masteral in Information Technology
            </Typography>
            <Typography>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </Typography>
          </Grid>
          <Grid itme sm={5} className={classes.boxBorder}>
            <Typography color="primary">
              <AddShoppingCartIcon /> 26/8/2020 - Present Deacember.
            </Typography>
            <Typography className={classes.ResumeText}>
              Masteral in Information Technology
            </Typography>
            <Typography>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </Typography>
          </Grid>{" "}
          <Grid itme sm={5} className={classes.boxBorder}>
            <Typography color="primary">
              <AddShoppingCartIcon /> 26/8/2020 - Present Deacember.
            </Typography>
            <Typography className={classes.ResumeText}>
              Masteral in Information Technology
            </Typography>
            <Typography>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </Typography>
          </Grid>{" "}
          <Grid itme sm={5} className={classes.boxBorder}>
            <Typography color="primary">
              <AddShoppingCartIcon /> 26/8/2020 - Present Deacember.
            </Typography>
            <Typography className={classes.ResumeText}>
              Masteral in Information Technology
            </Typography>
            <Typography>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </Typography>
          </Grid>{" "}
          <Grid itme sm={5} className={classes.boxBorder}>
            <Typography color="primary">
              <AddShoppingCartIcon /> 26/8/2020 - Present Deacember.
            </Typography>
            <Typography className={classes.ResumeText}>
              Masteral in Information Technology
            </Typography>
            <Typography>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </Typography>
          </Grid>{" "}
          <Grid itme sm={5} className={classes.boxBorder}>
            <Typography color="primary">
              <AddShoppingCartIcon /> 26/8/2020 - Present Deacember.
            </Typography>
            <Typography className={classes.ResumeText}>
              Masteral in Information Technology
            </Typography>
            <Typography>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};
