import React, { Component } from 'react';
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
    console.log(response.data);
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
      <div className="ui segment basic global-summary">
        <h2 class="ui center aligned header">
          Global Status
          <div class="sub header">Last updated on {this.state.lastUpdated}.</div>
        </h2>
        <div className="ui three cards">
                <Cards color="orange" category="Confirmed" count={globalConfirmed} ratePercentage = {""}/>
                <Cards color="olive" category="Recovered" count={globalRecovered} ratePercentage = {recoverRatePercentage}/>
                <Cards color="red" category="Deaths" count={globaldeaths} ratePercentage = {deathRatePercentage}/>
        </div>
      </div>
    )
  }
}

export default GlobalSummary
