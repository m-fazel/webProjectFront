import React, { useEffect } from 'react';
import NavbarDesigner from '../../Components/NavbarDesigner'; // Import NavbarDesigner

function DashboardDesigner() {

  useEffect(() => {
    document.title = "سامانه پروژه سوال پیچ | داشبورد | طراح"
  }, []);

  return (
    <div>
      <NavbarDesigner /> {/* Include NavbarDesigner */}

      <div class="container pt-4">
        داشبورد طراح
      </div>
    </div>
  );
}

export default DashboardDesigner;
