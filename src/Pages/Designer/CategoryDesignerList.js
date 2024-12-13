import React, { useEffect } from 'react';
import NavbarDesigner from '../../Components/NavbarDesigner'; // Import NavbarDesigner
import { Link } from 'react-router-dom'; // Import Link component for navigation

function CategoryDesignerList() {
  useEffect(() => {
    document.title = "سامانه پروژه سوال پیچ | مدیریت دسته بندی ها | طراح"
  }, []);

  return (
    <div>
      <NavbarDesigner /> {/* Include NavbarDesigner */}

      <div class="container pt-4">
        <div class="mb-4">
          <Link to="/category-designer-add" class="btn btn-primary">
            افزودن دسته بندی جدید
          </Link>
        </div>
        <h4 class="mb-4">دسته بندی های موجود</h4>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th class="col-10">نام دسته بندی</th>
              <th>تعداد سوالات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>برنامه نویسی</td>
              <td>100</td>
            </tr>
            <tr>
              <td>2</td>
              <td>عمومی</td>
              <td>20</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CategoryDesignerList;
