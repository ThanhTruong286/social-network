import React from 'react';
import "../assets/scss/components/Sidebar.scss";

const SideBar = () => {
    return (
        <nav class="navigation scroll-bar">
            <div class="container ps-0 pe-0">
                <div class="nav-content">
                    <div class="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2 mt-2">
                        <div class="nav-caption fw-600 font-xssss text-grey-500"><span>New </span>Feeds</div>
                        <ul class="mb-1 top-content">
                            <li class="logo d-none d-xl-block d-lg-block"></li>
                            <li><a href="/" class="nav-content-bttn open-font"><i class="fa-solid fa-tv btn-round-md bg-blue-gradiant me-3"></i><span>Newsfeed</span></a></li>
                            <li><a href="/bagde-list" class="nav-content-bttn open-font"><i class="fa-solid fa-medal btn-round-md bg-red-gradiant me-3"></i><span>Badges</span></a></li>
                            <li><a href="default-storie.html" class="nav-content-bttn open-font"><i class="fa-solid fa-globe btn-round-md bg-gold-gradiant me-3"></i><span>Explore Stories</span></a></li>
                            <li><a href="default-group.html" class="nav-content-bttn open-font"><i class="fa-solid fa-bolt btn-round-md bg-mini-gradiant me-3"></i><span>Popular Groups</span></a></li>
                            <li><a href="/user-page" class="nav-content-bttn open-font"><i class="fa-solid fa-user btn-round-md bg-primary-gradiant me-3"></i><span>Author Profile </span></a></li>
                        </ul>
                    </div>

                    <div class="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2">
                        <div class="nav-caption fw-600 font-xssss text-grey-500"><span>More </span>Pages</div>
                        <ul class="mb-3">
                            <li><a href="default-email-box.html" class="nav-content-bttn open-font"><i class="font-xl text-current fa-solid fa-envelope me-3"></i><span>Email Box</span><span class="circle-count bg-warning-custom mt-1">584</span></a></li>
                            <li><a href="default-hotel.html" class="nav-content-bttn open-font"><i class="font-xl text-current fa-solid fa-hotel me-3"></i><span>Near Hotel</span></a></li>
                            <li><a href="default-event.html" class="nav-content-bttn open-font"><i class="font-xl text-current fa-solid fa-location me-3"></i><span>Latest Event</span></a></li>
                            <li><a href="default-live-stream.html" class="nav-content-bttn open-font"><i class="font-xl text-current fa-brands fa-youtube me-3"></i><span>Live Stream</span></a></li>
                        </ul>
                    </div>
                    <div class="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1">
                        <div class="nav-caption fw-600 font-xssss text-grey-500"><span></span> Account</div>
                        <ul class="mb-1">
                            <li class="logo d-none d-xl-block d-lg-block"></li>
                            <li><a href="default-settings.html" class="nav-content-bttn open-font h-auto pt-2 pb-2"><i class="font-sm fa-solid fa-gear me-3 text-grey-500"></i><span>Settings</span></a></li>
                            <li><a href="default-analytics.html" class="nav-content-bttn open-font h-auto pt-2 pb-2"><i class="font-sm fa-solid fa-chart-simple me-3 text-grey-500"></i><span>Analytics</span></a></li>
                            <li><a href="default-message.html" class="nav-content-bttn open-font h-auto pt-2 pb-2"><i class="font-sm fa-solid fa-comment me-3 text-grey-500"></i><span>Chat</span><span class="circle-count bg-warning-custom mt-0">23</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default SideBar;