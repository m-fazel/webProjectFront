import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavbarDesigner() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className={`navbar-brand`} to="/dashboard-designer">سوال پیچ</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive('/dashboard-designer')}`} to="/dashboard-designer">داشبورد</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive('/question-designer-list')} ${isActive('/question-designer-add')}`} to="/question-designer-list">مدیریت سوالات</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive('/category-designer-list')} ${isActive('/category-designer-add')}`} to="/category-designer-list">مدیریت دسته بندی ها</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive('/logout')}`} to="/logout">خروج</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarDesigner;
