import React from "react";
import {
  Grid,
  Typography,
  List,
  ListItemIcon,
  makeStyles,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
const useStyle = makeStyles((them) => ({
  background: {
    backgroundColor: "#222222",
    height: "200px",
    textAlign: "center",
    padding: "50px",
  },
  backgroundBorderIcon: {
    width: "60px",
    height: "60px",
    background: "#333",

    borderRadius: "50%",
    fontSize: "18px",
    margin: " 0 10px",
  },textfooter:{color:"white"}
}));
export const Footer = () => {
  const classes = useStyle();
  return (
    <Grid className={classes.background}>
      <Typography className={classes.textfooter}>
        Copyright © 2020 All rights reserved | This template is made with by
        Giang Minh Hoàng
      </Typography>
      <List>
        <ListItemIcon>
          <FacebookIcon className={classes.backgroundBorderIcon} />
        </ListItemIcon>
        <ListItemIcon>
          <InstagramIcon className={classes.backgroundBorderIcon} />
        </ListItemIcon>
        <ListItemIcon>
          <TwitterIcon className={classes.backgroundBorderIcon} />
        </ListItemIcon>
      </List>
    </Grid>
  );
};
