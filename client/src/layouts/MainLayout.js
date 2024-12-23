import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <SideBar />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default MainLayout;
