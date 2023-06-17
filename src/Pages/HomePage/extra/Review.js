import React from 'react';
import p1 from '../../../assets/p1.avif'
import p2 from '../../../assets/p2.avif'
import p3 from '../../../assets/p3.jpg'
import p4 from '../../../assets/p4.jpg'

const Review = () => {

    const opinion = [
        {
            id: 1,
            name: 'Alex Herry',
            review: 'Try to get out more and get to know them. They are too good and honest, I fell very comfort to do buying as well as their service!',
            img: p1,
            location: 'Dhaka'
        },
        {
            id: 2,
            name: 'Ander sonia',
            review: 'Their loyal customer base is outstanding. Customers often ask for you by name and you have a lot of repeat customers as a result. Great!',
            img: p2,
            location: 'Dhaka'
        },
        {
            id: 3,
            name: 'Jhon Abham',
            review: 'They are really good at following up with the client so as to ensure that they are never left in the dark. Keep it up!',
            img: p3,
            location: 'Dhaka'
        },
        {
            id: 4,
            name: 'Katlin Tosibia',
            review: 'They are really good at focusing on what customers need and require. You have a real instinct to understand our customers. Good work!',
            img: p4,
            location: 'Dhaka'
        },
    ]
    return (
        <div className='px-16  py-14'>
            <p className='text-3xl font-semibold font-serif py-7'>Some Review</p>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6'>
                {opinion.length &&
                    opinion.map(opi =>
                        <div key={opi?.id} className="card shadow-xl">
                            <div className="card-body">
                                <cite className=''>{opi?.review}</cite>
                                <div className="flex items-center mt-6 gap-5">
                                    <div className="avatar">
                                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={opi?.img} alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className='text-lg'>{opi?.name}</h5>
                                        <p>{opi?.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        // <div className='border shadow-md shadow-slate-400 p-2 rounded-lg' key={opi?.id}>
                        //     <p style={{ lineHeight: '70px' }} className='text-center border-2 m-3 border-red-500 w-20 h-20 mx-auto rounded-full font-medium'>{opi?.name}</p>
                        //     <cite className='text-justify'>{opi?.review}</cite>

                        // </div>

                    )
                }
            </div>
        </div>
    );
};

export default Review;