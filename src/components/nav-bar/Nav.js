import React from 'react';
import logo from '../../images/covid-virus-logo.png'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Baloo Paaji 2, cursive',
  },
}));

export default function Nav(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        
        <Toolbar>
          <img src={logo} alt='Logo' width="50" height="50"/>
          <Typography variant="h6" className={classes.title} style={{marginLeft: '15px'}}>
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
