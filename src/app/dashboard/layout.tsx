import React, { ReactNode } from 'react';
import Sidebar from '../../components/SideBar';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default DashboardLayout;
