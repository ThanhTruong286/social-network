import "../assets/scss/components/CreatePost.scss";
import user8 from "../assets/images/user-8.png";

const CreatePost = () => {
    return (
        <div className='create-post'>
            <div class="card w-100 shadow-xss rounded-xxl border-0 ps-4 pt-4 pe-4 pb-3 mb-3">
                <div class="card-body p-0">
                    <a href="#" class="font-xssss fw-600 text-grey-500 card-body p-0 d-flex align-items-center"><i class="fa-regular fa-pen-to-square btn-round-sm font-xs text-primary me-2 bg-greylight"></i><span>Create Post</span></a>
                </div>
                <div class="card-body p-0 mt-3 position-relative">
                    <figure class="avatar position-absolute ms-2 mt-1 top-5"><img src={user8} alt="image" class="shadow-sm rounded-circle w30" /></figure>
                    <textarea name="message" class="h100 bor-0 w-100 rounded-xxl p-2 ps-5 font-xssss text-grey-500 fw-500 border-light-md theme-dark-bg" cols="30" rows="10" placeholder="What's on your mind?"></textarea>
                </div>
                <div class="card-body d-flex p-0 mt-0">
                    <a href="#" class="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 pe-4"><i class="font-md text-danger fa-solid fa-film me-2" style={{ color: '#e50202' }}></i><span class="d-none-xs">Live Video</span></a>
                    <a href="#" class="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 pe-4"><i class="font-md text-success fa-regular fa-image me-2"></i><span class="d-none-xs">Photo/Video</span></a>
                    <a href="#" class="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 pe-4"><i class="font-md text-warning fa-solid fa-camera me-2"></i><span class="d-none-xs">Feeling/Activity</span></a>
                    <a style={{ fontSize: '12px' }} href="#" class="ms-auto" id="dropdownMenu4" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-ellipsis text-grey-900 btn-round-md bg-greylight font-xss"></i></a>
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
            </div>
        </div>
    )
}

export default CreatePost