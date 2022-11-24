import React from 'react';
import laptop1 from '../../../assets/laptop1.webp';
import laptop2 from '../../../assets/laptop2.webp';
import laptop3 from '../../../assets/laptop3.jpeg';
import laptop4 from '../../../assets/laptop4.jpg';
import NewArrivalProducts from './NewArrivalProducts';


const NewArrival = () => {

    const newItem = [
        {
            id: 1,
            name: 'Lenovo',
            version: 'core i5 , 11gen',
            image: laptop1,
            price: 'Announce latter'
        },
        {
            id: 2,
            name: 'Hp',
            version: 'core i5 , 12gen ',
            image: laptop2,
            price: 'Announce latter'
        },
        {
            id: 3,
            name: 'Msi',
            version: 'core i5 , 11gen',
            image: laptop3,
            price: 'Announce latter'
        },
        {
            id: 4,
            name: 'Asus',
            version: 'core i5, 12gen',
            image: laptop4,
            price: 'Announce latter'
        }
    ]
    return (
        <div>
            <h2 className='text-2xl text-center mt-10 text-blue-500'>New some upcoming  products are bellow</h2>
            <div className='gap-6 my-10 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    newItem.map(item => <NewArrivalProducts
                        key={item.id}
                        item={item}
                    >
                        {item.length}
                    </NewArrivalProducts>)
                }
            </div>

        </div>
    );
};

export default NewArrival;