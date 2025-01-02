import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';

// Pages
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import UserPage from '../pages/UserPage';

const Router = () => {
    return (
        <Routes>
            {/* Routes với MainLayout */}
            <Route
                path="/"
                element={
                    <MainLayout>
                        <HomePage />
                    </MainLayout>
                }
            />
            <Route
                path='/user-page'
                element={
                    <MainLayout>
                        <UserPage />
                    </MainLayout>
                }
            />

            {/* Routes với AuthLayout */}
            <Route
                path="/login"
                element={
                    <AuthLayout>
                        <LoginPage />
                    </AuthLayout>
                }
            />
            <Route
                path="/register"
                element={
                    <AuthLayout>
                        <RegisterPage />
                    </AuthLayout>
                }
            />
            <Route
                path="/forgot-password"
                element={
                    <AuthLayout>
                        <ForgotPasswordPage />
                    </AuthLayout>
                }
            />
        </Routes>
    );
};

export default Router;
