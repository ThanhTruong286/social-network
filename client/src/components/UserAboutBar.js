import "../assets/scss/components/UserAboutBar.scss";
import img1 from "../assets/images/e-1.jpg";
import img2 from "../assets/images/e-2.jpg";
import img3 from "../assets/images/e-3.jpg";
import img4 from "../assets/images/e-4.jpg";
import img5 from "../assets/images/e-5.jpg";


const UserAboutBar = () => {
    return (
        <div className="user-about">
            <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
                <div className="card-body p-3 border-0">
                    <div className="row">
                        <div className="col-3">
                            <div className="chart-container w50 h50">
                                <div className="chart position-relative" data-percent="78">
                                    <span className="percent fw-700 font-xsss" data-after="%">78</span>
                                    <canvas height="50" width="50"></canvas>
                                    <div className="inner-circle"></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-8 ps-1">
                            <h4 className="font-xsss d-block fw-700 mt-2 mb-0">Advanced Python Sass <span className="float-right mt-2 font-xsssss text-grey-500">87%</span></h4>
                            <p className="font-xssss fw-600 text-grey-500 lh-26 mb-0">Designer</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
                <div className="card-body d-block p-4">
                    <h4 className="fw-700 mb-3 font-xsss text-grey-900">About</h4>
                    <p className="fw-500 text-grey-500 lh-24 font-xssss mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                </div>
                <div className="card-body border-top-xs d-flex">
                    <i className="fa-solid fa-lock text-grey-500 me-3 font-lg"></i>
                    <h4 className="fw-700 text-grey-900 font-xssss mt-0">Private <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">What's up, how are you?</span></h4>
                </div>

                <div className="card-body d-flex pt-0">
                    <i className="fa-solid fa-eye text-grey-500 me-3 font-lg"></i>
                    <h4 className="fw-700 text-grey-900 font-xssss mt-0">Visble <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">Anyone can find you</span></h4>
                </div>
                <div className="card-body d-flex pt-0">
                    <i className="fa-solid fa-globe text-grey-500 me-3 font-lg"></i>
                    <h4 className="fw-700 text-grey-900 font-xssss mt-1">Flodia, Austia </h4>
                </div>
                <div className="card-body d-flex pt-0">
                    <i className="fa-solid fa-users text-grey-500 me-3 font-lg"></i>
                    <h4 className="fw-700 text-grey-900 font-xssss mt-1">Genarel Group</h4>
                </div>
            </div>





            <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
                <div className="card-body d-flex align-items-center  p-4">
                    <h4 className="fw-700 mb-0 font-xssss text-grey-900">Photos</h4>
                    <a href="#" className="fw-600 ms-auto font-xssss text-primary">See all</a>
                </div>
                <div className="card-body d-block pt-0 pb-2">
                    <div className="row">
                        <div className="col-6 mb-2 pe-1"><a href="images/e-2.jpg" data-lightbox="roadtrip"><img src={img1} alt="image" className="img-fluid rounded-3 w-100" /></a></div>
                        <div className="col-6 mb-2 ps-1"><a href="images/e-3.jpg" data-lightbox="roadtrip"><img src={img2} alt="image" className="img-fluid rounded-3 w-100" /></a></div>
                        <div className="col-6 mb-2 pe-1"><a href="images/e-4.jpg" data-lightbox="roadtrip"><img src={img3} alt="image" className="img-fluid rounded-3 w-100" /></a></div>
                        <div className="col-6 mb-2 ps-1"><a href="images/e-5.jpg" data-lightbox="roadtrip"><img src={img4} alt="image" className="img-fluid rounded-3 w-100" /></a></div>
                        <div className="col-6 mb-2 pe-1"><a href="images/e-2.jpg" data-lightbox="roadtrip"><img src={img5} alt="image" className="img-fluid rounded-3 w-100" /></a></div>
                        <div className="col-6 mb-2 ps-1"><a href="images/e-1.jpg" data-lightbox="roadtrip"><img src={img1} alt="image" className="img-fluid rounded-3 w-100" /></a></div>
                    </div>
                </div>
                <div className="card-body d-block w-100 pt-0">
                    <a href="#" className="p-2 lh-28 w-100 d-block bg-grey text-grey-800 text-center font-xssss fw-700 rounded-xl"><i className="fa-solid fa-arrow-up-right-from-square font-xss me-2"></i> More</a>
                </div>
            </div>
        </div>
    )
}

export default UserAboutBar