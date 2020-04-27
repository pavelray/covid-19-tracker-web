import React, { Component } from 'react';
import GlobalSummary from './GlobalSummary';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Cards from '../UI/Cards';
import CountrySummary from '../country-summary/CountrySummary';

export class GlobalSummaryContainer extends Component {
    
    renderPageLayout = () =>{
        return(
            <>
                <Grid container spacing={3} style={{padding: '20px'}}>
                    <Grid item xs>
                    <Paper style={{marginTop:'12px'}}>
                        <GlobalSummary/>
                    </Paper>
                    </Grid>
                    <Grid item xs>
                    <Paper>
                        <CountrySummary/>
                    </Paper>
                    </Grid>
                </Grid>
            </>
        )
    }
    
    
    
    
    render() {
        return (
        <>
            {
                this.renderPageLayout()
            }
        </>
        )
    }
}

export default GlobalSummaryContainer
