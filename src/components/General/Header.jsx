import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ResizeButton } from './ResizeSidebarButton';

const StyledResizeButton = styled(ResizeButton)`
  z-index: 10;
  background: unset;
  .burger {
    height: 2px;
    width: 100%;
    background-color: #fff;
    border-radius: 1px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    visibility: hidden;
    &:after,
    &:before {
      content: '';
      position: absolute;
      display: block;
      height: 2px;
      width: 100%;
      background-color: #fff;
      border-radius: 1px;
      transition: all 0.2s ease-in-out;
    }
    &:before {
      visibility: visible;
      top: 0;
      transform: rotate(45deg);
    }
    &:after {
      visibility: visible;
      top: 0;
      transform: rotate(-45deg);
    }
  }
  &.hided {
    transform: unset;
    .burger {
      visibility: visible;
      &:before {
        transform: rotate(0);
        top: -5px;
      }
      &:after {
        transform: rotate(0);
        top: 5px;
      }
    }
  }
  &:hover {
    opacity: 1;
  }
`;

const StyledHeader = styled.header`
  display: none;
  background-color: #000;
  padding: 20px 15px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 70px;

  @media screen and (max-width: 480px) {
    display: block;
  }
`;

export const Header = ({ controlSidebar, state }) => {
  return (
    <StyledHeader>
      <StyledResizeButton
        as={ResizeButton}
        controlSidebar={controlSidebar}
        state={state}
      >
        <span className="burger" />
      </StyledResizeButton>
    </StyledHeader>
  );
};

Header.propTypes = {
  controlSidebar: PropTypes.func.isRequired,
  state: PropTypes.bool.isRequired,
};
