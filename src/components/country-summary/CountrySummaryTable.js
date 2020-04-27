import React from 'react';
import Table from '../UI/Table'

export default function CountrySummaryTable(props) {
const options = {
  search: true
}

 return(
     <Table data={props.data} columns={props.columns} title={props.title} options={options} />
  );
}
