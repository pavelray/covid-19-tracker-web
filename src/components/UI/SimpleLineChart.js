import React from 'react';

import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartLegend
} from '@progress/kendo-react-charts';

export const SimpleLineChart= (props) => {
    return (
        <Chart>
            <ChartTitle text={props.title} />
            <ChartLegend position="top" orientation="horizontal" />
            <ChartSeries>
                <ChartSeriesItem
                    name="Confirmed"
                    type="line" 
                    field="confirmed"
                    categoryField="date"
                    data={props.category}
                    markers={{ visible: false }}
                />
                <ChartSeriesItem
                    name="Recovered"
                    type="line"
                    field="deaths"
                    categoryField="date"
                    data={props.category}
                    markers={{ visible: false }}
                />
                <ChartSeriesItem
                    name="Deaths"
                    type="line"
                    field="recovered"
                    categoryField="date"
                    data={props.category}
                    markers={{ visible: false }}
                />
            </ChartSeries>
            <ChartCategoryAxis>
                <ChartCategoryAxisItem baseUnit="fit" />
            </ChartCategoryAxis>
        </Chart>
    );
}

export default SimpleLineChart