import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../assets/scss/components/FeatureStories.scss";
import 'swiper/css';
import avatar1 from '../assets/images/user-11.png';
import avatar2 from '../assets/images/user-2.png';
import avatar3 from '../assets/images/user-3.png';
import avatar4 from '../assets/images/user-4.png';
import avatar5 from '../assets/images/user-5.png';

// Sample user data
const users = [
    { id: 1, name: 'Ana', avatar: avatar1 },
    { id: 2, name: 'Devid', avatar: avatar2 },
    { id: 3, name: 'Anton', avatar: avatar3 },
    { id: 4, name: 'Jane', avatar: avatar4 },
    { id: 5, name: 'Wade', avatar: avatar5 },
];

const UserList = () => {
    return (
        <div className='user-story-list'>
            <div className="card w-100 border-0 shadow-xss rounded-xxl border-0 p-4 mb-3 overflow-hidden">
                <div className="card-body p-0 d-flex align-items-center mb-3">
                    <h4 className="fw-700 font-xss text-grey-900 pt-0 mb-0">Featured Stories</h4>
                    <a href="#" className="ps-3 pe-2 lh-32 d-flex align-items-center font-xssss fw-600 alert-primary rounded-xxl text-primary ms-auto">
                        See more <i className="font-xsss feather-chevron-right ms-1"></i>
                    </a>
                </div>
                <div className="card-body p-0 d-block mb-4">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={10}
                        navigation
                        pagination={{ clickable: true }}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='item no-outline'>
                                <div className="card bg-transparent bg-transparent-card border-0 shadow-none">
                                    <div className="card-image text-center">
                                        <a href="#" data-target="#Modalstries" data-toggle="modal" className="w-100 btn-round-lg">
                                            <i className="fa-solid fa-plus text-grey-600 font-md"></i>
                                            <span className="d-block fw-600 font-xssss text-grey-600 text-dark mt-0">My story</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {users.map(user => (
                            <SwiperSlide key={user.id}>
                                <div className='item online'>
                                    <div className="card bg-transparent bg-transparent-card border-0 shadow-none">
                                        <div className="card-image text-center">
                                            <a href="#" data-target="#Modalstries" data-toggle="modal">
                                                <div className='img-border'>
                                                    <img src={user.avatar} alt={user.name} className="d-inline p-0" />
                                                </div>
                                                <span className="d-block fw-600 font-xssss text-grey-600 text-dark">{user.name}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>

    );
};

export default UserList;
