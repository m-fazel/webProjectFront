import React, { useEffect } from 'react';
import NavbarPlayer from '../../Components/NavbarPlayer';

function DashboardPlayer() {

  useEffect(() => {
    document.title = "سامانه پروژه سوال پیچ | داشبورد | بازیکن"
  }, []);

  return (
    <div>
      <NavbarPlayer />

      <div className="container pt-4">
        داشبورد بازیکن
      </div>
    </div>
  );
}

export default DashboardPlayer;
