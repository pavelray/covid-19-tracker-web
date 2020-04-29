import React, { Component } from 'react'
import MapChart from '../UI/MapChart';
import ReactTooltip from "react-tooltip";
import { Typography , Tag} from 'antd';

const { Title  } = Typography



function GlobalMap(props) {
    const [content, setContent] = React.useState("");
    console.log(content);
    if (props.countries.length > 0) {
        return (
        <div>
            <Title level={4}>World Map</Title>
            <MapChart countries={props.countries} totalConfirmed={props.totalConfirmed} setTooltipContent={setContent}/>
            <ReactTooltip backgroundColor="white">{content}</ReactTooltip>

            <Tag color="#ff8080">1 to 99</Tag>
            <Tag color="#ff4d4d">100 to 999</Tag>
            <Tag color="#ff1a1a">1000 to 9999</Tag>
            <Tag color="#e60000">10000 to 49999</Tag>
            <Tag color="#b30000">50000 to 99999</Tag>
            <Tag color="#800000">100000+</Tag>
            
        </div>
        )
    }
    else{
        return(<></>)
    }
}

export default GlobalMap
