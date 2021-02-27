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
    }
    &_date-value {
      color: #058373;
    }
  }
  & .event-zone {
    overflow-y: auto;
    height: calc(100% - 220px);
    padding: 5px 0;
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
          All Shifts for
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
