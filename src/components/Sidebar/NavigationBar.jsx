import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SidebarButton } from './SidebarButton';

const StyledNavigationBar = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const NavigationBar = ({ links }) => {
  const [activeButton, setActiveButton] = useState(links[0]);
  const onClick = (activeTab) => {
    setActiveButton(activeTab);
  };
  return (
    <StyledNavigationBar>
      {links.map((link, idx) => (
        <SidebarButton
          isActive={activeButton}
          onClick={onClick}
          link={link}
          key={idx.toString()}
        />
      ))}
    </StyledNavigationBar>
  );
};

NavigationBar.propTypes = {
  links: PropTypes.array.isRequired,
};
