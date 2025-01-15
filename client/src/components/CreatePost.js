import "../assets/scss/components/CreatePost.scss";
import user8 from "../assets/images/user-8.png";

const CreatePost = () => {
    return (
        <div className='create-post'>
            <div className="card w-100 shadow-xss rounded-xxl border-0 ps-4 pt-4 pe-4 pb-3 mb-3">
                <div className="card-body p-0">
                    <a href="#" className="font-xssss fw-600 text-grey-500 card-body p-0 d-flex align-items-center"><i className="fa-regular fa-pen-to-square btn-round-sm font-xs text-primary me-2 bg-greylight"></i><span>Create Post</span></a>
                </div>
                <div className="card-body p-0 mt-3 position-relative">
                    <figure className="avatar position-absolute ms-2 mt-1 top-5"><img src={user8} alt="image" className="shadow-sm rounded-circle w30" /></figure>
                    <textarea name="message" className="h100 bor-0 w-100 rounded-xxl p-2 ps-5 font-xssss text-grey-500 fw-500 border-light-md theme-dark-bg" cols="30" rows="10" placeholder="What's on your mind?"></textarea>
                </div>
                <div className="card-body d-flex p-0 mt-0">
                    <a href="#" className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 pe-4"><i className="font-md text-danger fa-solid fa-film me-2" style={{ color: '#e50202' }}></i><span className="d-none-xs">Live Video</span></a>
                    <a href="#" className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 pe-4"><i className="font-md text-success fa-regular fa-image me-2"></i><span className="d-none-xs">Photo/Video</span></a>
                    <a href="#" className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 pe-4"><i className="font-md text-warning fa-solid fa-camera me-2"></i><span className="d-none-xs">Feeling/Activity</span></a>
                    <a style={{ fontSize: '12px' }} href="#" className="ms-auto" id="dropdownMenu4" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-ellipsis text-grey-900 btn-round-md bg-greylight font-xss"></i></a>
                    <div className="dropdown-menu dropdown-menu-start p-4 rounded-xxl border-0 shadow-lg" aria-labelledby="dropdownMenu4">
                        <div className="card-body p-0 d-flex">
                            <i className="fa-solid fa-bookmark text-grey-500 me-3 font-lg"></i>
                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">Save Link <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Add this to your saved items</span></h4>
                        </div>
                        <div className="card-body p-0 d-flex mt-2">
                            <i className="fa-solid fa-ban text-grey-500 me-3 font-lg"></i>
                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">Hide Post <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span></h4>
                        </div>
                        <div className="card-body p-0 d-flex mt-2">
                            <i className="fa-solid fa-ban text-grey-500 me-3 font-lg"></i>
                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">Hide all from Group <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span></h4>
                        </div>
                        <div className="card-body p-0 d-flex mt-2">
                            <i className="fa-solid fa-lock text-grey-500 me-3 font-lg"></i>
                            <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">Unfollow Group <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost