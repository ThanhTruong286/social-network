import "../assets/scss/pages/FriendListPage.scss";
import avatar1 from '../assets/images/user-11.png';
import avatar2 from '../assets/images/user-2.png';
import avatar3 from '../assets/images/user-3.png';
import avatar4 from '../assets/images/user-4.png';
import avatar5 from '../assets/images/user-5.png';
import avatar6 from '../assets/images/user-6.png';
import avatar7 from '../assets/images/user-7.png';
import avatar8 from '../assets/images/user-8.png';

const FriendListPage = () => {
    return (
        <div className='main-content right-chat-active'>
            <div className='middle-sidebar-bottom'>
                <div class="middle-sidebar-left pe-0">
                    <div className="friend-list">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="card shadow-xss w-100 d-block d-flex border-0 p-4 mb-3">
                                    <div class="card-body d-flex align-items-center p-0">
                                        <h2 class="fw-700 mb-0 mt-0 font-md text-grey-900">Friends</h2>
                                        <div class="search-form-2 ms-auto">
                                            <i class="fa-solid fa-magnifying-glass font-xss"></i>
                                            <input type="text" class="form-control text-grey-500 mb-0 bg-greylight theme-dark-bg border-0" placeholder="Search here." />
                                        </div>
                                        <a href="#" class="btn-round-md ms-2 bg-greylight theme-dark-bg rounded-3"><i class="fa-solid fa-filter font-xss text-grey-500"></i></a>
                                    </div>
                                </div>

                                <div class="row ps-2 pe-2">
                                    <div class="col-md-3 col-sm-4 pe-2 ps-2">
                                        <div class="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                                            <div class="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                                                <figure class="avatar ms-auto me-auto mb-0 position-relative w65 z-index-1"><img src={avatar1} alt="image" class="float-right p-0 bg-white rounded-circle w-100 shadow-xss" /></figure>
                                                <div class="clearfix"></div>
                                                <h4 class="fw-700 font-xsss mt-3 mb-1">Victor Exrixon </h4>
                                                <p class="fw-500 font-xsssss text-grey-500 mt-0 mb-3">@macale343</p>
                                                <a href="#" class="mt-0 btn pt-2 pb-2 ps-3 pe-3 lh-24 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white">ADD FRIEND</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-3 col-sm-4 pe-2 ps-2">
                                        <div class="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                                            <div class="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                                                <figure class="avatar ms-auto me-auto mb-0 position-relative w65 z-index-1"><img src={avatar2} alt="image" class="float-right p-0 bg-white rounded-circle w-100 shadow-xss" /></figure>
                                                <div class="clearfix"></div>
                                                <h4 class="fw-700 font-xsss mt-3 mb-1">Surfiya Zakir </h4>
                                                <p class="fw-500 font-xsssss text-grey-500 mt-0 mb-3">@macale343</p>
                                                <a href="#" class="mt-0 btn pt-2 pb-2 ps-3 pe-3 lh-24 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white">ADD FRIEND</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-3 col-sm-4 pe-2 ps-2">
                                        <div class="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                                            <div class="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                                                <figure class="avatar ms-auto me-auto mb-0 position-relative w65 z-index-1"><img src={avatar3} alt="image" class="float-right p-0 bg-white rounded-circle w-100 shadow-xss" /></figure>
                                                <div class="clearfix"></div>
                                                <h4 class="fw-700 font-xsss mt-3 mb-1">Goria Coast </h4>
                                                <p class="fw-500 font-xsssss text-grey-500 mt-0 mb-3">@macale343</p>
                                                <a href="#" class="mt-0 btn pt-2 pb-2 ps-3 pe-3 lh-24 ms-1 ls-3 d-inline-block rounded-xl bg-danger font-xsssss fw-700 ls-lg text-white">FRIEND</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-3 col-sm-4 pe-2 ps-2">
                                        <div class="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                                            <div class="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                                                <figure class="avatar ms-auto me-auto mb-0 position-relative w65 z-index-1"><img src={avatar4} alt="image" class="float-right p-0 bg-white rounded-circle w-100 shadow-xss" /></figure>
                                                <div class="clearfix"></div>
                                                <h4 class="fw-700 font-xsss mt-3 mb-1">Hurin Seary </h4>
                                                <p class="fw-500 font-xsssss text-grey-500 mt-0 mb-3">@macale343</p>
                                                <a href="#" class="mt-0 btn pt-2 pb-2 ps-3 pe-3 lh-24 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white">ADD FRIEND</a>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-md-3 col-sm-4 pe-2 ps-2">
                                        <div class="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3 mt-0">
                                            <div class="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                                                <figure class="avatar ms-auto me-auto mb-0 position-relative w65 z-index-1"><img src={avatar5} alt="image" class="float-right p-0 bg-white rounded-circle w-100 shadow-xss" /></figure>
                                                <div class="clearfix"></div>
                                                <h4 class="fw-700 font-xsss mt-3 mb-1">Victor Exrixon </h4>
                                                <p class="fw-500 font-xsssss text-grey-500 mt-0 mb-3">@macale343</p>
                                                <a href="#" class="mt-0 btn pt-2 pb-2 ps-3 pe-3 lh-24 ms-1 ls-3 d-inline-block rounded-xl bg-danger font-xsssss fw-700 ls-lg text-white">FRIEND</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-3 col-sm-4 pe-2 ps-2">
                                        <div class="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3 mt-0">
                                            <div class="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                                                <figure class="avatar ms-auto me-auto mb-0 position-relative w65 z-index-1"><img src={avatar6} alt="image" class="float-right p-0 bg-white rounded-circle w-100 shadow-xss" /></figure>
                                                <div class="clearfix"></div>
                                                <h4 class="fw-700 font-xsss mt-3 mb-1">Surfiya Zakir </h4>
                                                <p class="fw-500 font-xsssss text-grey-500 mt-0 mb-3">@macale343</p>
                                                <a href="#" class="mt-0 btn pt-2 pb-2 ps-3 pe-3 lh-24 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white">ADD FRIEND</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-3 col-sm-4 pe-2 ps-2">
                                        <div class="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3 mt-0">
                                            <div class="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                                                <figure class="avatar ms-auto me-auto mb-0 position-relative w65 z-index-1"><img src={avatar7} alt="image" class="float-right p-0 bg-white rounded-circle w-100 shadow-xss" /></figure>
                                                <div class="clearfix"></div>
                                                <h4 class="fw-700 font-xsss mt-3 mb-1">Goria Coast </h4>
                                                <p class="fw-500 font-xsssss text-grey-500 mt-0 mb-3">@macale343</p>
                                                <a href="#" class="mt-0 btn pt-2 pb-2 ps-3 pe-3 lh-24 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white">ADD FRIEND</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-3 col-sm-4 pe-2 ps-2">
                                        <div class="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3 mt-0">
                                            <div class="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                                                <figure class="avatar ms-auto me-auto mb-0 position-relative w65 z-index-1"><img src={avatar8} alt="image" class="float-right p-0 bg-white rounded-circle w-100 shadow-xss" /></figure>
                                                <div class="clearfix"></div>
                                                <h4 class="fw-700 font-xsss mt-3 mb-1">Hurin Seary </h4>
                                                <p class="fw-500 font-xsssss text-grey-500 mt-0 mb-3">@macale343</p>
                                                <a href="#" class="mt-0 btn pt-2 pb-2 ps-3 pe-3 lh-24 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white">ADD FRIEND</a>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-md-3 col-sm-4 pe-2 ps-2">
                                        <div class="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3 mt-0">
                                            <div class="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                                                <figure class="avatar ms-auto me-auto mb-0 position-relative w65 z-index-1"><img src={avatar1} alt="image" class="float-right p-0 bg-white rounded-circle w-100 shadow-xss" /></figure>
                                                <div class="clearfix"></div>
                                                <h4 class="fw-700 font-xsss mt-3 mb-1">Surfiya Zakir </h4>
                                                <p class="fw-500 font-xsssss text-grey-500 mt-0 mb-3">@macale343</p>
                                                <a href="#" class="mt-0 btn pt-2 pb-2 ps-3 pe-3 lh-24 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white">ADD FRIEND</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-3 col-sm-4 pe-2 ps-2">
                                        <div class="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3 mt-0">
                                            <div class="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                                                <figure class="avatar ms-auto me-auto mb-0 position-relative w65 z-index-1"><img src={avatar2} alt="image" class="float-right p-0 bg-white rounded-circle w-100 shadow-xss" /></figure>
                                                <div class="clearfix"></div>
                                                <h4 class="fw-700 font-xsss mt-3 mb-1">Goria Coast </h4>
                                                <p class="fw-500 font-xsssss text-grey-500 mt-0 mb-3">@macale343</p>
                                                <a href="#" class="mt-0 btn pt-2 pb-2 ps-3 pe-3 lh-24 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white">ADD FRIEND</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-3 col-sm-4 pe-2 ps-2">
                                        <div class="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3 mt-0">
                                            <div class="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                                                <figure class="avatar ms-auto me-auto mb-0 position-relative w65 z-index-1"><img src={avatar3} alt="image" class="float-right p-0 bg-white rounded-circle w-100 shadow-xss" /></figure>
                                                <div class="clearfix"></div>
                                                <h4 class="fw-700 font-xsss mt-3 mb-1">Hurin Seary </h4>
                                                <p class="fw-500 font-xsssss text-grey-500 mt-0 mb-3">@macale343</p>
                                                <a href="#" class="mt-0 btn pt-2 pb-2 ps-3 pe-3 lh-24 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white">ADD FRIEND</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-3 col-sm-4 pe-2 ps-2">
                                        <div class="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3 mt-0">
                                            <div class="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                                                <figure class="avatar ms-auto me-auto mb-0 position-relative w65 z-index-1"><img src={avatar4} alt="image" class="float-right p-0 bg-white rounded-circle w-100 shadow-xss" /></figure>
                                                <div class="clearfix"></div>
                                                <h4 class="fw-700 font-xsss mt-3 mb-1">Aliqa Macale </h4>
                                                <p class="fw-500 font-xsssss text-grey-500 mt-0 mb-3">@macale343</p>
                                                <a href="#" class="mt-0 btn pt-2 pb-2 ps-3 pe-3 lh-24 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white">ADD FRIEND</a>
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

export default FriendListPage