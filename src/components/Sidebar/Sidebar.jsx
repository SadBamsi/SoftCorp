import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSidebar = styled('aside')`
  position: absolute;
  height: 100vh;
  left: 0;
  max-width: 245px;
  padding: 45px 25px;
  background-color: #e8eaf0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;
  transition: transform 0.3s ease-in-out;
  &.hidden {
    transform: translateX(-100%);
  }
  @media screen and (max-width: 480px) {
    min-width: 320px;
    top: 70px;
    background-color: #fff;
    justify-content: flex-start;
  }
`;

export const Sidebar = ({ showed, children }) => {
  const className = showed ? '' : 'hidden';
  return <StyledSidebar className={className}>{children}</StyledSidebar>;
};

Sidebar.propTypes = {
  showed: PropTypes.bool.isRequired,
  children: PropTypes.array.isRequired,
};
