import React from 'react';
import "../assets/scss/pages/RegisterPage.scss";
import "../App.scss";

const RegisterPage = () => {
    return (
        <div class="register-container">
            <div class="left-section">
                <img alt="Illustration of two people shaking hands in an office setting" height="600" src="https://storage.googleapis.com/a1aa/image/pEm4BkfuqIQjPKt5FdfxBhh8D4BrtiouO8ThIX8puZDae04nA.jpg" width="600" />
            </div>
            <div class="right-section">
                <div class="register-form">
                    <h2>
                        Create your account
                    </h2>
                    <form>
                        <div class="mb-3">
                            <input class="form-control" id="name" placeholder="Your Name" type="text" />
                        </div>
                        <div class="mb-3">
                            <input class="form-control" id="email" placeholder="Your Email Address" type="email" />
                        </div>
                        <div class="mb-3">
                            <input class="form-control" id="password" placeholder="Password" type="password" />
                        </div>
                        <div class="mb-3">
                            <input class="form-control" id="confirmPassword" placeholder="Confirm Password" type="password" />
                        </div>

                        <div class="mb-3 form-check">
                            <input class="form-check-input" id="acceptTerm" type="checkbox" />
                            <label class="form-check-label" for="acceptTerm">
                                Accept Term and Conditions
                            </label>
                        </div>

                        <button class="btn btn-primary w-100" type="submit">
                            Register
                        </button>
                    </form>
                    <div class="register-link">
                        <p>
                            Already have account
                            <a className='ms-3' href="login">
                                Login
                            </a>
                        </p>
                    </div>
                    <div class="social-login">
                        <p class="text-center">
                            Or, Sign in with your social account
                        </p>
                        <button class="btn btn-google">
                            <i class="fa-brands fa-google me-2"></i>
                            Sign in with Google
                        </button>
                        <button class="btn btn-facebook">
                            <i class="fa-brands fa-facebook me-2"></i>
                            Sign in with Facebook
                        </button>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default RegisterPage;
