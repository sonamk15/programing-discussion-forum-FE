import React from 'react';
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
            </Toolbar>
        </AppBar>
    )
}

export default Appbar;