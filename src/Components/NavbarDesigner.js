import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavbarDesigner() {
    const location = useLocation(); // Get the current location (route)

    // Function to determine if the link is active based on the current route
    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="dashboard-designer.html">سوال پیچ</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class={`nav-link ${isActive('/dashboard-designer')}`} to="/dashboard-designer">داشبورد</Link>
                        </li>
                        <li class="nav-item">
                            <Link class={`nav-link ${isActive('/question-designer-list')} ${isActive('/question-designer-add')}`} to="/question-designer-list">مدیریت سوالات</Link>
                        </li>
                        <li class="nav-item">
                            <Link class={`nav-link ${isActive('/category-designer-list')} ${isActive('/category-designer-add')}`} to="/category-designer-list">مدیریت دسته بندی ها</Link>
                        </li>
                        <li class="nav-item">
                            <Link class={`nav-link ${isActive('/logout')}`} to="/logout">خروج</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarDesigner;
