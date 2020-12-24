import React from 'react';
import {
    AppBar,
    Button,
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Grid

} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Appbar = () => {
    const appbarStyle = {
        backgroundColor: '#28abe5'
    }
    const signup = {
        float: 'right',
        position: 'absolute',
        top: '15px',
        right: '0px'
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
                <IconButton style={menuButton} color="inherit" aria-label="Menu">
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <MenuIcon />
                    </Button>
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
                   <b> Programming Discussion Forum</b>
                </Typography>
            </Toolbar>
        </AppBar>

    )
}

export default Appbar;