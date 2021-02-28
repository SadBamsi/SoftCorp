import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';

import { ActiveZone } from './components/ActiveZone/ActiveZone';
import { NavigationBar } from './components/Sidebar/NavigationBar';
import { Data } from './data/Data';
import { UserInfo } from './components/Sidebar/UserInfoArea';
import { Header } from './components/General/Header';

const { navData, userData, dateList, eventZone } = Data;
const isMobile = window.innerWidth > 480;
export const App = () => {
  const [sidebarState, setSidebarState] = useState(isMobile);
  const [date, setDate] = useState('January 2021');

  const hideSidebar = (state) => {
    setSidebarState(state);
  };
  const changeDate = (dateToActiveZone) => {
    setDate(dateToActiveZone);
  };
  return (
    <div className="root">
      <Header controlSidebar={hideSidebar} state={sidebarState} />
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
