import React, { useState } from 'react';
import "../assets/scss/components/RightChat.scss";
import avatar1 from '../assets/images/user-11.png';
import avatar2 from '../assets/images/user-2.png';
import avatar3 from '../assets/images/user-3.png';
import avatar4 from '../assets/images/user-4.png';
import avatar5 from '../assets/images/user-5.png';
import avatar6 from '../assets/images/user-6.png';
import avatar7 from '../assets/images/user-7.png';
import avatar8 from '../assets/images/user-8.png';
import ModalPopupChat from './ModalPopupChat'; // Import component modal chat

const RightChat = () => {
    const [selectedUser, setSelectedUser] = useState(null); // State để theo dõi người dùng đã chọn

    const users = [
        { name: 'Hurin Seary', avatar: avatar1 },
        { name: 'Victor Exrixon', avatar: avatar2 },
        { name: 'Surfiya Zakir', avatar: avatar3 },
        { name: 'Goria Coast', avatar: avatar4 },
        { name: 'Hurin Seary', avatar: avatar5 },
        { name: 'David Goria', avatar: avatar6 },
        { name: 'Seary Victor', avatar: avatar7 },
        { name: 'Ana Seary', avatar: avatar8 },
    ];

    // Hàm xử lý khi người dùng nhấn vào tên
    const handleUserClick = (user) => {
        setSelectedUser(user); // Cập nhật người dùng đã chọn
    };

    return (
        <div className="right-chat nav-wrap mt-2 right-scroll-bar active-sidebar">
            <div className="middle-sidebar-right-content bg-white shadow-xss rounded-xxl">
                <div className="section full pe-3 ps-4 pt-4 position-relative feed-body">
                    <h4 className="font-xsssss text-grey-500 text-uppercase fw-700 ls-3">CONTACTS</h4>
                    <ul className="list-group list-group-flush">
                        {users.map((user, index) => (
                            <li key={index} className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                                <figure className="avatar float-left mb-0 me-2">
                                    <img src={user.avatar} alt="image" className="w35" />
                                </figure>
                                <h3 className="fw-700 mb-0 mt-0">
                                    <a
                                        className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                                        href="#"
                                        onClick={() => handleUserClick(user)} // Gọi hàm khi nhấn vào tên
                                    >
                                        {user.name}
                                    </a>
                                </h3>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Phần Groups */}
                <div className="section full pe-3 ps-4 pt-4 pb-4 position-relative feed-body">
                    <h4 className="font-xsssss text-grey-500 text-uppercase fw-700 ls-3">GROUPS</h4>
                    <ul className="list-group list-group-flush">
                        <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                            <span className="btn-round-sm bg-primary-gradiant me-3 ls-3 text-white font-xssss fw-700">UD</span>
                            <h3 className="fw-700 mb-0 mt-0">
                                <a className="font-xssss text-grey-600 d-block text-dark model-popup-chat" href="#">Studio Express</a>
                            </h3>
                            <span className="badge mt-0 text-grey-500 badge-pill pe-0 font-xsssss">2 min</span>
                        </li>
                        <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                            <span className="btn-round-sm bg-gold-gradiant me-3 ls-3 text-white font-xssss fw-700">AR</span>
                            <h3 className="fw-700 mb-0 mt-0">
                                <a className="font-xssss text-grey-600 d-block text-dark model-popup-chat" href="#">Armany Design</a>
                            </h3>
                            <span className="bg-warning ms-auto btn-round-xss"></span>
                        </li>
                        <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                            <span className="btn-round-sm bg-mini-gradiant me-3 ls-3 text-white font-xssss fw-700">UD</span>
                            <h3 className="fw-700 mb-0 mt-0">
                                <a className="font-xssss text-grey-600 d-block text-dark model-popup-chat" href="#">De fabous</a>
                            </h3>
                            <span className="bg-success ms-auto btn-round-xss"></span>
                        </li>
                    </ul>
                </div>

                {/* Phần Pages */}
                <div className="section full pe-3 ps-4 pt-0 pb-4 position-relative feed-body">
                    <h4 className="font-xsssss text-grey-500 text-uppercase fw-700 ls-3">Pages</h4>
                    <ul className="list-group list-group-flush">
                        <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                            <span className="btn-round-sm bg-primary-gradiant me-3 ls-3 text-white font-xssss fw-700">AB</span>
                            <h3 className="fw-700 mb-0 mt-0">
                                <a className="font-xssss text-grey-600 d-block text-dark model-popup-chat" href="#">Armany Seary</a>
                            </h3>
                            <span className="bg-success ms-auto btn-round-xss"></span>
                        </li>
                        <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                            <span className="btn-round-sm bg-gold-gradiant me-3 ls-3 text-white font-xssss fw-700">SD</span>
                            <h3 className="fw-700 mb-0 mt-0">
                                <a className="font-xssss text-grey-600 d-block text-dark model-popup-chat" href="#">Entropio Inc</a>
                            </h3>
                            <span className="bg-success ms-auto btn-round-xss"></span>
                        </li>
                    </ul>
                </div>
            </div>
            {selectedUser && <ModalPopupChat user={selectedUser} onClose={() => setSelectedUser(null)} />} {/* Hiện khung chat nếu có người dùng đã chọn */}
        </div>
    );
};

export default RightChat;
