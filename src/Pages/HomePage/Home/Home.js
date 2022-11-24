import React from 'react';
import Category from '../../Category/Category';
import Banner from '../Banner/Banner';
import NewArrival from '../ExtraSection/NewArrival';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <NewArrival></NewArrival>
        </div>
    );
};

export default Home;