import React, { Component } from 'react'
import {fetchIndiaStateSummary} from '../../redux/actions';

import {connect} from 'react-redux';

import { Layout, Row, Col } from 'antd';
import IndiaStatesSummaryTable from './IndiaStatesSummaryTable';
import StatsSummaryCard from '../UI/StatsSummaryCard';
import IndiaStatsChart from './IndiaStatsChart';

const { Content } = Layout;

export class IndiaStatsContainer extends Component {
    
    componentDidMount(){
        this.props.fetchIndiaStateSummary();
    }

    renderStatsSummary = () =>{
        console.log(this.props.summary);

        const statsSummary = {
            totalConfirmed: this.props.summary.confirmed,
            totalRecovered: this.props.summary.recovered,
            totalDeaths: this.props.summary.deaths,
            newConfirmed: this.props.summary.deltaconfirmed,
            newRecovered: this.props.summary.deltarecovered,
            newDeaths: this.props.summary.deltadeaths,
            totalActive: this.props.summary.confirmed,
            recoverRatePercentage: `${Math.round((this.props.summary.recovered / this.props.summary.confirmed) * 100)} % Recoverey Rate`,
            deathRatePercentage: `${Math.round((this.props.summary.deaths / this.props.summary.confirmed) * 100)} % Fatality Rate`,
            lastUpdated: this.props.summary.lastupdatedtime,
        }
        return(
            <>
                <StatsSummaryCard {...statsSummary}  title='India Stats'/>
            </>
        )
    }

    renderStateSummaryTable = () =>{
        return(
            <IndiaStatesSummaryTable allStates={this.props.allStates}/>
        )
    }

    render() {
        return (
            <Content>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={24} flex="1">
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col flex="3" className="gutter-row">
                                {this.renderStatsSummary()}
                            </Col>
                            <Col flex="auto" className="gutter-row">
                               <IndiaStatsChart category={this.props.chatDataCategory} 
                                    confirmed={this.props.chartDataConfirmed}/>
                            </Col>
                        </Row>
                        
                    </Col>
                    <Col className="gutter-row" flex="auto">
                        {this.renderStateSummaryTable()}
                    </Col>
                </Row>
            </Content>
        )
    }
}

const mapStateToProps = (state) =>{

    return{
            allStates: state.indiaData.allStates.slice(1, state.indiaData.allStates.length),
            summary: {
                ...state.indiaData.allStates.slice(0,1)[0]
            },
            chatDataCategory: state.indiaData.casesTimeSeriesChartDataCategory,
            chartDataConfirmed: state.indiaData.casesTimeSeriesChartDataConfirmed
        }
}

export default connect(mapStateToProps,{fetchIndiaStateSummary})(IndiaStatsContainer)
