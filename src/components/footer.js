import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import LinkedIn from "@material-ui/icons/LinkedIn";
import { Link } from "react-router-dom";

const customStyle = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root":{
        fill: "tan",
        "&:hover": {
            fill: "tomato",
            fontSize: "1.8rem"
        }
    }
  },
});

function renderIcons(item, classes) {
  return (
    <BottomNavigationAction
      className={classes.root}
      style={{ padding: 0 }}
      icon={item.icon}
    />
  );
}

const handleChange = (value) => {
  window.open( 'https://www.linkedin.com/in/niken-maharjan-6943b1191/')
};

const footer = () => {
  const classes = customStyle();
  const socialMedia = [
    {
      icon: <Facebook />,
      id: 0
    },
    {
      icon: <Instagram />,
      id: 1
    },
    {
      icon: <LinkedIn />,
      id: 2
    },
  ];
  return (
    <BottomNavigation onChange={handleChange} width="auto" style={{ background: "#222" }}>
      {socialMedia.map((lsItem, key) => renderIcons(lsItem, classes))}
    </BottomNavigation>
  );
};

export default footer;
