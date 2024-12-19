import React from 'react';
import "../assets/scss/pages/LoginPage.scss";
import "../App.scss";

const LoginPage = () => {
    return (
        <div class="login-container">
            <div class="left-section">
                <img alt="Illustration of two people shaking hands in an office setting" height="600" src="https://storage.googleapis.com/a1aa/image/pEm4BkfuqIQjPKt5FdfxBhh8D4BrtiouO8ThIX8puZDae04nA.jpg" width="600" />
            </div>
            <div class="right-section">
                <div class="login-form">
                    <h2>
                        Login into your account
                    </h2>
                    <form>
                        <div class="mb-3">
                            <input class="form-control" id="email" placeholder="Your Email Address" type="email" />
                        </div>
                        <div class="mb-3">
                            <input class="form-control" id="password" placeholder="Password" type="password" />
                        </div>

                        <div class="mb-3 form-check">
                            <input class="form-check-input" id="rememberMe" type="checkbox" />
                            <label class="form-check-label" for="rememberMe">
                                Remember me
                            </label>
                            <a class="forgot-password-link" href="#">
                                Forgot your Password?
                            </a>
                        </div>

                        <button class="btn btn-primary w-100" type="submit">
                            Login
                        </button>
                    </form>
                    <div class="register-link">
                        <p>
                            Dont have account
                            <a className='ms-3' href="#">
                                Register
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

export default LoginPage;
