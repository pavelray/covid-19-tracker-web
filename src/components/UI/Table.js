import React from 'react';
import MaterialTable from 'material-table';

export default function Table(props) {
  return (
    <MaterialTable
      title={props.title}
      columns={props.columns}
      data={props.data}
      options={props.options}
    />
  );
}
