import React, { Component } from 'react';
import {fetchGlobalData} from '../../redux/actions';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';



import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Cards from '../UI/Cards';

export class GlobalSummary extends Component {
  
  componentDidMount(){
    this.props.fetchGlobalData()
  }

  renderGlobalContent = () =>{
    const {
      confirmed,
      recovered,
      deaths,
      recoverRatePercentage,
      deathRatePercentage
    } = this.props.global;

    return(
      <div>
        <Grid container spacing={3} style={{padding: '20px'}}>
            <Grid item xs={12}>
              <Box style={{textAlign:'center'}}>
                <Typography variant="h5" gutterBottom >
                  Global Status
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Last updated on {this.props.global.lastUpdated}.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs>
              <Paper>
                <Cards color="orange-card-footer" category="Confirmed" count={confirmed?confirmed:0} ratePercentage = {""}/>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper>
                <Cards color="olive-card-footer" category="Recovered" count={recovered?recovered:0} ratePercentage = {recoverRatePercentage}/>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper>
                <Cards color="red-card-footer" category="Deaths" count={deaths?deaths:0} ratePercentage = {deathRatePercentage}/>
              </Paper>
            </Grid>
        </Grid>
      </div>
    )
  }


  render() {
    return(
      <>
        {
          this.renderGlobalContent()
        }
      </>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    global : {...state.global}
  }
}

const mapDispatchToProps = (dispatch) =>  bindActionCreators({
  fetchGlobalData
},dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GlobalSummary)
