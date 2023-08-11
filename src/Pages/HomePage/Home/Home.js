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
import RunningOffer from '../extra/RunningOffer';
import UpCategory from '../extra/UpCategory';

const Home = () => {
    return (
        <div>
           <UpCategory></UpCategory>
           <Banner></Banner>
           <ItemAdvertise></ItemAdvertise>
           <Category></Category>
           <RunningOffer></RunningOffer>
           <NewArrival></NewArrival>
           <Services></Services>
           <Review></Review>
           <About></About>
           <Contact></Contact>
        </div>
    );
};

export default Home;