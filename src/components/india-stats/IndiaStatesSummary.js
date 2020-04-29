import React, { Component } from 'react';
import {fetchIndiaStateSummary} from '../../redux/actions';
import {formatNumber} from '../../resources/helper';

import {connect} from 'react-redux';
import { Table, Tag , Row, Col, Card } from 'antd';


export class IndiaStatesSummary extends Component {
    
    columns = [
    {
        title: 'State',
        dataIndex: 'state',
        key: 'state',
        fixed: 'left',
        ellipsis: true,
        render: text => <label>{text}</label>,
    },
    {
        title: 'Confirmed',
        dataIndex: 'confirmed',
        key: 'confirmed',
        ellipsis: true,
        render:  value => (<Tag color='orange' key={value}>{formatNumber(value)}</Tag>),
    },
    {
        title: 'Active',
        dataIndex: 'active',
        key: 'active',
        ellipsis: true,
        render:  value => (<Tag color='volcano' key={value}>{formatNumber(value)}</Tag>),
    },
    {
        title: 'Recovered',
        key: 'recovered',
        dataIndex: 'recovered',
        ellipsis: true,
        render:  value => (<Tag color='green' key={value}>{formatNumber(value)}</Tag>),
    },
    {
        title: 'Deaths',
        key: 'deaths',
        dataIndex: 'deaths',
        ellipsis: true,
        render:  value => (<Tag color='red' key={value}>{formatNumber(value)}</Tag>),
    },
    
];
    
    componentDidMount(){
        this.props.fetchIndiaStateSummary();
    }

    render() {
        return (

            <Row>
                <Col flex="1">
                    
                    <Table columns={this.columns} dataSource={this.props.allStates} size="small"
                        expandable={{
                            expandedRowRender: record => (
                                <p style={{ margin: 0 }}>
                                    New Confirmed : {record.deltaconfirmed}, 
                                    <br/>
                                    New Recovered : {record.deltarecovered}
                                    <br/>
                                    New Deaths : {record.deltadeaths}
                                </p>
                            ),
                        }}
                        title={() => 'State Wise Stats'}/>
                    
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        allStates: state.indiaData.allStates.slice(1, state.indiaData.allStates.length)
    }
}

export default connect(mapStateToProps, {fetchIndiaStateSummary})(IndiaStatesSummary)
