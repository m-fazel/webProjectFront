import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavbarPlayer() {
    const location = useLocation();

    const isActive = (path) => location.pathname.split("/")[1] === path ? 'active' : '';

    return (
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="dashboard-player.html">سوال پیچ</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive('dashboard-player')}`} to="/dashboard-player">داشبورد</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive('question-player-list')} ${isActive('designer-view')}`} to="/question-player-list">مدیریت سوالات</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive('score-player')} ${isActive('player-view')}`} to="/score-player">جدول امتیازات</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive('logout')}`} to="/logout">خروج</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarPlayer;
