import React from 'react';
import "../assets/scss/pages/ForgotPasswordPage.scss";
import "../App.scss";

const ForgotPasswordPage = () => {
    return (
        <div className="forgot-password-container">
            <div className="left-section">
                <img alt="Illustration of two people shaking hands in an office setting" height="600" src="https://storage.googleapis.com/a1aa/image/pEm4BkfuqIQjPKt5FdfxBhh8D4BrtiouO8ThIX8puZDae04nA.jpg" width="600" />
            </div>
            <div className="right-section">
                <div className="forgot-password-form">
                    <h2>
                        Change your password
                    </h2>
                    <form>
                        <div className="mb-3">
                            <input className="form-control" id="oldPassword" placeholder="Old Password" type="password" />
                        </div>
                        <div className="mb-3">
                            <input className="form-control" id="newPassword" placeholder="New Password" type="password" />
                        </div>

                        <div className="mb-3 form-check">
                            <input className="form-check-input" id="acceptTerm" type="checkbox" />
                            <label className="form-check-label" for="acceptTerm">
                                Accept Term and Conditions
                            </label>
                        </div>

                        <button className="btn btn-primary w-100" type="submit">
                            Change Password
                        </button>
                    </form>
                    <div className="register-link">
                        <p>
                            Already have account
                            <a className='ms-3' href="login">
                                Login
                            </a>
                        </p>
                    </div>
                    <div className="social-login">
                        <p className="text-center">
                            Or, Sign in with your social account
                        </p>
                        <button className="btn btn-google">
                            <i className="fa-brands fa-google me-2"></i>
                            Sign in with Google
                        </button>
                        <button className="btn btn-facebook">
                            <i className="fa-brands fa-facebook me-2"></i>
                            Sign in with Facebook
                        </button>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default ForgotPasswordPage;
