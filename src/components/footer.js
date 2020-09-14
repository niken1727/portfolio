import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import LinkedIn from "@material-ui/icons/LinkedIn";

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

const footer = () => {
  const classes = customStyle();
  const socialMedia = [
    {
      icon: <Facebook />,
    },
    {
      icon: <Instagram />,
    },
    {
      icon: <LinkedIn />,
    },
  ];
  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      {socialMedia.map((lsItem, key) => renderIcons(lsItem, classes))}
    </BottomNavigation>
  );
};

export default footer;
