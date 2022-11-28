import React from 'react';
import Category from '../../Category/Category';
import MyProducts from '../../Dashboard/MyProducts/MyProducts';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import NewArrival from '../ExtraSection/NewArrival';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Advertise></Advertise>
           <Category></Category>
           <NewArrival></NewArrival>
        </div>
    );
};

export default Home;