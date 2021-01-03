import React from 'react';
import {
  Typography,
  Container
} from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import './styles.scss';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    backgroundColor: '#28abe5'
  },
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
    <div className="forum-footer">
      <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Copyright />
      </Container>
    </footer>
    </div>
  )
}

export default Footer;