import "../assets/scss/components/FriendRequest.scss";
import avatar from "../assets/images/user-7.png";

const FriendRequest = () => {
    return (
        <div className='card w-100 shadow-xss rounded-xxl border-0 mb-3'>

            <div className="title-block card-body d-flex align-items-center p-4">
                <h4 className="title">
                    Friend Request
                </h4>
                <a href="#" className="ms-auto">See all</a>
            </div>

            <div className="card-body d-flex pt-4 ps-4 pe-4 pb-0 border-top-xs bor-0">
                <figure className="avatar me-3">
                    <img src={avatar} className="shadow-sm rounded-circle w45">
                    </img>
                </figure>
                <h4 className="fw-700 text-grey-900 font-xssss mt-1">Faker <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">12 mutual friends</span></h4>
            </div>

            <div className="card-body d-flex justify-content-center align-items-center pt-0 ps-4 pe-4 pb-4">
                <a
                    id="accept-friend-request"
                    className="lh-20 w-100 bg-primary-gradiant me-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl"
                >
                    Confirm
                </a>
                <a
                    id="delete-friend-request"
                    className="lh-20 w-100 bg-grey text-grey-800 text-center font-xssss fw-600 ls-1 rounded-xl"
                >
                    Delete
                </a>
            </div>






            <div className="card-body d-flex pt-4 ps-4 pe-4 pb-0 border-top-xs bor-0">
                <figure className="avatar me-3">
                    <img src={avatar} className="shadow-sm rounded-circle w45">
                    </img>
                </figure>
                <h4 className="fw-700 text-grey-900 font-xssss mt-1">Faker <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">12 mutual friends</span></h4>
            </div>

            <div className="card-body d-flex justify-content-center align-items-center pt-0 ps-4 pe-4 pb-4">
                <a
                    id="accept-friend-request"
                    className="lh-20 w-100 bg-primary-gradiant me-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl"
                >
                    Confirm
                </a>
                <a
                    id="delete-friend-request"
                    className="lh-20 w-100 bg-grey text-grey-800 text-center font-xssss fw-600 ls-1 rounded-xl"
                >
                    Delete
                </a>
            </div>

            <div className="card-body d-flex pt-4 ps-4 pe-4 pb-0 border-top-xs bor-0">
                <figure className="avatar me-3">
                    <img src={avatar} className="shadow-sm rounded-circle w45">
                    </img>
                </figure>
                <h4 className="fw-700 text-grey-900 font-xssss mt-1">Faker <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">12 mutual friends</span></h4>
            </div>

            <div className="card-body d-flex justify-content-center align-items-center pt-0 ps-4 pe-4 pb-4">
                <a
                    id="accept-friend-request"
                    className="lh-20 w-100 bg-primary-gradiant me-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl"
                >
                    Confirm
                </a>
                <a
                    id="delete-friend-request"
                    className="lh-20 w-100 bg-grey text-grey-800 text-center font-xssss fw-600 ls-1 rounded-xl"
                >
                    Delete
                </a>
            </div>

        </div>

    )
}

export default FriendRequest