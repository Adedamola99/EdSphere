import React, { ReactNode } from 'react';

interface ProfileDashboardLayoutProps {
  children: ReactNode;
}

const ProfileDashboardLayout: React.FC<ProfileDashboardLayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default ProfileDashboardLayout;
