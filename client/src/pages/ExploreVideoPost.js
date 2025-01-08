import React from 'react';
import "../assets/scss/pages/StoryDetail.scss";
import FeatureStories from '../components/FeatureStories';
import UserVideoPost from '../components/UserVideoPost';
import PostLoading from '../components/PostLoading';

const StoryDetail = () => {
    return (
        <div className='main-content right-chat-active'>
            <div className='middle-sidebar-bottom'>
                <div className='middle-sidebar-left'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-10'>
                            <FeatureStories />

                            <div className='story-media'>
                                <UserVideoPost />
                                <PostLoading />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default StoryDetail;
