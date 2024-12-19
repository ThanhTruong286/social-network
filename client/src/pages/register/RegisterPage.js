// src/pages/RegisterPage.js
import React from 'react';

const RegisterPage = () => {
    return (
        <div>
            <h2>Register Page</h2>
            <form>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;
