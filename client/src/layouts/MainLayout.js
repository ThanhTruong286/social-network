import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import RightChat from "../components/RightChat";
import ModalPopupChat from '../components/ModalPopupChat';

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <SideBar />
            <main>{children}</main>
            <RightChat />
            <ModalPopupChat />
            <Footer />
        </>
    );
};

export default MainLayout;
