import React from 'react';
import "../assets/scss/pages/HomePage.scss";
import FriendRequest from '../components/FriendRequest';
import UserStoryHomePage from '../components/UserStoryHomePage';
import ConfirmFriend from '../components/ConfirmFriend';
import SuggestPage from '../components/SuggestPage';
import SuggestGroup from '../components/SuggestGroup';
import Event from '../components/Event';
import CreatePost from '../components/CreatePost';
import UserPost from '../components/UserPost';
import UserLiveStream from '../components/UserLiveStream';
import UserVideoPost from '../components/UserVideoPost';
import FollowUser from '../components/FollowUser';
import PostLoading from '../components/PostLoading';
import useAuthCheck from '../hooks/useAuthCheck';

const HomePage = () => {

    useAuthCheck();

    return (
        <div className='main-content right-chat-active'>
            <div className='middle-sidebar-bottom'>
                <div className='middle-sidebar-left'>
                    <div className='row feed-body'>
                        <div className='col-xl-8 col-lg-8'>
                            <div className='card w-100 shadow-none bg-transparent bg-transparent-card border-0 p-0 mb-0'>
                                <UserStoryHomePage />
                            </div>
                            <div className='middle-content'>
                                <CreatePost />
                                <UserPost />
                                <UserLiveStream />
                                <UserVideoPost />
                                <FollowUser />
                                <UserVideoPost />
                                <UserPost />
                                <PostLoading />
                            </div>

                        </div>
                        <div className='col-xl-4 col-lg-4 ps-lg-0'>
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
