import React from 'react';
import PropTypes from 'prop-types';
import { TableRow as TableRowGrommet } from '../../utils/TableRow';


export const Row = ({
  children, row, tableRow, tableColumn, ...restProps
}) => (
  <TableRowGrommet
    tableContext='row-band-header'
    {...restProps}
  >
    {children}
  </TableRowGrommet>
);

Row.propTypes = {
  children: PropTypes.node,
  row: PropTypes.any,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
};

Row.defaultProps = {
  children: undefined,
  row: undefined,
  tableRow: undefined,
  tableColumn: undefined,
};

