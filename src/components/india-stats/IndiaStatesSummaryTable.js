import React, { Component } from 'react';
import {formatNumber,percentageCalculator} from '../../resources/helper';

import { Table, Tag, Row, Col, Badge } from 'antd';

export class IndiaStatesSummaryTable extends Component {
    
    columns = [
    {
        title: 'State',
        dataIndex: 'state',
        key: 'state',
        fixed: 'left',
        ellipsis: true,
        responsive: ['md'],
        render: text => <label>{text}</label>,
    },
    {
        title: 'Confirmed',
        dataIndex: 'confirmed',
        key: 'confirmed',
        ellipsis: true,
        responsive: ['md'],
        render:  value => (<Tag color='orange' key={value}>{formatNumber(value)}</Tag>),
    },
    {
        title: 'Active',
        dataIndex: 'active',
        key: 'active',
        ellipsis: true,
        responsive: ['md'],
        render:  value => (<Tag color='volcano' key={value}>{formatNumber(value)}</Tag>),
    },
    {
        title: 'Recovered',
        key: 'recovered',
        dataIndex: 'recovered',
        ellipsis: true,
        responsive: ['md'],
        render:  value => (<Tag color='green' key={value}>{formatNumber(value)}</Tag>),
    },
    {
        title: 'Deaths',
        key: 'deaths',
        dataIndex: 'deaths',
        ellipsis: true,
        responsive: ['md'],
        render:  value => (<Tag color='red' key={value}>{formatNumber(value)}</Tag>),
    },
    
];

    renderDeltaInfo = (record) => {
        return (
            <div style={{padding:'10px'}}>
                <p>
                    Stats: &nbsp; &nbsp;
                    <Tag color="green">{percentageCalculator(record.recovered, record.confirmed)}% Recoverey Rate</Tag>
                    <Tag color="volcano">{percentageCalculator(record.deaths, record.confirmed)}% Fatality Rate</Tag>
                </p>
                <Badge color="orange" text="New Confrimed" />:&nbsp;{record.deltaconfirmed}
                <br/>
                <Badge color="green" text="New Recovered" />:&nbsp;{record.deltarecovered}
                <br/>
                <Badge color="red" text="New Deaths" />:&nbsp;{record.deltadeaths}
                <br/>
                <label>Last Updated:&nbsp;{record.lastupdatedtime}</label>
            </div>
        )
    }

    render() {
        return (

            <Row>
                <Col flex="1">
                    <Table columns={this.columns} dataSource={this.props.allStates} size="small"
                        expandable={{
                            expandedRowRender: record => (this.renderDeltaInfo(record))
                        }}
                        title={() => 'State Wise Stats'}/>
                </Col>
            </Row>
        )
    }
}

export default IndiaStatesSummaryTable
