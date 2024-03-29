import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import MobileRightMenuSlider from '@material-ui/core/Drawer';
import {AppBar, Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, List, Typography, Box, ListItemIcon} from '@material-ui/core';
import {ArrowBack, Menu, AssignmentInd, Home, Apps, ContactMail} from '@material-ui/icons';
import avatar from '../avatar.png';
import Footer from './footer'

//CSS STYLES
const useStyles = makeStyles(theme => ({
    menuSliderContainer:{
        width: 250,
        background: "#511",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "tan"
    }
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio",
        listPath: "/portfolio"
    },
    // {
    //     listIcon: <ContactMail/>,
    //     listText: "Contacts",
    //     listPath: "/contacts"
    // }
]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })
    const classes = useStyles()

    const toggleSlider = ((slider, open) => () => {
        setState({...state, [slider]: open});
    });

    const sideList = Slider => (
        <Box className={classes.menuSliderContainer} onClick={toggleSlider(Slider, false)} component="div">
            <Avatar className={classes.avatar} src={avatar} alt="Niken Maharjan"/>
            <Divider />
            <List>
                {menuItems.map((lsItem, key)=> (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText} />
                    </ListItem>
                ))}
            </List>
        </Box>
    )
    return (
        <>
        <Box component="nav">
            <AppBar position="static" style={{background: "#222"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)}>
                        <Menu style={{color: "tomato"}} />
                    </IconButton>
                    <Typography variant="h5" style={{color: "tan"}}>
                        Portfolio
                    </Typography>
                    <MobileRightMenuSlider 
                    anchor="right"
                    onClose={toggleSlider("right", false)}
                    open={state.right}>
                        {sideList("right")}
                        <Footer />
                    </MobileRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar
