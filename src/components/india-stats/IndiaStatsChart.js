import React, { Component } from 'react';
import SimpleLineChart from '../UI/SimpleLineChart';
import { Card } from 'antd';
import { LineChartOutlined } from '@ant-design/icons';

export class IndiaStatsChart extends Component {

    renderTitle = ()=>{
        return(
            <h3 style={{textAlign: 'center'}}>
                Day Wise Stats <LineChartOutlined />
            </h3>
        )
        
    }
    render() {
        return (
            <Card>
                {this.renderTitle()}
                <SimpleLineChart category={this.props.category} />
            </Card>
        )
    }
}

export default IndiaStatsChart
