import React, { Component } from 'react';

import {fetchGlobalData} from '../../redux/actions';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import { Layout, Row, Col, Skeleton } from 'antd';
import GlobalStatsCard from './GlobalStatsCard';
import MostAffectedCountryCard from './MostAffectedCountryCard';

const { Content } = Layout;

export class GlobalStatsContainer extends Component {

    componentDidMount() {
        this.props.fetchGlobalData();
    }

    renderGlobalStats =()=>{
        if (this.props.global){
            const {global,recoverRatePercentage,deathRatePercentage,lastUpdated} = this.props;
            return(
                <GlobalStatsCard global={global} recoverRatePercentage={recoverRatePercentage} 
                        deathRatePercentage={deathRatePercentage} lastUpdated={lastUpdated} / >
            )
        }
        else{
            return(<Skeleton active />)
        }
    }

    renderMostAffectedCard =() =>{
        if(this.props.global){
             const {countries} = this.props;
             return(<MostAffectedCountryCard countries={countries} totalConfirmed={this.props.global.totalConfirmed} / >)
        }
        else{
            return(<Skeleton active />)
        }
    }

    render() {
        return (
        <Content>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" flex="2">
                    {this.renderGlobalStats()}
                </Col>
                <Col className="gutter-row" flex="5">
                    {this.renderMostAffectedCard()}
                </Col>
            </Row>
        </Content>
        )
    }
}

const mapStateToProps = (state) =>{
  return {
    global : {...state.global.global},
    recoverRatePercentage: state.global.recoverRatePercentage,
    deathRatePercentage: state.global.deathRatePercentage,
    lastUpdated: state.global.lastUpdated,
    countries: state.global.countries
  }
}

const mapDispatchToProps = (dispatch) =>  bindActionCreators({
  fetchGlobalData
},dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GlobalStatsContainer)
