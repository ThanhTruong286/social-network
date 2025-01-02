import React from 'react';
import "../assets/scss/pages/UserPage.scss";
import Event from '../components/Event';
import CreatePost from '../components/CreatePost';
import UserPost from '../components/UserPost';
import UserVideoPost from '../components/UserVideoPost';
import PostLoading from '../components/PostLoading';
import UserWall from '../components/UserWall';
import UserAboutBar from '../components/UserAboutBar';


const UserPage = () => {
    return (
        <div className='main-content right-chat-active'>
            <div className='middle-sidebar-bottom'>
                <div className='middle-sidebar-left'>
                    <div className='row'>
                        <UserWall />
                    </div>
                    <div className='row feed-body'>
                        <div className='col-xl-8 col-lg-8'>
                            <div className='middle-content'>
                                <CreatePost />
                                <UserPost />
                                <UserVideoPost />

                                <UserPost />
                                <UserVideoPost />
                                <PostLoading />
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-4 ps-lg-0'>
                            <div className='activity-sidebar'>
                                <UserAboutBar />
                                <Event />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UserPage