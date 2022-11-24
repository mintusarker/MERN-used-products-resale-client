import React from 'react';
import bannerpic from '../../../assets/bannerpic.jpg'

const Banner = () => {
    return (
        <div className="hero mx-auto my-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <img src={bannerpic} alt='' className="lg:w-1/2 rounded-lg shadow-2xl" />
            </div>
        </div>
    );
};

export default Banner;