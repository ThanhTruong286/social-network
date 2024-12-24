import React from 'react';
import UserStory from '../components/UserStory';
import "../assets/scss/pages/HomePage.scss";

const HomePage = () => {
    return (
        <div className='main-content right-chat-active'>
            <div className='middle-sidebar-bottom'>
                <div className='middle-sidebar-left'>
                    <div className='row feed-body'>
                        <div className='col-xl-8 col-xxl-9 col-lg-8'>
                            <div className='card w-100 shadow-none bg-transparent bg-transparent-card border-0 p-0 mb-0'>
                                <UserStory />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
