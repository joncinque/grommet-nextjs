/*
import React from 'react';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableFixedColumns,
} from 'dx-react-grid-grommet';

import {
  generateRows,
  globalSalesValues,
} from '../../../data/dx-grid-data/generator';
*/

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'region', title: 'Region' },
        { name: 'sector', title: 'Sector' },
        { name: 'channel', title: 'Channel' },
        { name: 'customer', title: 'Customer' },
        { name: 'product', title: 'Product' },
        { name: 'saleDate', title: 'Sale date' },
        { name: 'units', title: 'Units' },
        { name: 'amount', title: 'Sale Amount' },
      ],
      rows: generateRows({ columnValues: globalSalesValues, length: 8 }),
      tableColumnExtensions: [
        { columnName: 'region', width: 150 },
        { columnName: 'sector', width: 180 },
        { columnName: 'channel', width: 120 },
        { columnName: 'product', width: 230 },
        { columnName: 'customer', width: 230 },
        { columnName: 'saleDate', width: 130 },
        { columnName: 'units', width: 80 },
        { columnName: 'amount', align: 'right', width: 140 },
      ],
      leftColumns: ['region', 'channel'],
      rightColumns: ['amount'],
    };
  }

  render() {
    const {
      rows, columns, tableColumnExtensions,
      leftColumns, rightColumns,
    } = this.state;

    return (
      <Grid
        rows={rows}
        columns={columns}
      >
        <Table
          columnExtensions={tableColumnExtensions}
        />
        <TableHeaderRow />
        <TableFixedColumns
          leftColumns={leftColumns}
          rightColumns={rightColumns}
        />
      </Grid>
    );
  }
}

render(<Demo />);
