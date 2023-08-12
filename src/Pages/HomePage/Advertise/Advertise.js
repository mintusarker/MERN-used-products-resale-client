import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const Advertise = () => {

    const { user } = useContext(AuthContext)

    const { data: advertised = [], isLoading, refetch } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch(`https://used-products-resale-server-alpha.vercel.app/advertised?email=${user?.email}`);
            const data = await res.json();
            console.log(data);
            return data
        }
    })

    const handleDeleteProduct = id => {
        fetch(`https://used-products-resale-server-alpha.vercel.app/advertise/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Product deleted successfully');
                }
            })
    };

    return (
        <div className='my-10 px-10'>
            <h2 className='text-2xl pl-4 my-5'>Advertise Item : {advertised?.length}</h2>
            <div className='gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
                {
                    advertised.map(advertise => <div className="border-2 border-teal-600 shadow-sm shadow-slate-100">
                        <figure><img className='h-40 w-full' src={advertise?.image} alt="Shoes" /></figure>
                        <div className="p-2">
                            <h2 className="card-title">{advertise?.name}</h2>
                            <p>Description: {advertise?.detail}</p>
                            <p>Price: {advertise?.price} Tk.</p>
                            <p>Used: {advertise?.use}</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleDeleteProduct(advertise?._id)} className="btn btn-sm btn-primary">Remove</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Advertise;