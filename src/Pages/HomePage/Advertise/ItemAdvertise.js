import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const ItemAdvertise = () => {

    const { user } = useContext(AuthContext)

    const { data: advertised = [], isLoading, refetch } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch('https://used-products-resale-server-alpha.vercel.app/advertise');
            const data = await res.json();
            return data
        }
    })

    // const handleDeleteProduct = id => {
    //     fetch(https:https://used-products-resale-server-alpha.vercel.app/advertise/${id}`, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data.deletedCount > 0) {
    //                 refetch();
    //                 toast.success('Product deleted successfully');
    //             }
    //         })
    // };

    return (
        <div className='my-10 px-10'>
            <h2 className='text-2xl mb-10 text-blue-500 text-center'>Advertisement product</h2>
            <div className='gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    advertised.map(advertise => <div className="card border-2 border-teal-600 p-5 shadow-md shadow-slate-100">
                        <figure><img className='h-40 w-60' src={advertise?.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{advertise?.name}</h2>
                            <p>Description: {advertise?.detail}</p>
                            <p>Price: {advertise?.price} Tk.</p>
                            <p>Used: {advertise?.use}</p>
                            {/* <div className="card-actions justify-end">
                                <button onClick={() => handleDeleteProduct(advertise?._id)} className="btn btn-sm btn-primary">Remove</button>
                            </div> */}
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default ItemAdvertise;