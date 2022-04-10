import React from "react";
import Navbar from "./Navbar";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import project1 from "../images/html-css-javascript-lg.jpg";
import android from "../images/android.jpg";

import mernStack from "../images/mern-stack.jpg";


const customStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 350,
    margin: "3rem",
    margin: "5rem auto",
  },
});

function renderProjects(item, classes) {
  return (
    <Grid item xs={12} sm={8} md={6}>
      <Card className={classes.cardContainer}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Project1"
            height="140"
            image={item.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {item.name}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {item.description}
            </Typography>
          </CardContent>
        </CardActionArea>

        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Live Demo
          </Button>
        </CardActions> */}
      </Card>
    </Grid>
  );
}

const portfolio = () => {
  const classes = customStyles();
  const projectArray = [
    {
      image: android,
      name: "PrabhuPAY",
      description: "PrabhuPAY is a mobile wallet. PrabhuPAY allows easy payment of various utility bills, ticket bookings, online store, hospital OPD tickets. PrabhuPAY allows users to vote for their favourite contestant in various event like Comedy Circus, Voice Of Nepal.",
    },
    {
      image: mernStack,
      name: "Agro E-Commerce",
      description: "Agro E-commerce is a platform for merchant to sell their products and customers can buy products online.",
    },
    {
      image: android,
      name: "PayTime",
      description: "PayTime is a mobile wallet. PayTime allows easy payment of various utility bills, ticket booking.",
    },
    {
      image: android,
      name: "Thaili",
      description: "Thaili is a mobile wallet. Thaili allows easy payment of various utility bills. Thaili has NFC payment which allows user to tap and pay.",
    },
    {
      image: android,
      name: "YOApp",
      description: "YOApp is a mobile wallet. YOApp allows easy payment of various utility bills, ticket bookings, merchant payment.",
    },
    {
      image: mernStack,
      name: "Nilkantha",
      description: "Nilkantha is a municipality app that allows locals to view news, notifies new events happening in municipality.",
    },
  ];
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {projectArray.map((lsItem, key) => renderProjects(lsItem, classes))}
      </Grid>
    </Box>
  );
};

export default portfolio;
