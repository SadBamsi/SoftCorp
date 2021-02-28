import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledResizeButton = styled.button`
  outline: none;
  border: none;
  width: 24px;
  height: 24px;
  background: transparent url('./img/Arrow.svg') center center no-repeat;
  border-radius: 6px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.6;
  }
  &.hided {
    transform: rotate(180deg);
  }
  &:focus {
    outline: none;
  }
`;

export const ResizeButton = ({
  controlSidebar,
  state,
  className = undefined,
  children,
}) => {
  let buttonSate = state;
  const test = state ? `${className} showed` : `${className} hided`;

  const hideSidebar = () => {
    buttonSate = !buttonSate;
    controlSidebar(buttonSate);
  };
  return (
    <StyledResizeButton className={test} onClick={hideSidebar}>
      {children}
    </StyledResizeButton>
  );
};

ResizeButton.defaultProps = {
  children: PropTypes.elemet,
  className: '',
};

ResizeButton.propTypes = {
  controlSidebar: PropTypes.func.isRequired,
  state: PropTypes.bool.isRequired,
  className: PropTypes.string,
  children: PropTypes.element,
};
