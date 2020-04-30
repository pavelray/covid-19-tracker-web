import React, { Component } from 'react';
import SimpleLineChart from '../UI/SimpleLineChart';
import { Card } from 'antd';

export class IndiaStatsChart extends Component {

    render() {
        console.log(this.props);
        return (
            <Card>
                <SimpleLineChart category={this.props.category} confirmed={this.props.confirmed} title="Day Wise Stats" />
            </Card>
        )
    }
}

export default IndiaStatsChart
