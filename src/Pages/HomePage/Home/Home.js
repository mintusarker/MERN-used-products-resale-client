import React from 'react';
import Category from '../../Category/Category';
import MyProducts from '../../Dashboard/MyProducts/MyProducts';
import Advertise from '../Advertise/Advertise';
import ItemAdvertise from '../Advertise/ItemAdvertise';
import Banner from '../Banner/Banner';
import NewArrival from '../ExtraSection/NewArrival';
import Contact from '../extra/Contact';
import About from '../extra/About';
import Review from '../extra/Review';
import Services from '../extra/Services';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <ItemAdvertise></ItemAdvertise>
           <Category></Category>
           <NewArrival></NewArrival>
           <Review></Review>
           <Services></Services>
           <About></About>
           <Contact></Contact>
        </div>
    );
};

export default Home;