import "../assets/scss/components/FollowUser.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import "../assets/scss/components/UserStoryHomePage.scss";
import 'swiper/css';
import React from 'react';
import story1 from '../assets/images/story.jpg';
import story2 from '../assets/images/story2.jpg';
import story3 from '../assets/images/story3.jpg';
import story4 from '../assets/images/story4.jpg';
import story5 from '../assets/images/story5.jpg';
import story6 from '../assets/images/story6.jpg';
import story7 from '../assets/images/story7.jpg';
import story8 from '../assets/images/story8.jpg';
import avatar1 from '../assets/images/user-11.png';
import avatar2 from '../assets/images/user-2.png';
import avatar3 from '../assets/images/user-3.png';
import avatar4 from '../assets/images/user-4.png';
import avatar5 from '../assets/images/user-5.png';
import avatar6 from '../assets/images/user-6.png';
import avatar7 from '../assets/images/user-7.png';
import avatar8 from '../assets/images/user-8.png';

const users = [
    { id: 1, background: story1, avatar: avatar1, name: 'John Doe' },
    { id: 2, background: story2, avatar: avatar2, name: 'Jane Smith' },
    { id: 3, background: story3, avatar: avatar3, name: 'Alice Johnson' },
    { id: 4, background: story4, avatar: avatar4, name: 'Michael Brown' },
    { id: 5, background: story5, avatar: avatar5, name: 'Emily Davis' },
    { id: 6, background: story6, avatar: avatar6, name: 'David Wilson' },
    { id: 7, background: story7, avatar: avatar7, name: 'Sophia Moore' },
    { id: 8, background: story8, avatar: avatar8, name: 'James Taylor' },
];

const FollowUser = () => {
    return (
        <div className="follow-user-container mb-3">
            <Swiper
                spaceBetween={2}
                slidesPerView={Math.min(Math.max(users.length + 1, 1), 5)} // Đảm bảo tối thiểu 1 slide, tối đa 5 slide
                navigation // Hiển thị nút điều hướng
                pagination={{ clickable: true }} // Hiển thị phân trang
                style={{ padding: 0, width: 'auto' }}
                breakpoints={{
                    640: {
                        slidesPerView: Math.min(Math.max(users.length + 1, 1), 2), // Ít nhất 1 slide, tối đa 2
                    },
                    768: {
                        slidesPerView: Math.min(Math.max(users.length + 1, 1), 3), // Ít nhất 1 slide, tối đa 3
                    },
                    1024: {
                        slidesPerView: Math.min(Math.max(users.length + 1, 1), 3),
                    },
                    1200: {
                        slidesPerView: Math.min(Math.max(users.length + 1, 1), 3),
                    },
                }}
            >
                {/* Render các story nếu có */}
                {users.map((user) => (
                    <SwiperSlide key={user.id}>
                        <div className="follow-user-card">
                            <div class="item">
                                <div class="card w150 d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3 me-2 mt-3">
                                    <div class="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                                        <figure class="avatar ms-auto me-auto mb-0 position-relative w65 z-index-1"><img src={user.avatar} alt="image" class="float-right p-0 bg-white rounded-circle w-100 shadow-xss" style={{ opacity: "1;" }} /></figure>
                                        <div class="clearfix"></div>
                                        <h4 class="fw-700 font-xssss mt-3 mb-1">{user.name} </h4>
                                        <p class="fw-500 font-xsssss text-grey-500 mt-0 mb-3">@macale343</p>
                                        <a style={{ backgroundColor: '#10d876', textDecoration: 'none' }} href="#" class="text-center p-2 pe-4 ps-4 lh-20 w100 ms-1 ls-3 d-inline-block rounded-xl font-xsssss fw-700 ls-lg text-white">FOLLOW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>
        </div>
    );
}

export default FollowUser