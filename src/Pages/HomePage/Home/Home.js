import React from 'react';
import Category from '../../Category/Category';
import MyProducts from '../../Dashboard/MyProducts/MyProducts';
import Advertise from '../Advertise/Advertise';
import ItemAdvertise from '../Advertise/ItemAdvertise';
import Banner from '../Banner/Banner';
import NewArrival from '../ExtraSection/NewArrival';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <ItemAdvertise></ItemAdvertise>
           <Category></Category>
           <NewArrival></NewArrival>
        </div>
    );
};

export default Home;