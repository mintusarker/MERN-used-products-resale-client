import React from 'react';

const Review = () => {

    const opinion = [
        {
            id: 1,
            name: 'Alex',
            review: 'Try to get out more and get to know them. They are too good and honest, I fell very comfort to do buying as well as their service'
        },
        {
            id: 2,
            name: 'Anderson',
            review: 'Their loyal customer base is outstanding. Customers often ask for you by name and you have a lot of repeat customers as a result. Great job!'
        },
        {
            id: 3,
            name: 'katlin',
            review: 'They are really good at following up with the client so as to ensure that they are never left in the dark. Keep it up!'
        },
        {
            id: 4,
            name: 'Jhon',
            review: 'They are really good at focusing on what customers need and require. You have a real instinct to understand our customers. Good work!'
        },
    ]
    return (
        <div className='px-16  py-14'>
            <p className='text-3xl font-semibold font-serif py-7'>Some Review</p>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6'>
                {opinion.length &&
                    opinion.map(opi => <div className='border shadow-md shadow-slate-400 p-2 rounded-lg' key={opi?.id}>
                        <p style={{ lineHeight: '70px' }} className='text-center border-2 m-3 border-red-500 w-20 h-20 mx-auto rounded-full font-medium'>{opi?.name}</p>
                        <cite className='text-justify'>{opi?.review}</cite>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Review;