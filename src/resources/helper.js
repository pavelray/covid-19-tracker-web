import React from 'react';
import { Row, Col, Badge  } from 'antd';


export function sortByProperty(property) {
    return function (a, b) {
        if (a[property] > b[property])
            return -1;
        else if (a[property] < b[property])
            return 1;

        return 0;
    }
}

export function LightenDarkenColor(col, amt) {
    col = parseInt(col, 16);
    return `#${(((col & 0x0000FF) + amt) | ((((col >> 8) & 0x00FF) + amt) << 8) | (((col >> 16) + amt) << 16)).toString(16)}`;
}


export const generateFillColor = (confirmed) => {
    let colorScale = '#b30000';

    if (confirmed <= 99) {
        colorScale = '#ff8080';
    } 
    else if (100 <= confirmed && confirmed <= 999) {
        colorScale = '#ff4d4d';
    } 
    else if (1000 <= confirmed && confirmed <= 9999) {
        colorScale = '#ff1a1a'
        
    } 
    else if (10000 <= confirmed && confirmed <= 49999) {
        colorScale = '#e60000'
    }
    else if (50000 <= confirmed && confirmed <= 99999) {
        colorScale = '#e60000'
    }
    else {
        colorScale = '#800000'
    }

    return colorScale;
}

export const renderToolTipContent = (name,confirmed,recovered,deaths) =>{
    return(
        <Row>
            <Col flex="auto" style={{maxWidth:'150px'}}>
                <Row>
                    <Col span={24} style={{color:'black'}}>
                        {name}
                    </Col>
                    <Col span={24} style={{color:'black'}}>
                        <Badge color="orange" text="Confirmed" />: {formatNumber(confirmed)}
                    </Col>
                    <Col span={24} style={{color:'black'}}>
                        <Badge color="green" text="Recovered" />: {formatNumber(recovered)}
                    </Col>
                    <Col span={24} style={{color:'black'}}>
                        <Badge color="red" text="Deaths" />: {formatNumber(deaths)}
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

// TEST
