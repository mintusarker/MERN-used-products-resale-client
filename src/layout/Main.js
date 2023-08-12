import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/SharePage/Footer/Footer';
import Navbar from '../Pages/SharePage/Nabver/Navbar';
import UpCategory from '../Pages/HomePage/extra/UpCategory';


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <UpCategory></UpCategory>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;