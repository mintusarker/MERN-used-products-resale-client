import React from 'react';

const RunningOffer = () => {

    const items = [
        {
            id: 1,
            name: 'Hp Laptop',
            Offer: '20 % off'
        },
        {
            id: 2,
            name: 'Asus Laptop',
            Offer: '25 % off'
        },
        {
            id: 3,
            name: 'Apple Laptop',
            Offer: '15 % off'
        },
        {
            id: 4,
            name: 'MSI Laptop',
            Offer: '18 % off'
        },
        {
            id: 5,
            name: 'Microsoft surface',
            Offer: '15 % off'
        },
        {
            id: 6,
            name: 'Avita Laptop',
            Offer: '20 % off'
        },
        {
            id: 7,
            name: 'Acer Laptop',
            Offer: '16 % off'
        },
        {
            id: 8,
            name: 'Acer Laptop',
            Offer: '15 % off'
        },
        {
            id: 9,
            name: 'Lenovo Laptop',
            Offer: '18 % off'
        },
    ]
    return (
        <div className='px-16 py-8'>
            <p className='text-2xl font-semibold font-serif py-7'>Running Offer</p>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-6'>
                {items.length &&
                    items.map(opi => <div className='border h-24 flex gap-8 justify-center items-center py-5 shadow-md shadow-slate-400 p-2 rounded-lg' key={opi?.id}>
                        <div className='text-xl capitalize'>{opi?.name}</div>
                        <div className='border-b-4 text-2xl font-semibold text-red-600'>{opi?.Offer}</div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default RunningOffer;