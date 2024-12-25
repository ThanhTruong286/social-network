import { Swiper, SwiperSlide } from 'swiper/react';
import "../assets/scss/components/UserStory.scss";
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
import avatar2 from '../assets/images/user-3.png';
import avatar3 from '../assets/images/user-4.png';
import avatar4 from '../assets/images/user-5.png';
import avatar5 from '../assets/images/user-6.png';
import avatar6 from '../assets/images/user-7.png';
import avatar7 from '../assets/images/user-8.png';

const UserStory = () => {
    const stories = [
        { id: 1, background: story1, avatar: avatar1, name: 'John Doe' },
        { id: 2, background: story2, avatar: avatar2, name: 'Jane Smith' },
        { id: 3, background: story3, avatar: avatar2, name: 'Alice Johnson' },
        { id: 4, background: story4, avatar: avatar3, name: 'Michael Brown' },
        { id: 5, background: story5, avatar: avatar4, name: 'Emily Davis' },
        { id: 6, background: story6, avatar: avatar5, name: 'David Wilson' },
        { id: 7, background: story7, avatar: avatar6, name: 'Sophia Moore' },
        { id: 8, background: story8, avatar: avatar7, name: 'James Taylor' },
    ];

    return (
        <div className="user-story-container">
            <Swiper
                spaceBetween={2}
                slidesPerView={Math.min(Math.max(stories.length + 1, 1), 5)} // Đảm bảo tối thiểu 1 slide, tối đa 5 slide
                navigation // Hiển thị nút điều hướng
                pagination={{ clickable: true }} // Hiển thị phân trang
                style={{ padding: 0 }}
                breakpoints={{
                    640: {
                        slidesPerView: Math.min(Math.max(stories.length + 1, 1), 2), // Ít nhất 1 slide, tối đa 2
                    },
                    768: {
                        slidesPerView: Math.min(Math.max(stories.length + 1, 1), 3), // Ít nhất 1 slide, tối đa 3
                    },
                    1024: {
                        slidesPerView: Math.min(Math.max(stories.length + 1, 1), 4), // Ít nhất 1 slide, tối đa 4
                    },
                    1200: {
                        slidesPerView: Math.min(Math.max(stories.length + 1, 1), 5), // Ít nhất 1 slide, tối đa 5
                    },
                }}
            >
                {/* Slide Add Story */}
                <SwiperSlide>
                    <div
                        data-bs-toggle="modal"
                        data-bs-target="#Modalstory"
                        className="card story-card"
                    >
                        <div className="card-body">
                            <a href="#">
                                <div className="avatar-container">
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                                <h4 className="fw-700">Add Story</h4>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Render các story nếu có */}
                {stories.map((story) => (
                    <SwiperSlide key={story.id}>
                        <div
                            className="card story-card"
                            style={{
                                backgroundImage: `url(${story.background})`,
                            }}
                        >
                            <div className="card-body">
                                <a href="#">
                                    <div className="avatar-container">
                                        <img src={story.avatar} alt="Avatar" className="avatar-img" />
                                    </div>
                                    <h4 className="fw-700">{story.name}</h4>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default UserStory;
