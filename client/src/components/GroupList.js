import React from 'react';
import "../assets/scss/components/GroupList.scss";
import PostLoading from './PostLoading';
import avatar from "../assets/images/user_1.png";
import avatar2 from "../assets/images/user_2.png";
import avatar3 from "../assets/images/user-3.png";
import avatar4 from "../assets/images/user-4.png";
import avatar5 from "../assets/images/user-5.png";
import avatar6 from "../assets/images/user-6.png";
import bg1 from "../assets/images/bb-16.png";
import bg2 from "../assets/images/bb-9.jpg";
import bg3 from "../assets/images/e-1.jpg";
import bg4 from "../assets/images/e-2.jpg";
import bg5 from "../assets/images/e-3.jpg";
import bg6 from "../assets/images/e-4.jpg";

const GroupList = () => {
    const groupCards = [
        {
            bgImage: bg1,
            avatar: avatar,
            name: "Victor Exrixon",
            email: "support@gmail.com",
        },
        {
            bgImage: bg2,
            avatar: avatar2,
            name: "Surfiya Zakir",
            email: "support@gmail.com",
        },
        {
            bgImage: bg3,
            avatar: avatar3,
            name: "Goria Coast",
            email: "support@gmail.com",
        },
        {
            bgImage: bg4,
            avatar: avatar4,
            name: "Hurin Seary",
            email: "support@gmail.com",
        },
        {
            bgImage: bg5,
            avatar: avatar5,
            name: "David Goria",
            email: "support@gmail.com",
        },
        {
            bgImage: bg6,
            avatar: avatar6,
            name: "Seary Victor",
            email: "support@gmail.com",
        },
    ];

    return (
        <div className="col-xl-12">
            <div class="card shadow-xss w-100 d-block d-flex border-0 p-4 mb-3">
                <div class="card-body d-flex align-items-center p-0">
                    <h2 class="fw-700 mb-0 mt-0 font-md text-grey-900">Groups</h2>
                    <div class="search-form-2 ms-auto">
                        <i class="fa-solid fa-magnifying-glass font-xss"></i>
                        <input type="text" class="form-control text-grey-500 mb-0 bg-greylight theme-dark-bg border-0" placeholder="Search here." />
                    </div>
                    <a href="#" class="btn-round-md ms-2 bg-greylight theme-dark-bg rounded-3"><i class="fa-solid fa-filter font-xss text-grey-500"></i></a>
                </div>
            </div>

            <div className="row ps-2 pe-1">
                {groupCards.map((group, index) => (
                    <div key={index} className="col-md-6 col-sm-6 pe-2 ps-2">
                        <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                            <div
                                className="card-body position-relative h100 bg-image-cover bg-image-center"
                                style={{ backgroundImage: `url(${group.bgImage})` }}
                            ></div>
                            <div className="card-body d-block w-100 pl-10 pe-4 pb-4 pt-0 text-left position-relative">
                                <figure
                                    className="avatar position-absolute w75 z-index-1"
                                    style={{ top: "-40px", left: "15px" }}
                                >
                                    <img
                                        src={group.avatar}
                                        alt="avatar"
                                        className="float-right p-1 bg-white rounded-circle w-100"
                                    />
                                </figure>
                                <div className="clearfix"></div>
                                <h4 className="fw-700 font-xsss mt-3 mb-1">{group.name}</h4>
                                <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">{group.email}</p>
                                <span className="position-absolute right-15 top-0 d-flex align-items-center">
                                    <a href="#" className="d-lg-block d-none">
                                        <i className="fa-solid fa-video btn-round-md font-md bg-primary-gradiant text-white"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-center p-2 lh-24 w100 ms-1 ls-3 d-inline-block rounded-xl bg-current font-xsssss fw-700 ls-lg text-white"
                                    >
                                        FOLLOW
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
                <PostLoading />
            </div>
        </div>
    );
};

export default GroupList;
