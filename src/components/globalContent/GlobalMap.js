import React, { Component } from 'react'
import MapChart from '../UI/MapChart';
import { Typography} from 'antd';

const { Title  } = Typography
export class GlobalMap extends Component {

  render() {
    console.log(this.props.countries, 'Glaobal');

    if (this.props.countries.length > 0) {
        return (
        <div>
            <Title level={4}>World Map</Title>
            <MapChart countries={this.props.countries} totalConfirmed={this.props.totalConfirmed}/>
        </div>
        )
    }
    else{
        return(<></>)
    }
    
  }
}

export default GlobalMap
