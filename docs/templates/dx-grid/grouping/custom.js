/*
import React from 'react';
import {
  GroupingState,
  CustomGrouping,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableGroupRow,
} from 'dx-react-grid-grommet';

import {
  generateRows,
  defaultColumnValues,
} from '../../../data/dx-grid-data/generator';
*/

const getChildGroups = groups => groups
  .map(group => ({ key: group.key, childRows: group.items }));

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'name', title: 'Name' },
        { name: 'sex', title: 'Sex' },
        { name: 'city', title: 'City' },
        { name: 'car', title: 'Car' },
      ],
      grouping: [{ columnName: 'sex' }],
      data: [{
        key: 'Male',
        items: generateRows({
          columnValues: { ...defaultColumnValues, sex: ['Male'] },
          length: 5,
        }),
      }, {
        key: 'Female',
        items: generateRows({
          columnValues: { ...defaultColumnValues, sex: ['Female'] },
          length: 5,
        }),
      }],
    };
  }

  render() {
    const { data, columns, grouping } = this.state;

    return (
      <Grid
        rows={data}
        columns={columns}
      >
        <GroupingState
          grouping={grouping}
        />
        <CustomGrouping
          getChildGroups={getChildGroups}
        />
        <Table />
        <TableHeaderRow />
        <TableGroupRow />
      </Grid>
    );
  }
}

render(<Demo />);
