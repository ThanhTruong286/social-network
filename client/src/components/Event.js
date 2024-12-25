import "../assets/scss/components/Event.scss";

const Event = () => {
    return (
        <div className="event-list">
            <div class="card w-100 shadow-xss rounded-xxl border-0 mb-3">
                <div class="card-body d-flex align-items-center  p-4">
                    <h4 class="fw-700 mb-0 font-xssss text-grey-900">Event</h4>
                    <a href="default-event.html" class="fw-600 ms-auto font-xssss text-primary">See all</a>
                </div>
                <div class="card-body d-flex pt-0 ps-4 pe-4 pb-3 overflow-hidden">
                    <div class="bg-success me-2 p-3 rounded-xxl"><h4 class="fw-700 font-lg ls-3 lh-1 text-white mb-0"><span class="ls-1 d-block font-xsss text-white fw-600">FEB</span>22</h4></div>
                    <h4 class="fw-700 text-grey-900 font-xssss mt-2">Meeting with clients <span class="d-block font-xsssss fw-500 mt-1 lh-4 text-grey-500">41 madison ave, floor 24 new work, NY 10010</span> </h4>
                </div>

                <div class="card-body d-flex pt-0 ps-4 pe-4 pb-3 overflow-hidden">
                    <div class="bg-warning-custom me-2 p-3 rounded-xxl"><h4 class="fw-700 font-lg ls-3 lh-1 text-white mb-0"><span class="ls-1 d-block font-xsss text-white fw-600">APR</span>30</h4></div>
                    <h4 class="fw-700 text-grey-900 font-xssss mt-2">Developer Programe <span class="d-block font-xsssss fw-500 mt-1 lh-4 text-grey-500">41 madison ave, floor 24 new work, NY 10010</span> </h4>
                </div>

                <div class="card-body d-flex pt-0 ps-4 pe-4 pb-3 overflow-hidden">
                    <div class="bg-primary me-2 p-3 rounded-xxl"><h4 class="fw-700 font-lg ls-3 lh-1 text-white mb-0"><span class="ls-1 d-block font-xsss text-white fw-600">APR</span>23</h4></div>
                    <h4 class="fw-700 text-grey-900 font-xssss mt-2">Aniversary Event <span class="d-block font-xsssss fw-500 mt-1 lh-4 text-grey-500">41 madison ave, floor 24 new work, NY 10010</span> </h4>
                </div>

            </div>
        </div>
    )
}

export default Event