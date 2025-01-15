import "../assets/scss/components/SuggestPage.scss";
import suggestPage1 from "../assets/images/suggest-page-1.jpg"
import suggestPage2 from "../assets/images/suggest-page-2.jpg"

const SuggestPage = () => {
    return (
        <div className='suggest-page'>
            <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3 mt-3">
                <div className="title-block card-body d-flex align-items-center p-4">
                    <h4 className="fw-700 mb-0 font-xssss text-grey-900">Suggest Pages</h4>
                    <a href="default-group.html" className="fw-600 ms-auto font-xssss text-primary">See all</a>
                </div>
                <div className="card-body d-flex pt-4 ps-4 pe-4 pb-0 overflow-hidden border-top-xs bor-0">
                    <img src={suggestPage1} alt="img" className="img-fluid rounded-xxl mb-2" />
                </div>
                <div className="card-body d-flex align-items-center pt-0 ps-4 pe-4 pb-4">
                    <a href="#" className="p-2 lh-28 w-100 bg-grey text-grey-800 text-center font-xssss fw-700 rounded-xl"><i className="fa-solid fa-arrow-up-right-from-square"></i> Like Page</a>
                </div>

                <div className="card-body d-flex pt-0 ps-4 pe-4 pb-0 overflow-hidden">
                    <img src={suggestPage2} alt="img" className="img-fluid rounded-xxl mb-2 bg-lightblue" />
                </div>
                <div className="card-body d-flex align-items-center pt-0 ps-4 pe-4 pb-4">
                    <a href="#" className="p-2 lh-28 w-100 bg-grey text-grey-800 text-center font-xssss fw-700 rounded-xl"><i className="fa-solid fa-arrow-up-right-from-square"></i> Like Page</a>
                </div>


            </div>
        </div>
    )
}

export default SuggestPage