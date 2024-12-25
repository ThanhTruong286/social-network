import "../assets/scss/components/SuggestGroup.scss";
import group from "../assets/images/e-2.jpg";
import user1 from "../assets/images/user-6.png";
import user2 from "../assets/images/user-7.png";
import user3 from "../assets/images/user-8.png";
import user4 from "../assets/images/user-3.png";

const SuggestGroup = () => {
    return (
        <div className='suggest-group'>
            <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3 mt-3">
                <div className="card-body d-flex align-items-center p-4">
                    <h4 className="fw-700 mb-0 font-xssss text-grey-900">Suggest Group</h4>
                    <a href="default-group.html" className="fw-600 ms-auto font-xssss text-primary">See all</a>
                </div>
                <div className="card-body d-flex pt-4 ps-4 pe-4 pb-0 overflow-hidden border-top-xs bor-0">
                    <img src={group} alt="Suggested Group" className="img-fluid rounded-xxl mb-2" />
                </div>
                <div className="card-body dd-block pt-0 ps-4 pe-4 pb-4">
                    <ul className="memberlist mt-1 mb-2 ms-0 d-block p-0">
                        <li className="w20">
                            <a href="#">
                                <img src={user1} alt="User" className="w35 d-inline-block" style={{ opacity: 1 }} />
                            </a>
                        </li>
                        <li className="w20">
                            <a href="#">
                                <img src={user2} alt="User" className="w35 d-inline-block" style={{ opacity: 1 }} />
                            </a>
                        </li>
                        <li className="w20">
                            <a href="#">
                                <img src={user3} alt="User" className="w35 d-inline-block" style={{ opacity: 1 }} />
                            </a>
                        </li>
                        <li className="w20">
                            <a href="#">
                                <img src={user4} alt="User" className="w35 d-inline-block" style={{ opacity: 1 }} />
                            </a>
                        </li>
                        <li className="last-member">
                            <a href="#" className="bg-greylight fw-600 text-grey-500 font-xssss w35 ls-3 text-center" style={{ height: '35px', lineHeight: '35px' }}>+2</a>
                        </li>
                        <li className="ps-3 w-auto ms-1">
                            <a href="#" className="fw-600 text-grey-500 font-xssss">Member apply</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SuggestGroup;
