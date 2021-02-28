import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { LogInOutButton } from '../General/LogInOutButton';

const isLogined = true;
const text = isLogined ? 'Sign Out' : 'Log In';

const StyledUserInfo = styled.figure`
  padding-left: 10px;
  display: flex;
  align-items: center;
  & .user-avatar {
    margin-right: 15px;
  }
  .button {
    display: none;
  }
  @media screen and (max-width: 480px) {
    order: 0;
    margin-bottom: 35px;
    .button {
      display: block;
      max-width: 100px;
      white-space: nowrap;
    }
  }
`;

export const UserInfo = ({ userData }) => {
  return (
    <StyledUserInfo>
      <img className="user-avatar" src="./img/Avatar.png" alt="user avatar" />
      <figcaption className="user-name">{userData}</figcaption>
      <div className="button">
        <LogInOutButton text={text} />
      </div>
    </StyledUserInfo>
  );
};

UserInfo.propTypes = {
  userData: PropTypes.array.isRequired,
};
