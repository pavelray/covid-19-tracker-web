import React, { Component } from 'react'
import {formatNumber, sortByProperty} from '../../resources/helper';

import { Table, Tag, Tooltip } from 'antd';

export class StateDistrictTable extends Component {
     columns = [
        {
            title: 'District',
            dataIndex: 'district',
            key: 'district',
            fixed: 'left',
            ellipsis: true,
            responsive: ['md'],
            render: text => (<Tooltip title={text}>
                                <label>{text}</label>
                            </Tooltip>),
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
            key: 'deceased',
            dataIndex: 'deceased',
            ellipsis: true,
            responsive: ['md'],
            render:  value => (<Tag color='red' key={value}>{formatNumber(value)}</Tag>),
        },
        {
            title: 'Zones',
            key: 'zone',
            dataIndex: 'zone',
            ellipsis: true,
            responsive: ['md'],
            render:  value => (<Tag color={value} key={value}>&nbsp;&nbsp;&nbsp;</Tag>),
        },
    ];
    
    render() {
        const stateDetailsSortBy = this.props.stateDetails.sort(sortByProperty('confirmed'));
        return (
            <Table columns={this.columns} dataSource={stateDetailsSortBy} size="small"
            />
        )
    }
}

export default StateDistrictTable
