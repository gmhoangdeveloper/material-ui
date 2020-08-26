import React, { Fragment } from "react";
import {
  Grid,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import product1 from "../images/p1.jpg";
import product2 from "../images/p2.jpg";
import product3 from "../images/p3.jpg";
import product4 from "../images/p4.jpg";
import product5 from "../images/p5.jpg";
import product6 from "../images/p6.jpg";
import ItemSectionPortfolio from "./itemSectionPortfolio";
import { withTheme } from "@material-ui/styles";

const useStyle = makeStyles((them) => ({
  media: {
    width: "100%",
    height: "100px",
  },
  automargin: {
    margin: "0 auto",
  },
  backgroud: {
    backgroundColor: "#222222",
  },
  styleText:{
      color:"white"
  }
}));
export const SectionPortfolio = () => {
  const classes = useStyle();
  return (
    <Fragment>
      <Grid className={classes.backgroud}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography variant="h2" align="center" className={classes.styleText} >
              Featured <Typography  variant="p">Portfolio</Typography>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <List>
              <ListItem>
                <ListItemText>All</ListItemText>
                <ListItemText>Packaging</ListItemText>
                <ListItemText>Mockup</ListItemText>
                <ListItemText>Typography</ListItemText>
                <ListItemText>Photography</ListItemText>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid
          container
          xs={9}
          spacing={3}
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.automargin}
        >
          <ItemSectionPortfolio image={product1} text={"Packaging Brand"}/>
          <ItemSectionPortfolio image={product3} text={"Isometric 3D Extrusion"}/>
          <ItemSectionPortfolio image={product2} text={"White Space Photography"}/>
          <ItemSectionPortfolio image={product4} text={"Square Box Mockup"}/>
          <ItemSectionPortfolio image={product5} text={"Product Box Package Mockup"}/>
          <ItemSectionPortfolio image={product6} text={"Creative Package Design"}/>
        </Grid>
      </Grid>
    </Fragment>
  );
};
