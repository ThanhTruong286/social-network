import React from 'react';
import "../assets/scss/pages/HomePage.scss";
import FriendRequest from '../components/FriendRequest';
import UserStory from '../components/UserStory';
import ConfirmFriend from '../components/ConfirmFriend';
import SuggestPage from '../components/SuggestPage';
import SuggestGroup from '../components/SuggestGroup';
import Event from '../components/Event';
import CreatePost from '../components/CreatePost';
import UserPost from '../components/UserPost';

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
                            <div className='middle-content'>
                                <CreatePost />
                                <UserPost />
                            </div>

                        </div>
                        <div className='col-xl-4 col-xxl-3 col-lg-4 ps-lg-0'>
                            <div className='activity-sidebar'>
                                <FriendRequest />
                                <ConfirmFriend />
                                <SuggestPage />
                                <SuggestGroup />
                                <Event />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
