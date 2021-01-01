import React from 'react';
import { Link } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem

} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../../pngegg.png';
import './index.css';

const Appbar = () => {
    const appbarStyle = {
        backgroundColor: '#28abe5'
    }
    const menuButton = {
        marginLeft: -12,
        marginRight: 20,
    }
    const style  = {
        color:'black'
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" style={appbarStyle}>
            <Toolbar>
                <IconButton onClick={handleClick} style={menuButton} color="inherit" aria-label="Menu">
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
                <Typography variant="h6" style= {style}>
                   {/* <b> Programming Discussion Forum</b> */}
                   <img src={Logo} alt='logo' />
                </Typography>
                <div className='header'>
                    <a href="/login" id="login"><b> Login</b></a>
                    <a href="/signup" id="signup"><b>Sign Up</b></a>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Appbar;