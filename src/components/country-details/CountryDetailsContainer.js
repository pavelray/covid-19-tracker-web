import React, { Component } from 'react'
import api from '../../apis/country.api';
import covidApi from '../../apis/covid19.api';
import CountryDDL from '../UI/CountryDDL';
import Cards from '../UI/Cards';
import CountryDetailsTable from '../UI/CountryDetailsTable';
import {fetchAllCountries,fetchCountrySummary,fetchCountryDetails} from '../../redux/actions';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

export class CountryDetailsContainer extends Component {

    state = {
        selectedCountry: 'IND',
    }

    columns = [
        { title: 'Area', field: 'combinedKey' },
        { title: 'Confirmed', field: 'confirmed',type: 'numeric' },
        { title: 'Active', field: 'active', type: 'numeric' },
        { title: 'Death', field: 'deaths', type: 'numeric' },
        { title: 'Incident Rate', field: 'incidentRate'},
        { 
          title: 'Last Updated', field: 'lastUpdate' 
        }
    ]
        
    

    async componentDidMount(){
        this.props.fetchAllCountries();
        this.getCountrySummary(this.state.selectedCountry);
    }
    
    getCountrySummary = async (selectedCountry) => {

        this.props.fetchCountrySummary(selectedCountry);
        this.props.fetchCountryDetails(selectedCountry);
    }

    onChange = (e) =>{
        this.setState({selectedCountry:e});
        this.getCountrySummary(e);
    }

    renderCountrySummary = () =>{
        const {
            confirmed,
            recovered,
            deaths,
            recoverRatePercentage,
            deathRatePercentage
        } = this.props.summary;

        if(this.props.summary){
            return(
                <>
                <Grid container spacing={3} style={{padding: '20px'}}>
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
                <Grid container spacing={3} style={{padding: '20px'}}>
                    <Grid item xs>
                        <CountryDetailsTable columns={this.columns} data={this.props.details} />
                    </Grid>
                </Grid>
                </>
            )
        }else{
            return(
                <Grid container spacing={3} style={{padding: '20px'}}>
                    <Grid item xs>
                        <Paper style={{padding: '20px'}}>
                           <Typography variant="h6">
                               No data found for the selected country. 
                           </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            )
        }
        
    }

    render() {
        if(this.props.countries && this.props.countries.length > 0){
            return (
                <div style={{marginTop: '25px'}}>
                    <Divider variant="middle" />
                    <Container maxWidth = "sm" style={{padding: '20px'}} >
                        <Grid item xs={12}>
                            <Box style={{textAlign:'center'}}>
                                <Typography variant="h5" gutterBottom >
                                    Country Wise Details
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    Last updated on {this.props.summary.lastUpdated}.
                                </Typography>
                            </Box>
                        </Grid>
                        <CountryDDL values={this.props.countries} onChange={this.onChange} selectedCountry={this.state.selectedCountry}/>
                    </Container>
                    {
                        this.renderCountrySummary()
                    }
                    
                </div>
            )
        }
        return(<></>)
    }
}

const mapStateToProps = (state) =>{
    return {
        countries : state.countryDetails.countries,
        summary: state.countryDetails.summary,
        details: state.countryDetails.details
    }
  }
  
  const mapDispatchToProps = (dispatch) =>  bindActionCreators({
    fetchAllCountries,
    fetchCountrySummary,
    fetchCountryDetails
  },dispatch);
  

export default connect(mapStateToProps,mapDispatchToProps)(CountryDetailsContainer)
