import React, { useEffect } from 'react';
import NavbarDesigner from '../../Components/NavbarDesigner';

function DashboardDesigner() {
  useEffect(() => {
    document.title = "سامانه پروژه سوال پیچ | داشبورد | طراح"
  }, []);

  return (
    <div>
      <NavbarDesigner />

      <div className="container pt-4">
        داشبورد طراح
      </div>
    </div>
  );
}

export default DashboardDesigner;
