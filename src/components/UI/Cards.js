import React from 'react';
import CountUp from 'react-countup';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
});


export default function Cards({color,category,count,ratePercentage}) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    <CountUp end={count} separator =","/>
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    {category}
                </Typography>
            </CardContent>
            <CardContent className={color}>
                <Typography variant="subtitle2">
                    {ratePercentage}
                </Typography>
            </CardContent>
        </Card>
  )
}
