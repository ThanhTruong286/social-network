import React from 'react';
import "../assets/scss/components/Sidebar.scss";

const SideBar = () => {
    return (
        <nav className="navigation scroll-bar">
            <div className="container ps-0 pe-0">
                <div className="nav-content">
                    <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2 mt-2">
                        <div className="nav-caption fw-600 font-xssss text-grey-500"><span>New </span>Feeds</div>
                        <ul className="mb-1 top-content">
                            <li className="logo d-none d-xl-block d-lg-block"></li>
                            <li><a href="/" className="nav-content-bttn open-font"><i className="fa-solid fa-tv btn-round-md bg-blue-gradiant me-3"></i><span>Newsfeed</span></a></li>
                            <li><a href="/bagde-list" className="nav-content-bttn open-font"><i className="fa-solid fa-medal btn-round-md bg-red-gradiant me-3"></i><span>Badges</span></a></li>
                            <li><a href="/explore-stories" className="nav-content-bttn open-font"><i className="fa-solid fa-globe btn-round-md bg-gold-gradiant me-3"></i><span>Explore Stories</span></a></li>
                            <li><a href="/explore-groups" className="nav-content-bttn open-font"><i className="fa-solid fa-bolt btn-round-md bg-mini-gradiant me-3"></i><span>Popular Groups</span></a></li>
                            <li><a href="/user-page" className="nav-content-bttn open-font"><i className="fa-solid fa-user btn-round-md bg-primary-gradiant me-3"></i><span>Author Profile </span></a></li>
                        </ul>
                    </div>

                    <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2">
                        <div className="nav-caption fw-600 font-xssss text-grey-500"><span>More </span>Pages</div>
                        <ul className="mb-3">
                            <li><a href="default-email-box.html" className="nav-content-bttn open-font"><i className="font-xl text-current fa-solid fa-envelope me-3"></i><span>Email Box</span><span className="circle-count bg-warning-custom mt-1">584</span></a></li>
                            <li><a href="default-hotel.html" className="nav-content-bttn open-font"><i className="font-xl text-current fa-solid fa-hotel me-3"></i><span>Near Hotel</span></a></li>
                            <li><a href="default-event.html" className="nav-content-bttn open-font"><i className="font-xl text-current fa-solid fa-location me-3"></i><span>Latest Event</span></a></li>
                            <li><a href="default-live-stream.html" className="nav-content-bttn open-font"><i className="font-xl text-current fa-brands fa-youtube me-3"></i><span>Live Stream</span></a></li>
                        </ul>
                    </div>
                    <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1">
                        <div className="nav-caption fw-600 font-xssss text-grey-500"><span></span> Account</div>
                        <ul className="mb-1">
                            <li className="logo d-none d-xl-block d-lg-block"></li>
                            <li><a href="default-settings.html" className="nav-content-bttn open-font h-auto pt-2 pb-2"><i className="font-sm fa-solid fa-gear me-3 text-grey-500"></i><span>Settings</span></a></li>
                            <li><a href="default-analytics.html" className="nav-content-bttn open-font h-auto pt-2 pb-2"><i className="font-sm fa-solid fa-chart-simple me-3 text-grey-500"></i><span>Analytics</span></a></li>
                            <li><a href="default-message.html" className="nav-content-bttn open-font h-auto pt-2 pb-2"><i className="font-sm fa-solid fa-comment me-3 text-grey-500"></i><span>Chat</span><span className="circle-count bg-warning-custom mt-0">23</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default SideBar;