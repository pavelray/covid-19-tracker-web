import React from 'react';
import CountUp from 'react-countup';
import { FundTwoTone } from '@ant-design/icons';

import { Card, Statistic, Row, Col, Typography, Space,Badge, Tag  } from 'antd';

const { Title  } = Typography

export const StatsSummaryCard = (props) =>{
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

    const confirmed = totalConfirmed ? parseInt(totalConfirmed) : 0;
    const active = totalActive ? parseInt(totalActive):0;
    const recovered = totalRecovered ? parseInt(totalRecovered) : 0;
    const deaths = totalDeaths ? parseInt(totalDeaths) : 0;


    return (
        <Card>
            <Space direction="vertical">
            <Title level={4}>{props.title} &nbsp; <FundTwoTone /></Title>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" flex="2">
                    <Statistic
                    title="Confirmed"
                    formatter={()=><CountUp end={confirmed} separator =","/>}
                    valueStyle={{ color: 'orange' }}
                    />
                </Col>
                {totalActive && <Col className="gutter-row" flex="2">
                    <Statistic
                    title="Active"
                    formatter={()=><CountUp end={active} separator =","/>}
                    valueStyle={{ color: 'volcano' }}
                    />
                </Col>}
                <Col className="gutter-row" flex="2">
                    <Statistic
                    title="Recovered"
                    formatter={()=><CountUp end={recovered} separator =","/>}
                    valueStyle={{ color: 'green' }}
                    />
                </Col>
                <Col className="gutter-row" flex="2">
                    <Statistic
                    title="Deaths"
                    formatter={()=><CountUp end={deaths} separator =","/>}
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
                           <Badge color="orange" text="Confirmed" />: <CountUp end={newConfirmed?parseInt(newConfirmed):0} separator =","/>
                        </Col>
                        <Col flex="auto">
                            <Badge color="green" text="Recovered" />: <CountUp end={newRecovered?parseInt(newRecovered):0} separator =","/>
                        </Col>
                        <Col flex="auto">
                            <Badge color="red" text="Deaths" />: <CountUp end={newDeaths?parseInt(newDeaths):0} separator =","/>
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
