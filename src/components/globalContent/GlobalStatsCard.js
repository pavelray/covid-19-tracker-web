import React, { Component } from 'react';
import StatsSummaryCard from '../UI/StatsSummaryCard';

export class GlobalStatsCard extends Component {

    renderGlobalStatsCard=()=>{
        
        const statsSummary = {
            ...this.props.global,
            ...this.props
        }

        return(
            <StatsSummaryCard {...statsSummary}  title='Global Stats' /> 
        )
    }

    render() {
        return (
            <>
                {this.renderGlobalStatsCard()}
            </>
        )
    }
}


export default GlobalStatsCard
