import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import Category from './Category';
import ItemCategory from './ItemCategory';

const CategoryDetail = () => {

    const products = useLoaderData()
    console.log(products)

    // const [data, setData] = useState([]);

    // useEffect(() => { 
    //     fetch(`http://localhost:5000/itemName/${id}}`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // },[id])

    return (
        <div>
            <h2 className='text-xl pl-14 my-10 text-center'>Details</h2>
           <div className='gap-10 px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:px-44'>
           {
                products?.map(product => <ItemCategory
                key={product?._id}
                product={product}
                >
                </ItemCategory>)
            }
           </div>

           {
            <BookingModal>
                
            </BookingModal>
           }
        </div>
    );
};

export default CategoryDetail;