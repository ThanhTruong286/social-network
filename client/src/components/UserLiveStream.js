import "../assets/scss/components/UserLiveStream.scss";
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

const UserLiveStream = () => {
    return (
        <div className="user-livestream-container mt-1">
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
                        slidesPerView: Math.min(Math.max(users.length + 1, 1), 3), // Ít nhất 1 slide, tối đa 4
                    },
                    1200: {
                        slidesPerView: Math.min(Math.max(users.length + 1, 1), 3), // Ít nhất 1 slide, tối đa 5
                    },
                }}
            >
                {/* Render các story nếu có */}
                {users.map((user) => (
                    <SwiperSlide key={user.id}>
                        <div className="livestream-card">
                            <div className="item">
                                <div className="card w200 d-block border-0 shadow-xss rounded-xxl overflow-hidden mb-3 me-2 mt-3">
                                    <div className="card-body position-relative h100 bg-image-cover bg-image-center" style={{
                                        backgroundImage: `url(${user.background})`,
                                    }}></div>
                                    <div className="card-body d-block w-100 ps-4 pe-4 pb-4 text-center">
                                        <figure className="avatar ms-auto me-auto mb-0 mt--6 position-relative w75 z-index-1"><img src={user.avatar} alt="image" className="float-right p-1 bg-white rounded-circle w-100" style={{ opacity: "1;" }} /></figure>
                                        <div className="clearfix"></div>
                                        <h4 className="fw-700 font-xsss mt-2 mb-1">{user.name} </h4>
                                        <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-2">support@gmail.com</p>
                                        <span style={{ backgroundColor: 'red' }} className="live-tag mt-2 mb-0 p-2 z-index-1 rounded-3 text-white font-xsssss text-uppersace fw-700 ls-3">LIVE</span>
                                        <div className="clearfix mb-2"></div>
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

export default UserLiveStream