import "../assets/scss/pages/BagdePage.scss";
import avatar1 from '../assets/images/user_1.png';
import avatar2 from '../assets/images/user_2.png';
import avatar21 from '../assets/images/user-21.png';
import avatar22 from '../assets/images/user-22.png';
import avatar24 from '../assets/images/user-24.png';
import avatar25 from '../assets/images/user-25.png';
import topStudent from "../assets/svgs/top-student.svg";
import onfire from "../assets/svgs/onfire.svg";
import fastGraduate from "../assets/svgs/fast-graduate.svg";
import challengeMedal from "../assets/svgs/challenge-medal.svg";


const BagdePage = () => {
    return (
        <div className='main-content right-chat-active'>
            <div className='middle-sidebar-bottom'>
                <div class="middle-sidebar-left pe-0">
                    <div className="bagde-list">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="card shadow-xss w-100 d-block d-flex border-0 p-4 mb-3">
                                    <div class="card-body d-flex align-items-center p-0">
                                        <h2 class="fw-700 mb-0 mt-0 font-md text-grey-900">Bagde</h2>
                                        <div class="search-form-2 ms-auto">
                                            <i class="fa-solid fa-magnifying-glass font-xss"></i>
                                            <input type="text" class="form-control text-grey-500 mb-0 bg-greylight theme-dark-bg border-0" placeholder="Search here." />
                                        </div>
                                        <a href="#" class="btn-round-md ms-2 bg-greylight theme-dark-bg rounded-3"><i class="fa-solid fa-filter font-xss text-grey-500"></i></a>
                                    </div>
                                </div>

                                <div class="row ps-2 pe-1">
                                    <div class="col-md-4 col-sm-6 pe-2 ps-2">
                                        <div class="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                                            <div class="card-body d-block w-100 p-4 text-center">
                                                <figure class="avatar ms-auto me-auto mb-0 position-relative w90 z-index-1"><img src={avatar2} alt="image" class="float-right p-1 bg-white rounded-circle w-100" /></figure>
                                                <div class="clearfix"></div>
                                                <h4 class="fw-700 font-xss mt-3 mb-0">Aliqa Macale </h4>
                                                <p class="fw-500 font-xssss text-grey-500 mt-0 mb-3">support@gmail.com</p>
                                                <ul class="d-flex align-items-center justify-content-center mt-1">
                                                    <li class="m-2"><h4 class="fw-700 font-sm">500+ <span class="font-xsssss fw-500 mt-1 text-grey-500 d-block">Connections</span></h4></li>
                                                    <li class="m-2"><h4 class="fw-700 font-sm">88.7 k <span class="font-xsssss fw-500 mt-1 text-grey-500 d-block">Follower</span></h4></li>
                                                    <li class="m-2"><h4 class="fw-700 font-sm">1,334 <span class="font-xsssss fw-500 mt-1 text-grey-500 d-block">Followings</span></h4></li>
                                                </ul>
                                                <ul class="d-flex align-items-center justify-content-center mt-1">
                                                    <li class="m-1"><img src={topStudent} alt="icon" /></li>
                                                    <li class="m-1"><img src={onfire} alt="icon" /></li>
                                                    <li class="m-1"><img src={challengeMedal} alt="icon" /></li>
                                                    <li class="m-1"><img src={fastGraduate} alt="icon" /></li>
                                                </ul>
                                                <a href="#" class="mt-4 p-0 btn p-2 lh-24 w100 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white">FOLLOW</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4 col-sm-6 pe-2 ps-2">
                                        <div class="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                                            <div class="card-body d-block w-100 p-4 text-center">
                                                <figure class="avatar ms-auto me-auto mb-0 position-relative w90 z-index-1"><img src={avatar25} alt="image" class="float-right p-1 bg-white rounded-circle w-100" /></figure>
                                                <div class="clearfix"></div>
                                                <h4 class="fw-700 font-xss mt-3 mb-0">Hendrix Stamp </h4>
                                                <p class="fw-500 font-xssss text-grey-500 mt-0 mb-3">support@gmail.com</p>
                                                <ul class="d-flex align-items-center justify-content-center mt-1">
                                                    <li class="m-2"><h4 class="fw-700 font-sm">30+ <span class="font-xsssss fw-500 mt-1 text-grey-500 d-block">Connections</span></h4></li>
                                                    <li class="m-2"><h4 class="fw-700 font-sm">8.7 k <span class="font-xsssss fw-500 mt-1 text-grey-500 d-block">Follower</span></h4></li>
                                                    <li class="m-2"><h4 class="fw-700 font-sm">634 <span class="font-xsssss fw-500 mt-1 text-grey-500 d-block">Followings</span></h4></li>
                                                </ul>
                                                <ul class="d-flex align-items-center justify-content-center mt-1">
                                                    <li class="m-1"><img src={topStudent} alt="icon" /></li>
                                                    <li class="m-1"><img src={challengeMedal} alt="icon" /></li>
                                                    <li class="m-1"><img src={fastGraduate} alt="icon" /></li>
                                                </ul>
                                                <a href="#" class="mt-4 p-0 btn p-2 lh-24 w100 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white">FOLLOW</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4 col-sm-6 pe-2 ps-2">
                                        <div class="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                                            <div class="card-body d-block w-100 p-4 text-center">
                                                <figure class="avatar ms-auto me-auto mb-0 position-relative w90 z-index-1"><img src={avatar24} alt="image" class="float-right p-1 bg-white rounded-circle w-100" /></figure>
                                                <div class="clearfix"></div>
                                                <h4 class="fw-700 font-xss mt-3 mb-0">Stephen Grider </h4>
                                                <p class="fw-500 font-xssss text-grey-500 mt-0 mb-3">support@gmail.com</p>
                                                <ul class="d-flex align-items-center justify-content-center mt-1">
                                                    <li class="m-2"><h4 class="fw-700 font-sm">20+ <span class="font-xsssss fw-500 mt-1 text-grey-500 d-block">Connections</span></h4></li>
                                                    <li class="m-2"><h4 class="fw-700 font-sm">57 k <span class="font-xsssss fw-500 mt-1 text-grey-500 d-block">Follower</span></h4></li>
                                                    <li class="m-2"><h4 class="fw-700 font-sm">634 <span class="font-xsssss fw-500 mt-1 text-grey-500 d-block">Followings</span></h4></li>
                                                </ul>
                                                <ul class="d-flex align-items-center justify-content-center mt-1">
                                                    <li class="m-1"><img src={topStudent} alt="icon" /></li>
                                                    <li class="m-1"><img src={challengeMedal} alt="icon" /></li>
                                                    <li class="m-1"><img src={fastGraduate} alt="icon" /></li>
                                                </ul>
                                                <a href="#" class="mt-4 p-0 btn p-2 lh-24 w100 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white">FOLLOW</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-6 pe-2 ps-2">
                                        <div class="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-4">
                                            <div class="card-body d-block w-100 p-4 text-center">
                                                <figure class="avatar ms-auto me-auto mb-0 position-relative w90 z-index-1"><img src={avatar22} alt="image" class="float-right p-1 bg-white rounded-circle w-100" /></figure>
                                                <div class="clearfix"></div>
                                                <h4 class="fw-700 font-xss mt-3 mb-0">Mohannad Zitoun </h4>
                                                <p class="fw-500 font-xssss text-grey-500 mt-0 mb-3">support@gmail.com</p>
                                                <ul class="d-flex align-items-center justify-content-center mt-1">
                                                    <li class="m-2"><h4 class="fw-700 font-sm">500+ <span class="font-xsssss fw-500 mt-1 text-grey-500 d-block">Connections</span></h4></li>
                                                    <li class="m-2"><h4 class="fw-700 font-sm">88.7 k <span class="font-xsssss fw-500 mt-1 text-grey-500 d-block">Follower</span></h4></li>
                                                    <li class="m-2"><h4 class="fw-700 font-sm">1,334 <span class="font-xsssss fw-500 mt-1 text-grey-500 d-block">Followings</span></h4></li>
                                                </ul>
                                                <ul class="d-flex align-items-center justify-content-center mt-1">
                                                    <li class="m-1"><img src={onfire} alt="icon" /></li>
                                                    <li class="m-1"><img src={challengeMedal} alt="icon" /></li>
                                                    <li class="m-1"><img src={fastGraduate} alt="icon" /></li>
                                                </ul>
                                                <a href="#" class="mt-4 p-0 btn p-2 lh-24 w100 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white">FOLLOW</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-6 pe-2 ps-2">
                                        <div class="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                                            <div class="card-body d-block w-100 p-4 text-center">
                                                <figure class="avatar ms-auto me-auto mb-0 position-relative w90 z-index-1"><img src={avatar21} alt="image" class="float-right p-1 bg-white rounded-circle w-100" /></figure>
                                                <div class="clearfix"></div>
                                                <h4 class="fw-700 font-xss mt-3 mb-0">Aliqa Macale </h4>
                                                <p class="fw-500 font-xssss text-grey-500 mt-0 mb-3">support@gmail.com</p>
                                                <ul class="d-flex align-items-center justify-content-center mt-1">
                                                    <li class="m-2"><h4 class="fw-700 font-sm">500+ <span class="font-xsssss fw-500 mt-1 text-grey-500 d-block">Connections</span></h4></li>
                                                    <li class="m-2"><h4 class="fw-700 font-sm">88.7 k <span class="font-xsssss fw-500 mt-1 text-grey-500 d-block">Follower</span></h4></li>
                                                    <li class="m-2"><h4 class="fw-700 font-sm">1,334 <span class="font-xsssss fw-500 mt-1 text-grey-500 d-block">Followings</span></h4></li>
                                                </ul>
                                                <ul class="d-flex align-items-center justify-content-center mt-1">
                                                    <li class="m-1"><img src={topStudent} alt="icon" /></li>
                                                    <li class="m-1"><img src={onfire} alt="icon" /></li>
                                                    <li class="m-1"><img src={challengeMedal} alt="icon" /></li>
                                                    <li class="m-1"><img src={fastGraduate} alt="icon" /></li>
                                                </ul>
                                                <a href="#" class="mt-4 p-0 btn p-2 lh-24 w100 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white">FOLLOW</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4 col-sm-6 pe-2 ps-2">
                                        <div class="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                                            <div class="card-body d-block w-100 p-4 text-center">
                                                <figure class="avatar ms-auto me-auto mb-0 position-relative w90 z-index-1"><img src={avatar1} alt="image" class="float-right p-1 bg-white rounded-circle w-100" /></figure>
                                                <div class="clearfix"></div>
                                                <h4 class="fw-700 font-xss mt-3 mb-0">Surfiya Zakir </h4>
                                                <p class="fw-500 font-xssss text-grey-500 mt-0 mb-3">support@gmail.com</p>
                                                <ul class="d-flex align-items-center justify-content-center mt-1">
                                                    <li class="m-2"><h4 class="fw-700 font-sm">44+ <span class="font-xsssss fw-500 mt-1 text-grey-500 d-block">Connections</span></h4></li>
                                                    <li class="m-2"><h4 class="fw-700 font-sm">857 k <span class="font-xsssss fw-500 mt-1 text-grey-500 d-block">Follower</span></h4></li>
                                                    <li class="m-2"><h4 class="fw-700 font-sm">154 <span class="font-xsssss fw-500 mt-1 text-grey-500 d-block">Followings</span></h4></li>
                                                </ul>
                                                <ul class="d-flex align-items-center justify-content-center mt-1">
                                                    <li class="m-1"><img src={topStudent} alt="icon" /></li>
                                                    <li class="m-1"><img src={challengeMedal} alt="icon" /></li>
                                                    <li class="m-1"><img src={fastGraduate} alt="icon" /></li>
                                                </ul>
                                                <a href="#" class="mt-4 p-0 btn p-2 lh-24 w100 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white">FOLLOW</a>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BagdePage