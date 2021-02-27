import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';

import { ActiveZone } from './components/ActiveZone/ActiveZone';
import './App.scss';
import { NavigationBar } from './components/Sidebar/NavigationBar';
import { Data } from './data/Data';
import { UserInfo } from './components/Sidebar/UserInfoArea';

const { navData, userData, dateList, eventZone } = Data;

export const App = () => {
  const [sidebarState, setSidebarState] = useState(true);
  const [date, setDate] = useState('January 2021');

  const hideSidebar = (state) => {
    setSidebarState(state);
  };
  const changeDate = (dateToActiveZone) => {
    setDate(dateToActiveZone);
  };
  return (
    <div className="root">
      <Sidebar showed={sidebarState}>
        <NavigationBar links={navData} />
        <UserInfo userData={userData} />
      </Sidebar>
      <ActiveZone
        controlSidebar={hideSidebar}
        state={sidebarState}
        date={date}
        changeDate={changeDate}
        dateList={dateList}
        eventZone={eventZone}
      />
    </div>
  );
};
