import React from 'react';
import { 
    Typography,  
    Container 
} from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      position: 'absolute',
      bottom:0,
      width: '97.3%',
      backgroundColor: '#28abe5'
    },
    about : {
        position: 'absolute',
        top: '25px',
        right: '100px'  
    },

    contact : {
    position: 'absolute',
    top: '25px',
    right: '5px' 
} 

  }));

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align='center'>
        {'Copyright © '}
        <Link color="inherit" href="#">
        Technologies Pvt Ltd
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }



const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
    )
}

export default Footer;