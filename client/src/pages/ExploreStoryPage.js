import StoryList from "../components/StoryList";
import "../assets/scss/pages/ExploreStoryPage.scss";

const ExploreStoryPage = () => {
    return (
        <div className='main-content right-chat-active'>
            <div className='middle-sidebar-bottom'>
                <div class="middle-sidebar-left pe-0">
                    <div className="story-list">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="card shadow-xss w-100 d-block d-flex border-0 p-4 mb-3">
                                    <div class="card-body d-flex align-items-center p-0">
                                        <h2 class="fw-700 mb-0 mt-0 font-md text-grey-900">Stories</h2>
                                        <div class="search-form-2 ms-auto">
                                            <i class="fa-solid fa-magnifying-glass font-xss"></i>
                                            <input type="text" class="form-control text-grey-500 mb-0 bg-greylight theme-dark-bg border-0" placeholder="Search here." />
                                        </div>
                                        <a href="#" class="btn-round-md ms-2 bg-greylight theme-dark-bg rounded-3"><i class="fa-solid fa-filter font-xss text-grey-500"></i></a>
                                    </div>
                                </div>

                                <StoryList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreStoryPage