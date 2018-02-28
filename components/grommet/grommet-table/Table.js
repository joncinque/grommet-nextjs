import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { Box, TextInput } from 'grommet';
import { withTheme } from 'grommet/components/hocs';
import StyledTable from './StyledTable';
import PaginationComponent from './Pagination';
import TableComponent from './TableComponent';
import TheadComponent from './TheadComponent';
import TrComponent from './TrComponent';
import ThComponent from './ThComponent';
import TdComponent from './TdComponent';
import TfootComponent from './TfootComponent';
import TbodyComponent from './TbodyComponent';
import TrGroupComponent from './TrGroupComponent';

const NoDataComponent = ({ children, ...rest }) => (
  <Box {...rest} align='center' pad='small'>
    {children}
  </Box>
);

const FilterComponent = (props) => {
  const { filter, onChange, column } = props;
  return (
    <TextInput
      aria-label={`Filter data by ${typeof column.Header === 'string' ? column.Header : column.id}`}
      value={filter ? filter.value : ''}
      onChange={event => onChange(event.target.value)}
    />);
};

class GrommetTable extends Component {
  static contextTypes = {
    grommet: PropTypes.object,
  };

  // eslint-disable-next-line no-unused-vars
  static defaultFilter(filter, row, column) {
    const id = filter.pivotId || filter.id;
    if (row[id] !== undefined && filter.value !== undefined) {
      return String(row[id])
        .toUpperCase()
        .startsWith(filter.value.toUpperCase());
    }
    return true;
  }

  render() {
    const { theme, ...rest } = this.props;
    const { grommet } = this.context;
    const defaults = {
      defaultFilterMethod: GrommetTable.defaultFilter,
      showPagination: rest.data && rest.data.length > (rest.defaultPageSize || 20),
      minRows: rest.data && rest.data.length < (rest.defaultPageSize || 20) ? 0 : undefined,
      ThComponent,
      TdComponent,
      PaginationComponent,
      NoDataComponent,
      FilterComponent,
      TableComponent,
      TheadComponent,
      TbodyComponent,
      TrGroupComponent,
      TrComponent,
      TfootComponent,
    };
    const props = { ...defaults, ...rest };
    return (
      <StyledTable
        {...props}
        theme={theme}
        grommet={grommet}
      />
    );
  }
}

export default compose(withTheme)(GrommetTable);
