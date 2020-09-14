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

        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Live Demo
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

const portfolio = () => {
  const classes = customStyles();
  const projectArray = [
    {
      image: project1,
      name: "Project 1",
      description: "This is my first project",
    },
    {
      image: project1,
      name: "Project 2",
      description: "This is my second project",
    },
    {
      image: project1,
      name: "Project 3",
      description: "This is my third project",
    },
    {
      image: project1,
      name: "Project 4",
      description: "This is my fourth project",
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
