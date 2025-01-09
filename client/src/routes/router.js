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
import FriendListPage from '../pages/FriendListPage';
import BagdePage from '../pages/BagdePage';
import ExploreStoryPage from '../pages/ExploreStoryPage';
import ExploreVideoPost from '../pages/ExploreVideoPost';
import ExploreGroup from '../pages/ExploreGroup';

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

            <Route
                path='/friend-list'
                element={
                    <MainLayout>
                        <FriendListPage />
                    </MainLayout>
                }
            />

            <Route
                path='/bagde-list'
                element={
                    <MainLayout>
                        <BagdePage />
                    </MainLayout>
                }
            />

            <Route
                path='/explore-stories'
                element={
                    <MainLayout>
                        <ExploreStoryPage />
                    </MainLayout>
                }
            />

            <Route
                path='/explore-videos'
                element={
                    <MainLayout>
                        <ExploreVideoPost />
                    </MainLayout>
                }
            />

            <Route
                path='/explore-groups'
                element={
                    <MainLayout>
                        <ExploreGroup />
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
