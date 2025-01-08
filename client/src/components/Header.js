import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link và useLocation
import "../assets/scss/components/Header.scss";
import logo from "../assets/images/logo.png";

const Header = () => {
    const location = useLocation(); // Sử dụng useLocation để theo dõi đường dẫn hiện tại
    const [activeIcon, setActiveIcon] = useState(location.pathname); // Khởi tạo activeIcon với đường dẫn hiện tại

    const handleIconClick = (icon) => {
        setActiveIcon(icon); // Cập nhật trạng thái khi nhấn vào biểu tượng
    };

    return (
        <header className="navbar navbar-light bg-white ps-5">
            <a className="navbar-brand" href="/">
                <span className="brand">
                    Hopi
                </span>
            </a>
            <div className="search-bar me-5">
                <i className="fas fa-search text-muted me-3"></i>
                <input placeholder="Start typing to search.." type="text" />
            </div>
            <div className="action-btn d-flex align-items-center">
                <div className={`icon-circle ${activeIcon === '/' ? 'active' : ''}`}>
                    <Link to='/' onClick={() => handleIconClick('/')}>
                        <i className="fas fa-house"></i>
                    </Link>
                </div>
                <div className={`icon-circle ${activeIcon === '/bolt' ? 'active' : ''}`} onClick={() => handleIconClick('/bolt')}>
                    <i className="fas fa-bolt"></i>
                </div>
                <div className={`icon-circle ${activeIcon === '/explore-videos' ? 'active' : ''}`}>
                    <Link to='/explore-videos' onClick={() => handleIconClick('/explore-videos')}>
                        <i className="fas fa-video"></i>
                    </Link>
                </div>
                <div className={`icon-circle ${activeIcon === '/user' ? 'active' : ''}`} onClick={() => handleIconClick('/user')}>
                    <i className="fas fa-user"></i>
                </div>
                <div className={`icon-circle ${activeIcon === '/clipboard-list' ? 'active' : ''}`} onClick={() => handleIconClick('/clipboard-list')}>
                    <i className="fas fa-clipboard-list"></i>
                </div>
            </div>
            <div className="d-flex align-items-center navbar-end me-5">
                <div className="icon-circle notification-dot">
                    <i className="fa-solid fa-bell text-primary"></i>
                </div>
                <div className="icon-circle">
                    <i className="fa-solid fa-comment text-primary"></i>
                </div>
                <div className="icon-circle">
                    <i className="fas fa-cog text-primary"></i>
                </div>
                <div className="icon-circle">
                    <img alt="User Avatar" className="rounded-circle" height="32" src="https://storage.googleapis.com/a1aa/image/Jqe4Ke4Fo9gRR0CqBi3eqf8rQEnJRXRyAXlGuQY5cL9jXy2PB.jpg" width="32" />
                </div>
            </div>
        </header>
    );
};

export default Header;
