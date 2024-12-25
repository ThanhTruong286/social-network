import "../assets/scss/components/SuggestPage.scss";
import suggestPage1 from "../assets/images/suggest-page-1.jpg"
import suggestPage2 from "../assets/images/suggest-page-2.jpg"

const SuggestPage = () => {
    return (
        <div className='suggest-page'>
            <div class="card w-100 shadow-xss rounded-xxl border-0 mb-3 mt-3">
                <div class="title-block card-body d-flex align-items-center p-4">
                    <h4 class="fw-700 mb-0 font-xssss text-grey-900">Suggest Pages</h4>
                    <a href="default-group.html" class="fw-600 ms-auto font-xssss text-primary">See all</a>
                </div>
                <div class="card-body d-flex pt-4 ps-4 pe-4 pb-0 overflow-hidden border-top-xs bor-0">
                    <img src={suggestPage1} alt="img" class="img-fluid rounded-xxl mb-2" />
                </div>
                <div class="card-body d-flex align-items-center pt-0 ps-4 pe-4 pb-4">
                    <a href="#" class="p-2 lh-28 w-100 bg-grey text-grey-800 text-center font-xssss fw-700 rounded-xl"><i class="fa-solid fa-arrow-up-right-from-square"></i> Like Page</a>
                </div>

                <div class="card-body d-flex pt-0 ps-4 pe-4 pb-0 overflow-hidden">
                    <img src={suggestPage2} alt="img" class="img-fluid rounded-xxl mb-2 bg-lightblue" />
                </div>
                <div class="card-body d-flex align-items-center pt-0 ps-4 pe-4 pb-4">
                    <a href="#" class="p-2 lh-28 w-100 bg-grey text-grey-800 text-center font-xssss fw-700 rounded-xl"><i class="fa-solid fa-arrow-up-right-from-square"></i> Like Page</a>
                </div>


            </div>
        </div>
    )
}

export default SuggestPage