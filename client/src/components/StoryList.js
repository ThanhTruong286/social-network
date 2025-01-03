import React from 'react';
import story from "../assets/images/story.jpg";
import story2 from "../assets/images/story2.jpg";
import story3 from "../assets/images/story3.jpg";
import story4 from "../assets/images/story4.jpg";
import story5 from "../assets/images/story5.jpg";
import story6 from "../assets/images/story6.jpg";
import story7 from "../assets/images/story7.jpg";
import story8 from "../assets/images/story8.jpg";
import story9 from "../assets/images/story9.jpg";
import story10 from "../assets/images/story10.jpg";
import avatar from "../assets/images/user_1.png";
import avatar2 from "../assets/images/user_2.png";
import avatar3 from "../assets/images/user-3.png";
import avatar4 from "../assets/images/user-4.png";
import avatar5 from "../assets/images/user-5.png";
import avatar6 from "../assets/images/user-6.png";
import avatar7 from "../assets/images/user-7.png";
import avatar8 from "../assets/images/user-8.png";
import avatar9 from "../assets/images/user-9.png";
import avatar10 from "../assets/images/user-11.png";
import avatar11 from "../assets/images/user-21.png";
import avatar12 from "../assets/images/user-22.png";
import video1 from "../assets/videos/v-1.mp4";
import video3 from "../assets/videos/v-3.mp4";



const StoryCard = ({ backgroundImage, videoSrc, avatarSrc, name }) => {
    return (
        <div className="col-md-3 col-xss-6 pe-2 ps-2">
            <div
                className={`card h300 d-block border-0 shadow-xss rounded-3 bg-gradiant-bottom overflow-hidden mb-3 ${backgroundImage ? 'bg-image-cover' : ''
                    }`}
                style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
            >
                {videoSrc ? (
                    <video autoPlay loop className="float-right w-100">
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                ) : null}
                <div className="card-body d-block w-100 position-absolute bottom-0 text-center">
                    <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                        <img
                            src={avatarSrc}
                            alt="avatar"
                            className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                        />
                    </figure>
                    <div className="clearfix"></div>
                    <h4 className="fw-600 position-relative z-index-1 ls-3 font-xssss text-white mt-2 mb-1">
                        {name}
                    </h4>
                </div>
            </div>
        </div>
    );
};

const StoryList = () => {
    const stories = [
        { backgroundImage: story, avatarSrc: avatar, name: 'Victor Exrixon' },
        { backgroundImage: story2, avatarSrc: avatar2, name: 'Surfiya Zakir' },
        { videoSrc: video1, avatarSrc: avatar3, name: 'Goria Coast' },
        { videoSrc: video3, avatarSrc: avatar4, name: 'Hurin Seary' },
        { backgroundImage: story3, avatarSrc: avatar5, name: 'Victor Exrixon' },
        { backgroundImage: story4, avatarSrc: avatar6, name: 'Surfiya Zakir' },
        { backgroundImage: story5, avatarSrc: avatar7, name: 'Goria Coast' },
        { backgroundImage: story6, avatarSrc: avatar8, name: 'Hurin Seary' },
        { backgroundImage: story7, avatarSrc: avatar9, name: 'Victor Exrixon' },
        { backgroundImage: story8, avatarSrc: avatar10, name: 'Surfiya Zakir' },
        { backgroundImage: story9, avatarSrc: avatar11, name: 'Goria Coast' },
        { backgroundImage: story10, avatarSrc: avatar12, name: 'Hurin Seary' },
    ];

    return (
        <div className="row ps-2 pe-1">
            {stories.map((story, index) => (
                <StoryCard
                    key={index}
                    backgroundImage={story.backgroundImage}
                    videoSrc={story.videoSrc}
                    avatarSrc={story.avatarSrc}
                    name={story.name}
                />
            ))}
        </div>
    );
};

export default StoryList;
