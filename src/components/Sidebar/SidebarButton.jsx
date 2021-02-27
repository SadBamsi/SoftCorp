import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSidebarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 15px;
  padding-left: 50px;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  border: 1px solid transparent;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  background: url(${({ link }) => `./img/${link.replace(' ', '%20')}.svg`}) 15px
    center no-repeat;
  &:focus {
    outline: none;
  }
  &:active {
    background-color: #fff;
  }
  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
  &.active {
    background-color: #fff;
  }
`;

export const SidebarButton = ({ link, isActive, onClick }) => {
  const className = isActive === link ? 'active' : '';
  const hadleOnClick = () => onClick(link);
  return (
    <StyledSidebarButton
      className={className}
      onClick={hadleOnClick}
      link={link}
    >
      {link}
    </StyledSidebarButton>
  );
};

SidebarButton.defaultProps = {
  isActive: '',
};

SidebarButton.propTypes = {
  link: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.string,
};
