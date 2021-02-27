import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledResizeButton = styled.button`
  outline: none;
  border: none;
  width: 24px;
  height: 24px;
  background: transparent url('./img/Arrow.svg') center center no-repeat;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.6;
  }
  &.hided {
    transform: rotate(180deg);
  }
`;

export const ResizeButton = ({ controlSidebar, state }) => {
  let buttonSate = state;
  const className = state ? 'showed' : 'hided';
  const hideSidebar = () => {
    buttonSate = !buttonSate;
    controlSidebar(buttonSate);
  };
  return <StyledResizeButton className={className} onClick={hideSidebar} />;
};

ResizeButton.propTypes = {
  controlSidebar: PropTypes.func.isRequired,
  state: PropTypes.bool.isRequired,
};
