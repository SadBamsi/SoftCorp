import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-family: 'Inter';
  outline: none;
  border: none;
  border-radius: 6px;
  padding: 9px 18px;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  color: #058373;
  cursor: pointer;
  background-color: rgba(5, 131, 115, 0.1);
  transition: background-color, 0.2s ease-in-out;
  &::focus,
  &:active {
    outline: none;
  }
  &:hover {
    background-color: rgba(5, 131, 115, 0.2);
  }
`;

export const LogInOutButton = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

LogInOutButton.propTypes = {
  text: PropTypes.string.isRequired,
};
