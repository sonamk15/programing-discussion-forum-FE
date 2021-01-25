import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem

} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

import Logo from '../../pngegg.png';
import './styles.scss';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Appbar = () => {
    const classes = useStyles();

    const appbarStyle = {
        backgroundColor: '#28abe5'
    }
    const menuButton = {
        marginLeft: -12,
        marginRight: 20,
    }
    const style = {
        color: 'black'
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const isAuthenticated = localStorage.getItem("userDetails");

    return (
        <div className="forum-header" >
            <AppBar position="static" style={appbarStyle}>
                <Toolbar>
                    <IconButton edge="start" onClick={handleClick} className={classes.menuButton} color="inherit" aria-label="Menu" >
                        <MenuIcon />
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>About us</MenuItem>
                            <MenuItem onClick={handleClose}>Contact us</MenuItem>
                        </Menu>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <img src={Logo} alt='logo' />
                    </Typography>

                    {isAuthenticated ? <a href="/logout"><Button color="inherit">Logout</Button></a> 
                : <div>
                    <a href="/login"><Button color="inherit">Login</Button></a>
                    <a href="/signup"><Button color="inherit">Sign Up</Button></a>
                </div> }

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Appbar;