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

const useStyle = makeStyles((them) => ({
  media: {
    width: "100%",
    height: "180px",
  },textF:{
      textAlign:"center"

  }
}));
const ItemSectionPortfolio = (props) => {
  const classes = useStyle();
  const { image ,text} = props;
 console.log(image)
  return (
    <Grid item xs={3} sm={4}>
      <Card textF>
        <CardMedia
          className={classes.media}
          image={image}
          title="Paella dish"
        />
        <CardContent>
          <Typography  variant="p" component="p" align="center" >
         {text}
            
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default ItemSectionPortfolio;
