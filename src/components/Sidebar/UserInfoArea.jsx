import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledUserInfo = styled.figure`
  padding-left: 10px;
  display: flex;
  align-items: center;
  & .user-avatar {
    margin-right: 15px;
  }
`;

export const UserInfo = ({ userData }) => {
  return (
    <StyledUserInfo>
      <img className="user-avatar" src="./img/Avatar.png" alt="user avatar" />
      <figcaption className="user-name">{userData}</figcaption>
    </StyledUserInfo>
  );
};

UserInfo.propTypes = {
  userData: PropTypes.array.isRequired,
};
