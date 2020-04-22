import React, { Component } from 'react'
import api from '../../apis/country.api';
import covidApi from '../../apis/covid19.api';
import CountryDDL from '../UI/CountryDDL';
import Cards from '../UI/Cards';
import CountryDetailsTable from '../UI/CountryDetailsTable';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

export class CountryDetailsContainer extends Component {

    state = {
        countries: [],
        countryStautusSummary: {
            confirmed: 0,
            recovered: 0,
            deaths: 0,
            lastUpdated: '',
            
        },
        countryDetails : [],
        selectedCountry: 'ind',
        noDataFound: false
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
        const response = await api.get('/');
        const data = response.data;
        const countries =  data.map((country)=>{
            return {
                text: country.name,
                key: country.alpha2Code.toLowerCase(),
                value: country.alpha3Code.toLowerCase(),
                image: {
                    src: country.flag,
                    size:'mini'
                }
            }
        });

        this.getCountrySummary(this.state.selectedCountry);
        this.setState({countries})
        
    }
    
    getCountrySummary = async (selectedCountry) => {
        covidApi.get(`/countries/${selectedCountry}`)
        .then(response => {
            const confirmed = response.data.confirmed.value;
            const recovered = response.data.recovered.value;
            const deaths = response.data.deaths.value;
            const lastUpdated = `${new Date(response.data.lastUpdate).toLocaleDateString()} ${new Date(response.data.lastUpdate).toLocaleTimeString()}`;
            const recoverRatePercentage = `${Math.round((recovered / confirmed) * 100)} % Recoverey Rate`;
            const deathRatePercentage = `${Math.round((deaths / confirmed) * 100)} % Fatality Rate`;
            //console.log(response, lastUpdated);
            
            this.setState({
                countryStautusSummary: {
                    confirmed,
                    recovered,
                    deaths,
                    recoverRatePercentage,
                    deathRatePercentage
                },
                lastUpdated,
                noDataFound: false
            });

            covidApi.get(`/countries/${selectedCountry}/confirmed`).then(res=>{
                
                const filtertedData = res.data.map((item)=>{
                        return {
                            combinedKey: item.combinedKey,
                            confirmed: item.confirmed,
                            active: item.active,
                            deaths: item.deaths,
                            incidentRate: item.incidentRate ? item.incidentRate.toFixed(2) : 0,
                            lastUpdate: new Date(item.lastUpdate).toLocaleDateString()

                        }
                });
                //console.log(filtertedData);

                this.setState({
                    countryDetails: filtertedData
                });
            });

        }).catch((e)=>{
                this.setState({
                noDataFound: true
            });             
        });
    }

    onChange = (e) =>{
        //console.log(e)
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
        } = this.state.countryStautusSummary;

        if(!this.state.noDataFound){
            return(
                <Grid container spacing={3} style={{padding: '20px'}}>
                    <Grid item xs>
                        <Paper>
                            <Cards color="orange-card-footer" category="Confirmed" count={confirmed} ratePercentage = {""}/>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper>
                            <Cards color="olive-card-footer" category="Recovered" count={recovered} ratePercentage = {recoverRatePercentage}/>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper>
                            <Cards color="red-card-footer" category="Deaths" count={deaths} ratePercentage = {deathRatePercentage}/>
                        </Paper>
                    </Grid>
                </Grid>
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
        

        if(this.state.countries.length > 0){
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
                                    Last updated on {this.state.lastUpdated}.
                                </Typography>
                            </Box>
                        </Grid>
                        <CountryDDL values={this.state.countries} onChange={this.onChange} selectedCountry={this.state.selectedCountry}/>
                    </Container>
                    {
                        this.renderCountrySummary()
                    }
                    <Grid container spacing={3} style={{padding: '20px'}}>
                        <Grid item xs>
                            <CountryDetailsTable columns={this.columns} data={this.state.countryDetails} />
                        </Grid>
                    </Grid>
                </div>
            )
        }
        return(<></>)
    }
}

export default CountryDetailsContainer
