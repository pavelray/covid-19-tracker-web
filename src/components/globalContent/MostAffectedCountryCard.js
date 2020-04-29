import React, { Component } from 'react';
import { Card, List, Tag ,Statistic, Row, Col, Typography, Space,Badge  } from 'antd';
import GlobalMap from './GlobalMap';

const { Title  } = Typography

export class MostAffectedCountryCard extends Component {


    renderMap = () =>{
        return(
            <GlobalMap countries={this.props.countries} totalConfirmed={this.props.totalConfirmed} / >
        )
    }

    render() {
        const {countries} = this.props;
        return (
            <Card>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" flex="auto">
                    <Title level={4}>Most Affected Countires</Title>
                        <List
                            bordered={false}
                            dataSource={countries.slice(0,10)}
                            renderItem={country => (
                                <List.Item extra={country.percentage} key={country.code.toLowerCase()}>
                                    <Typography.Text>{country.name}</Typography.Text> 
                                </List.Item>
                            )}
                        /> 
                    </Col>
                    <Col className="gutter-row" flex="auto" style={{minWidth:'200px'}}>
                        {this.renderMap()}
                    </Col>
                </Row>
                
            </Card>
        )
    }
}

export default MostAffectedCountryCard
