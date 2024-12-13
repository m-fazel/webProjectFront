import React, { useState, useEffect } from 'react';
import NavbarDesigner from '../../Components/NavbarDesigner';
import { Link } from 'react-router-dom';
import useApiRequest from '../../Utils/UseApiRequest';

function CategoryDesignerList() {
  useEffect(() => {
    document.title = "سامانه پروژه سوال پیچ | مدیریت دسته بندی ها | طراح";
  }, []);

  const apiRequest = useApiRequest();
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await apiRequest('/get_categories', 'POST', true);
        if (response.success) {
          setCategories(response.data.table);
        } else {
          alert(response.error.message || 'Failed to fetch categories');
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <NavbarDesigner />

      <div className="container pt-4">
        <div className="mb-4">
          <Link to="/category-designer-add" className="btn btn-primary">
            افزودن دسته بندی جدید
          </Link>
        </div>
        <h4 className="mb-4">دسته بندی های موجود</h4>
        {error ? (
          <div className="alert alert-danger">{error}</div>
        ) : (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th className="col-10">نام دسته بندی</th>
                <th>تعداد سوالات</th>
              </tr>
            </thead>
            <tbody>
              {categories.length > 0 ? (
                categories.map((category, index) => (
                  <tr key={category.id || index}>
                    <td>{category.id}</td>
                    <td>{category.category}</td>
                    <td>{category.question_count || 0}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center">
                    هیچ دسته بندی موجود نیست
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default CategoryDesignerList;
