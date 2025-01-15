import React from 'react';
import "../assets/scss/pages/LoginPage.scss";
import "../App.scss";
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
    return (
        <div className="login-container">
            <div className="left-section">
                <img alt="Illustration of two people shaking hands in an office setting" height="600" src="https://storage.googleapis.com/a1aa/image/pEm4BkfuqIQjPKt5FdfxBhh8D4BrtiouO8ThIX8puZDae04nA.jpg" width="600" />
            </div>
            <div className="right-section">
                <div className="login-form">
                    <h2>
                        Login into your account
                    </h2>

                    <LoginForm />

                    <div className="register-link">
                        <p>
                            Dont have account
                            <a className='ms-3' href="register">
                                Register
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

export default LoginPage;
