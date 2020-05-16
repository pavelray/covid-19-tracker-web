import React from 'react'
import MapChart from '../UI/MapChart';
import ReactTooltip from "react-tooltip";
import { Typography , Tag, Skeleton} from 'antd';

const { Title  } = Typography



function GlobalMap(props) {
    const [content, setContent] = React.useState("");
    
    if (props.countries.length > 0) {
        return (
        <div>
            <Title level={4} style={{textAlign:'center'}}>World Map </Title>
            <MapChart countries={props.countries} totalConfirmed={props.totalConfirmed} setTooltipContent={setContent}/>
            <ReactTooltip backgroundColor="white">{content}</ReactTooltip>

            <Tag color="#ff8080">1 to 99</Tag>
            <Tag color="#ff4d4d">100 to 999</Tag>
            <Tag color="#ff1a1a">1,000 to 9,999</Tag>
            <Tag color="#e60000">10,000 to 49,999</Tag>
            <Tag color="#b30000">50,000 to 99,999</Tag>
            <Tag color="#800000">100,000+</Tag>
            
        </div>
        )
    }
    else{
        return(<Skeleton active />)
    }
}

export default GlobalMap
