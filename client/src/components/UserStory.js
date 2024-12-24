import { Swiper, SwiperSlide } from 'swiper/react';
import "../assets/scss/components/UserStory.scss";
import 'swiper/css';

const UserStory = () => {
    const imagePath = '/assets/images';

    const stories = [
        { id: 1, background: `${imagePath}/story.jpg`, avatar: `${imagePath}/user-11.png`, name: 'John Doe' },
        { id: 2, background: `${imagePath}/story2.jpg`, avatar: `${imagePath}/user-2.png`, name: 'Jane Smith' },
        { id: 3, background: `${imagePath}/story3.jpg`, avatar: `${imagePath}/user-3.png`, name: 'Alice Johnson' },
        { id: 4, background: `${imagePath}/story4.jpg`, avatar: `${imagePath}/user-4.png`, name: 'Michael Brown' },
        { id: 5, background: `${imagePath}/story5.jpg`, avatar: `${imagePath}/user-5.png`, name: 'Emily Davis' },
        { id: 6, background: `${imagePath}/story6.jpg`, avatar: `${imagePath}/user-6.png`, name: 'David Wilson' },
        { id: 7, background: `${imagePath}/story7.jpg`, avatar: `${imagePath}/user-7.png`, name: 'Sophia Moore' },
        { id: 8, background: `${imagePath}/story8.jpg`, avatar: `${imagePath}/user-8.png`, name: 'James Taylor' },
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
