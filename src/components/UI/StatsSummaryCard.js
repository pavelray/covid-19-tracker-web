import React from 'react';
import CountUp from 'react-countup';

import { Card, Statistic, Row, Col, Typography, Space,Badge, Tag  } from 'antd';

const { Title  } = Typography

export const StatsSummaryCard = (props) =>{
    console.log(props);
    const {
        totalConfirmed,
        totalRecovered,
        totalDeaths,
        newConfirmed,
        newRecovered,
        newDeaths,
        totalActive,
        recoverRatePercentage,
        deathRatePercentage,
        lastUpdated
    } = props;

    return (
        <Card>
            <Space direction="vertical">
            <Title level={4}>{props.title}</Title>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" flex="2">
                    <Statistic
                    title="Confirmed"
                    formatter={()=><CountUp end={totalConfirmed?totalConfirmed:0} separator =","/>}
                    valueStyle={{ color: 'orange' }}
                    />
                </Col>
                {totalActive && <Col className="gutter-row" flex="2">
                    <Statistic
                    title="Recovered"
                    formatter={()=><CountUp end={totalActive?totalActive:0} separator =","/>}
                    valueStyle={{ color: 'volcano' }}
                    />
                </Col>}
                <Col className="gutter-row" flex="2">
                    <Statistic
                    title="Recovered"
                    formatter={()=><CountUp end={totalRecovered?totalRecovered:0} separator =","/>}
                    valueStyle={{ color: 'green' }}
                    />
                </Col>
                <Col className="gutter-row" flex="2">
                    <Statistic
                    title="Deaths"
                    formatter={()=><CountUp end={totalDeaths?totalDeaths:0} separator =","/>}
                    valueStyle={{ color: 'red' }}
                    />
                </Col>
            </Row>
            <Row>
                <Col flex="auto">
                    <Row>
                        <Col span={24}>
                            <h4>Today</h4>
                        </Col>
                        <Col flex="auto">
                           <Badge color="orange" text="Confirmed" />: <CountUp end={newConfirmed?newConfirmed:0} separator =","/>
                        </Col>
                        <Col flex="auto">
                            <Badge color="green" text="Recovered" />: <CountUp end={newRecovered?newRecovered:0} separator =","/>
                        </Col>
                        <Col flex="auto">
                            <Badge color="red" text="Deaths" />: <CountUp end={newDeaths?newDeaths:0} separator =","/>
                        </Col>
                        <Col span={24}>
                            <br/>
                            <Tag color="green">{recoverRatePercentage}</Tag>
                            <Tag color="volcano">{deathRatePercentage}</Tag>
                        </Col>
                        <Col span={24}>
                            <br/>
                           <Tag color="default">Last Updated On : {lastUpdated}</Tag>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </Space>
        </Card>
    )
}

export default StatsSummaryCard;
