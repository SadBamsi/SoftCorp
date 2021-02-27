import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ListItem } from './ListItem';

const StyledTableHead = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ cols }) => cols}, 1fr);
  padding: 20px;
  & .table-head {
    &_item {
      color: #8697a8;
      text-transform: uppercase;
      font-size: 10px;
      line-height: 12px;
      font-weight: 500;
    }
  }
`;

export const TableHead = ({ tableData }) => {
  const cols = Object.keys(tableData[0]);
  return (
    <StyledTableHead cols={cols.length}>
      {cols.map((el, index) => (
        <span className="table-head_item" key={index.toString()}>
          {el}
        </span>
      ))}
    </StyledTableHead>
  );
};

TableHead.propTypes = {
  tableData: PropTypes.array.isRequired,
};
