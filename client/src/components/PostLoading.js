import "../assets/scss/components/PostLoading.scss";

const PostLoading = () => {
    return (
        <div className="post-loading">
            <div className="card w-100 text-center shadow-xss rounded-xxl border-0 p-2 mb-3 mt-3">
                <div className="snippet mt-2 ms-auto me-auto" data-title=".dot-typing">
                    <div className="stage">
                        <div className="dot-typing">
                            <span></span> {/* Dấu chấm 1 */}
                            <span></span> {/* Dấu chấm 2 */}
                            <span></span> {/* Dấu chấm 3 */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostLoading;
