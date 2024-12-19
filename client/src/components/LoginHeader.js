import "../assets/scss/components/LoginHeader.scss";
import "../App.scss";
import React from 'react';

const LoginHeader = () => {
    return (
        <div className='nav-header bg-transparent shadow-none border-0'>
            <div className='nav-top w-100'>
                <a href='/'>
                    <i className='feather-zap text-success display1-size me-2 ms-0'>
                    </i>
                    <span className='d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0'>Hopi</span>
                </a>
                <a href="#" class="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl" data-bs-toggle="modal" data-bs-target="#Modallogin">Login</a>

                <a href="#" class="header-btn d-none d-lg-block fw-500 text-white font-xsss p-3 ms-2 me-3 w100 text-center lh-20 rounded-xl" data-bs-toggle="modal" data-bs-target="#Modalregister" id="register-btn">Register</a>
            </div>
        </div>
    );
};

export default LoginHeader;
