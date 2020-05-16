import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

export default function SateSelectDDL(props) {
  return (
    <Select defaultValue="KA" style={{ width: '50%' }} onChange={props.handleChange} size="large">
      {
          props.states.map(state=>{
              return(
                <Option value={state.statecode} key={state.statecode}>{state.state}</Option>
              )
          })
      }
    </Select>
  )
}
