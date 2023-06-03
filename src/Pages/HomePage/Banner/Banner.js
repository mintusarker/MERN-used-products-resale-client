import React from 'react';
import bannerpic from '../../../assets/bannerpic.jpg'

const Banner = () => {
    return (
        <div className="hero mx-auto my-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='text-center'>
                    <h1 className="text-4xl mb-3 text-red-600 font-bold">WELCOME</h1>
                    <h1 className="text-3xl font-bold">All Kind of Laptop Available Here</h1>
                    <p className="py-6">All kind of used personal device are available here that you want , <br /> may be you find here as your choose.</p>
                </div>
                <img style={{ width: '900px', height: '350px' }} src={bannerpic} alt='' className="lg:w-1/2 rounded-lg shadow-2xl" />
            </div>
        </div>
    );
};

export default Banner;