import "../assets/scss/components/UserVideoPost.scss";
import avatar9 from '../assets/images/user-9.png';
import video from "../assets/videos/v-2.mp4"
import { React, useState, useRef } from 'react';

const UserVideoPost = () => {

    const [isPlaying, setIsPlaying] = useState(false); // Trạng thái phát video
    const videoRef = useRef(null); // Tham chiếu đến video

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause(); // Tạm dừng video
        } else {
            videoRef.current.play(); // Phát video
        }
        setIsPlaying(!isPlaying); // Đổi trạng thái
    };

    return (
        <div className="user-video-post">
            <div class="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-3">
                <div class="card-body p-0 d-flex">
                    <figure class="avatar me-3"><img src={avatar9} alt="image" class="shadow-sm rounded-circle w45" /></figure>
                    <h4 class="fw-700 text-grey-900 font-xssss mt-1">Anthony Daugloi <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">2 hour ago</span></h4>
                    <a style={{ fontSize: '12px' }} href="#" class="ms-auto" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-ellipsis text-grey-900 btn-round-md bg-greylight font-xss"></i></a>
                    <div class="dropdown-menu dropdown-menu-start p-4 rounded-xxl border-0 shadow-lg" aria-labelledby="dropdownMenu4">
                        <div class="card-body p-0 d-flex">
                            <i class="fa-solid fa-bookmark text-grey-500 me-3 font-lg"></i>
                            <h4 class="fw-600 text-grey-900 font-xssss mt-0 me-4">Save Link <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Add this to your saved items</span></h4>
                        </div>
                        <div class="card-body p-0 d-flex mt-2">
                            <i class="fa-solid fa-ban text-grey-500 me-3 font-lg"></i>
                            <h4 class="fw-600 text-grey-900 font-xssss mt-0 me-4">Hide Post <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span></h4>
                        </div>
                        <div class="card-body p-0 d-flex mt-2">
                            <i class="fa-solid fa-ban text-grey-500 me-3 font-lg"></i>
                            <h4 class="fw-600 text-grey-900 font-xssss mt-0 me-4">Hide all from Group <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span></h4>
                        </div>
                        <div class="card-body p-0 d-flex mt-2">
                            <i class="fa-solid fa-lock text-grey-500 me-3 font-lg"></i>
                            <h4 class="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">Unfollow Group <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span></h4>
                        </div>
                    </div>
                </div>
                <div className="card-body p-0 mb-3 rounded-3 overflow-hidden">
                    <div className="video-container">
                        <a
                            href="#"
                            className={`video-btn ${isPlaying ? 'playing' : ''}`}
                            onClick={(e) => {
                                e.preventDefault(); // Ngăn điều hướng
                                handlePlayPause();
                            }}
                        >
                            <video
                                ref={videoRef}
                                className="float-right w-100"
                                loop
                                muted
                            >
                                <source src={video} type="video/mp4" />
                            </video>
                        </a>
                    </div>

                </div>

                <div class="card-body p-0 me-lg-5">
                    <p class="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus <a href="#" class="fw-600 text-primary ms-2">See more</a></p>
                </div>
                <div class="card-body d-flex p-0 mt-3">
                    <a href="#" class="emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"><i class="fa-solid fa-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i> <i class="fa-solid fa-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>2.8K Like</a>
                    <div class="emoji-wrap">
                        <ul class="emojis list-inline mb-0">
                            <li class="emoji list-inline-item"><i class="em em---1"></i> </li>
                            <li class="emoji list-inline-item"><i class="em em-angry"></i></li>
                            <li class="emoji list-inline-item"><i class="em em-anguished"></i> </li>
                            <li class="emoji list-inline-item"><i class="em em-astonished"></i> </li>
                            <li class="emoji list-inline-item"><i class="em em-blush"></i></li>
                            <li class="emoji list-inline-item"><i class="em em-clap"></i></li>
                            <li class="emoji list-inline-item"><i class="em em-cry"></i></li>
                            <li class="emoji list-inline-item"><i class="em em-full_moon_with_face"></i></li>
                        </ul>
                    </div>
                    <a href="#" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i class="fa-regular fa-comment text-dark text-grey-900 btn-round-sm font-lg"></i><span class="d-none-xss">22 Comment</span></a>
                    <a href="#" id="dropdownMenu21" data-bs-toggle="dropdown" aria-expanded="false" class="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i class="fa-regular fa-share-from-square text-grey-900 text-dark btn-round-sm font-lg"></i><span class="d-none-xs">Share</span></a>
                    <div class="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg" aria-labelledby="dropdownMenu21">
                        <h4 class="fw-700 font-xss text-grey-900 d-flex align-items-center">Share <i class="fa-solid fa-xmark ms-auto font-xssss btn-round-xs bg-greylight text-grey-900 me-2"></i></h4>
                        <div class="card-body p-0 d-flex">
                            <ul class="d-flex align-items-center justify-content-between mt-2 mb-0">
                                <li class="me-1"><a href="#" class="btn-round-lg bg-facebook"><i class="font-xs fa-brands fa-facebook-f text-white"></i></a></li>
                                <li class="me-1"><a href="#" class="btn-round-lg bg-twiiter"><i class="font-xs fa-brands fa-twitter text-white"></i></a></li>
                                <li class="me-1"><a href="#" class="btn-round-lg bg-linkedin"><i class="font-xs fa-brands fa-linkedin-in text-white"></i></a></li>
                                <li class="me-1"><a href="#" class="btn-round-lg bg-instagram"><i class="font-xs fa-brands fa-instagram text-white"></i></a></li>
                                <li><a href="#" class="btn-round-lg bg-pinterest"><i class="font-xs fa-brands fa-pinterest text-white"></i></a></li>
                            </ul>
                        </div>
                        <div class="card-body p-0 d-flex">
                            <ul class="d-flex align-items-center justify-content-between mt-2 mb-0">
                                <li class="me-1"><a href="#" class="btn-round-lg bg-tumblr"><i class="font-xs fa-brands fa-tumblr text-white"></i></a></li>
                                <li class="me-1"><a href="#" class="btn-round-lg bg-youtube"><i class="font-xs fa-brands fa-youtube text-white"></i></a></li>
                                <li class="me-1"><a href="#" class="btn-round-lg bg-flicker"><i class="font-xs fa-brands fa-flickr text-white"></i></a></li>
                                <li class="me-1"><a href="#" class="btn-round-lg bg-black"><i class="font-xs fa-brands fa-vimeo text-white"></i></a></li>
                                <li><a href="#" class="btn-round-lg bg-whatsup"><i class="font-xs fa-solid fa-phone text-white"></i></a></li>
                            </ul>
                        </div>
                        <h4 class="fw-700 font-xssss mt-4 text-grey-500 d-flex align-items-center mb-3">Copy Link</h4>
                        <i class="fa-solid fa-copy position-absolute mt-2 right-35 font-xs text-grey-500"></i>
                        <input type="text" value="https://socia.be/1rGxjoJKVF0" class="bg-grey text-grey-500 font-xssss border-0 lh-32 p-2 font-xssss fw-600 rounded-3 w-100 theme-dark-bg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserVideoPost