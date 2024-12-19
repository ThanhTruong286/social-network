import React from 'react';
import LoginHeader from '../components/LoginHeader';

const AuthLayout = ({ children }) => {
    return (
        <>
            <LoginHeader />
            <main>{children}</main>
        </>
    );
};

export default AuthLayout;
