import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyProducts = () => {

    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/products');
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });

    return (
        <div className='mt-10'>
            <h2 className='text-2xl pl-5 my-5'>My Products: {products?.length}</h2>

           <div className='gap-10 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
           {
                products.map(product => <div className="card card-compact border p-5 bg-base-100 shadow-xl">
                <figure><img className='h-40 w-52' src={product?.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{product?.name}</h2>
                  <p>Description: {product.detail}</p>
                  <p>price: {product?.price}</p>
                  <p>Description: {product?.detail}</p>
                  <p>Location: {product?.location}</p>
                  <p>Used: {product?.time}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-sm btn-primary">Delete</button>
                    <button className="btn btn-sm btn-primary">Advertise</button>
                  </div>
                </div>
              </div>)
            }
           </div>

        </div>
    );
};

export default MyProducts;