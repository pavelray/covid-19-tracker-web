import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CopyrightIcon from '@material-ui/icons/Copyright';
import blue from '@material-ui/core/colors/blue';

const useStyles = makeStyles((theme) => ({
  root: {
     top: 'auto',
    bottom: 0,
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Baloo Paaji 2, cursive',
  },
}));

export default function Footer() {
  const classes = useStyles();
  const color = blue[500];
  return (
   
      <AppBar position="static" className={classes.root} style={{backgroundColor: color , color: 'black'}}>
        <Container maxWidth = "sm" style={{padding: '20px'}} >
            <Grid item xs={12}>
                <Box style={{textAlign:'center'}}>
                    <Typography variant="subtitle1" gutterBottom >
                        Developed By <a href="https://github.com/pavelray" style={{color: 'white'}}>#Ray</a> with <sub><FavoriteIcon /></sub> from India
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                       API Used - <a href="https://github.com/mathdroid/covid-19-api" style={{color: 'white'}}>https://github.com/mathdroid/covid-19-api</a>
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      <CopyrightIcon/><sup>{new Date().getFullYear()}</sup> 
                    </Typography>
                    
                </Box>
            </Grid>
        </Container>
      </AppBar>
  )
}
