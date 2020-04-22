import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import api from '../../apis/covid19.api';
import Cards from '../UI/Cards';

export class GlobalSummary extends Component {

  state = {
    globalConfirmed : 0,
    globalRecovered: 0,
    globaldeaths : 0,
    lastUpdated : '',
  }

  async componentDidMount(){
    const response = await api.get('/');
    //console.log(response.data);
    const globalConfirmed = response.data.confirmed.value;
    const globalRecovered = response.data.recovered.value;
    const globaldeaths = response.data.deaths.value;
    const lastUpdated = `${new Date(response.data.lastUpdate).toLocaleDateString()} ${new Date(response.data.lastUpdate).toLocaleTimeString()}`;
    const recoverRatePercentage = `${Math.round((globalRecovered / globalConfirmed) * 100)} % Recoverey Rate`;
    const deathRatePercentage = `${Math.round((globaldeaths / globalConfirmed) * 100)} % Fatality Rate`;


    this.setState({
      globalConfirmed,
      globalRecovered,
      globaldeaths,
      lastUpdated,
      recoverRatePercentage,
      deathRatePercentage
    })
  }

  render() {
    const {
      globalConfirmed,
      globalRecovered,
      globaldeaths,
      recoverRatePercentage,
      deathRatePercentage
    } = this.state;


    return (
      <div>
        <Grid container spacing={3} style={{padding: '20px'}}>
            <Grid item xs={12}>
              <Box style={{textAlign:'center'}}>
                <Typography variant="h5" gutterBottom >
                  Global Status
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Last updated on {this.state.lastUpdated}.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs>
              <Paper>
                <Cards color="orange-card-footer" category="Confirmed" count={globalConfirmed} ratePercentage = {""}/>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper>
                <Cards color="olive-card-footer" category="Recovered" count={globalRecovered} ratePercentage = {recoverRatePercentage}/>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper>
                <Cards color="red-card-footer" category="Deaths" count={globaldeaths} ratePercentage = {deathRatePercentage}/>
              </Paper>
            </Grid>
        </Grid>
      </div>
    )
  }
}

export default GlobalSummary
