import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      position: "absolute",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase",
  },
}));

function renderItems(item, classes) {
  return (
    <>
      <Typography
        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        variant="h2"
      >
        {item.date}
      </Typography>
      <Box component="div" className={classes.timeLineItem}>
        <Typography variant="h5" align="center" className={classes.subHeading}>
          {item.topic}
        </Typography>
        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
          {item.workPlace}
        </Typography>
        <Typography variant="subtitle1" align="center" style={{ color: "tan" }}>
          {item.description}
        </Typography>
      </Box>
    </>
  );
}

const Resume = () => {
  const classes = useStyles();
  const workArray = [
    {
      date: "2018",
      topic: "FrontEnd Developer",
      workPlace: "Freelancer",
      description: "React JS, Vue JS, HTML, CSS",
    },
    {
      date: "2019",
      topic: "Mobile App Developer",
      workPlace: "Prabhu Technology",
      description: "React native",
    },
    {
      date: "2019",
      topic: "Android Developer",
      workPlace: "Prabhu Technology",
      description: "Java, Kotlin",
    },
    {
      date: "2020",
      topic: "FullStack Developer",
      workPlace: "Freelancer",
      description: " Nestjs, Nodejs, Reactjs, Nextjs, Kotlin, PostgreSQL, Prisma ORM",
    },
    {
      date: "2021",
      topic: "Android Developer",
      workPlace: "Digihub",
      description: "Kotlin, Java"
    }
  ];
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Working experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          {workArray.map((lsItem, key) => renderItems(lsItem, classes))}
        </Box>
      </Box>
    </>
  );
};

export default Resume;
