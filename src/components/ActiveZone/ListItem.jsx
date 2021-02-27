import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledListItem = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ cols }) => cols}, 1fr);
  padding: 20px;
  background: #ffffff;
  border: 1px solid rgba(12, 20, 39, 0.05);
  box-sizing: border-box;
  box-shadow: 0px 2px 2px rgba(12, 20, 39, 0.1);
  border-radius: 20px;
  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
  & .list-item_span {
    font-size: 14px;
    line-height: 17px;
    color: #0c1427;
  }
`;

export const ListItem = ({ itemData }) => {
  const data = Object.values(itemData);
  return (
    <StyledListItem cols={data.length}>
      {data.map((el) => (
        <span className="list-item_span">{el}</span>
      ))}
    </StyledListItem>
  );
};

ListItem.propTypes = {
  itemData: PropTypes.object.isRequired,
};
