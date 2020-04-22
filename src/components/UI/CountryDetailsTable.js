import React from 'react';
import MaterialTable from 'material-table';

export default function CountryDetailsTable(props) {
  return (
    <MaterialTable
      title="Area wise details"
      columns={props.columns}
      data={props.data}
    />
  );
}
