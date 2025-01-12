import React from 'react';
import RegisterForm from '../components/RegisterForm';
import "../assets/scss/pages/RegisterPage.scss";
import "../App.scss";

const RegisterPage = () => {
    return (
        <div className="register-container">
            <div className="left-section">
                <img
                    alt="Illustration of two people shaking hands in an office setting"
                    height="600"
                    src="https://storage.googleapis.com/a1aa/image/pEm4BkfuqIQjPKt5FdfxBhh8D4BrtiouO8ThIX8puZDae04nA.jpg"
                    width="600"
                />
            </div>
            <div className="right-section">
                <div className="register-form">
                    <h2>Create your account</h2>
                    <RegisterForm /> {/* Sử dụng RegisterForm */}
                    <div className="register-link">
                        <p>
                            Already have account
                            <a className='ms-3' href="login">Login</a>
                        </p>
                    </div>
                    <div className="social-login">
                        <p className="text-center">Or, Sign in with your social account</p>
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
        </div>
    );
};

export default RegisterPage;
