import React from 'react';
import about from '../../../assets/about11.png'
import about1 from '../../../assets/about22.jpg'

const About = () => {
    return (
        <div className='w-full px-16'>
            <div className='sm:flex-row md:flex lg:flex justify-center items-center gap-10 py-8'>
                <div className='lg:w-2/4 my-6 justify-center'>
                    <h2 className='text-3xl font-semibold font-serif py-3'>About Us</h2>
                    <img className='rounded-md w-full h-44' src={about1} alt="" />
                    <div className='flex items-center gap-4 font-semibold justify-center pt-6'>
                        <div><p style={{ lineHeight: '70px' }} className='w-20 h-20 rounded-full text-center border-4 border-red-600'>30000+</p>
                        </div>
                        <p>Seller & buyer are here</p>
                    </div>
                </div>
                <div className='w-full lg:-mt-10 py-10'>
                    <p className='text-xl font-semibold mb-5'>Most trusted online shop & service</p>
                    <cite className='text-lg'>
                        For 10 years, We have worked to help people for their e-device. We make ensure that our services is totally trusted. Our first priority is our client. Online shopping is a form of electronic commerce which allows consumers to directly buy goods or services from a seller over the Internet using a web browser or a mobile app. We are always concern to our service. 
                    </cite>
                </div>
            </div>
        </div>
    );
};

export default About;