import React from 'react';
import "../assets/scss/components/Header.scss";

const Header = () => {
    return (
        <nav class="navbar navbar-light bg-white ps-5">
            <a class="navbar-brand" href="#">
                <img alt="Logo" height="32" src="https://storage.googleapis.com/a1aa/image/cUwDqaSYVeV7HyIGUwFiHQlnRayL1gQBmG2jmcdXev65ls9TA.jpg" width="32" />
                <span class="brand">
                    Hopi
                </span>
            </a>
            <div class="search-bar me-5">
                <i class="fas fa-search text-muted me-3">
                </i>
                <input placeholder="Start typing to search.." type="text" />
            </div>
            <div class="action-btn d-flex align-items-center">
                <div class="icon-circle active">
                    <i class="fas fa-home">
                    </i>
                </div>
                <div class="icon-circle">
                    <i class="fas fa-bolt">
                    </i>
                </div>
                <div class="icon-circle">
                    <i class="fas fa-video">
                    </i>
                </div>
                <div class="icon-circle">
                    <i class="fas fa-user">
                    </i>
                </div>
                <div class="icon-circle">
                    <i class="fas fa-clipboard-list">
                    </i>
                </div>
            </div>
            <div class="d-flex align-items-center navbar-end me-5">
                <div class="icon-circle notification-dot">
                    <i class="fas fa-bell text-primary">
                    </i>
                </div>
                <div class="icon-circle">
                    <i class="fas fa-comment text-primary">
                    </i>
                </div>
                <div class="icon-circle">
                    <i class="fas fa-cog text-primary">
                    </i>
                </div>
                <div class="icon-circle">
                    <img alt="User Avatar" class="rounded-circle" height="32" src="https://storage.googleapis.com/a1aa/image/Jqe4Ke4Fo9gRR0CqBi3eqf8rQEnJRXRyAXlGuQY5cL9jXy2PB.jpg" width="32" />
                </div>
            </div>
        </nav>
    );
};

export default Header;
