import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { LogInOutButton } from '../General/LogInOutButton';
import { ResizeButton } from '../General/ResizeSidebarButton';
import { CustomSelect } from '../General/CustomSelect';
import { TableHead } from './TableHead';
import { ListItem } from './ListItem';

const isLogined = true;
const text = isLogined ? 'Sign Out' : 'Log In';

const StyledActiveArea = styled.main`
  padding: 45px 40px 0 60px;
  width: calc(100% - 245px);
  height: 100vh;
  & header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    @media screen and (max-width: 480px) {
      display: none;
    }
  }
  & .date-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    &_title {
      font-size: 40px;
      line-height: 48px;
      font-weight: 700;
      color: #0c1427;
      br {
        display: none;
      }
    }
    &_date-value {
      color: #058373;
    }
    @media screen and (max-width: 480px) {
      flex-direction: column;
      &_title {
        font-size: 24px;
        line-height: 29px;
        margin-bottom: 15px;
        br {
          display: block;
        }
      }
    }
  }
  & .event-zone {
    overflow-y: auto;
    height: calc(100% - 220px);
    padding: 5px 0;
    @media screen and (max-width: 480px) {
      height: calc(100% - 170px);
      padding: 5px;
    }
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    margin-top: 70px;
    height: calc(100vh - 70px);
    padding: 16px 15px;
  }
`;

export const ActiveZone = ({
  controlSidebar,
  state,
  date,
  dateList,
  eventZone,
}) => {
  const [activeZoneDate, setActiveZoneDate] = useState(date);
  const changeActiveZoneDate = (value) => {
    setActiveZoneDate(value);
  };
  return (
    <StyledActiveArea>
      <header>
        <ResizeButton controlSidebar={controlSidebar} state={state} />
        <LogInOutButton text={text} />
      </header>
      <div className="date-info">
        <h2 className="date-info_title">
          All Shifts
          <br />
          for
          <span className="date-info_date-value"> {activeZoneDate}</span>
        </h2>
        <CustomSelect
          dateList={dateList}
          date={activeZoneDate}
          changeActiveZoneDate={changeActiveZoneDate}
        />
      </div>
      <TableHead tableData={eventZone} />
      <div className="event-zone">
        {eventZone.map((el, index) => (
          <ListItem key={index.toString()} itemData={el} />
        ))}
      </div>
    </StyledActiveArea>
  );
};

ActiveZone.propTypes = {
  controlSidebar: PropTypes.func.isRequired,
  state: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
  dateList: PropTypes.array.isRequired,
  eventZone: PropTypes.array.isRequired,
};
