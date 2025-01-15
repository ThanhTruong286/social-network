import GroupList from "../components/GroupList"

const ExploreGroup = () => {
    return (
        <div className='main-content right-chat-active'>
            <div className='middle-sidebar-bottom'>
                <div className="middle-sidebar-left pe-0">
                    <div className="group-list">
                        <div className="row">
                            <GroupList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreGroup