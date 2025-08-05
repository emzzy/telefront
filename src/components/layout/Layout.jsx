import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar';
import DashboardNavbar from '../DashboardNavbar';


const Layout = () => {
  return (
    <div className="app-layout">
      <DashboardNavbar />
      <div className="main-content">
        <SideBar />
        <div className="content-area">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Layout;