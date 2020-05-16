import React, { Component } from 'react'
import SateSelectDDL from '../UI/SateSelectDDL';
import {connect} from 'react-redux';
import {fetchIndiaStateDetails} from '../../redux/actions/index';

import StateDistrictTable from './StateDistrictTable';

import { Skeleton, Row, Col, Card } from 'antd';

export class StateDetails extends Component {
  
    componentDidMount(){
        this.props.fetchIndiaStateDetails('KA');
    }

    onStateChange = (stateCode)=>{
        this.props.fetchIndiaStateDetails(stateCode);
    }

    render() {
        if (this.props.allStates && this.props.stateDetails) {
            return (
                <Card>
                    <h3 style={{textAlign: 'center'}}>
                        District Wise Stats
                    </h3>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col span={24} style={{textAlign:'center'}}>
                            <SateSelectDDL states={this.props.allStates} handleChange={this.onStateChange}/>
                        </Col>
                        <Col span={24} style={{marginTop: '20px'}}>
                            <StateDistrictTable stateDetails={this.props.stateDetails}/>
                        </Col>
                    </Row>
                </Card>
            )
        }
        else{
            return(<Skeleton active />)
        }
        
    }
}

const mapStateToProps = (state)=>{
    console.log(state);
    return {
        stateDetails: state.indiaData.stateDetailsWithZones
    };
}

export default connect(mapStateToProps,{fetchIndiaStateDetails})(StateDetails)
