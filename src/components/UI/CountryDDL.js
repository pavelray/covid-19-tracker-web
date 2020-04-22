import React from 'react'
import { Dropdown } from 'semantic-ui-react'

export default function CountryDDL(props) {
   
    const onChange = (event, result) => {
        props.onChange(result.value);
    };


    return (
        <Dropdown
            placeholder='Select Country'
            fluid
            search
            selection
            options={props.values}
            value={props.selectedCountry}
            onChange={onChange}
        />
    )
}
