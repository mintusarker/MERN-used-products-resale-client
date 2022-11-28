import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Advertise = () => {

    const { data: advertised = [], isLoading, refetch } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertise');
            const data = await res.json();
            return data
        }
    })
    return (
        <div className='my-10'>
            <h2 className='text-2xl mb-10 text-blue-500 text-center'>Advertisement product</h2>
            <div className='gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    advertised.map(advertise => <div className="card bg-base-100 shadow-xl">
                        <figure><img className='h-40 w-60' src={advertise?.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{advertise?.name}</h2>
                            <p>Description: {advertise?.detail}</p>
                            <p>Price: {advertise?.price} Tk.</p>
                            <p>Description: {advertise?.detail}</p>
                            <p>Used: {advertise?.time}</p>
                            <p>Condition: {advertise?.condition}</p>
                            <p>Location: {advertise?.location}</p>
                            <p>Contact: {advertise?.phone}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-sm btn-primary">Remove</button>
                                <button className="btn btn-sm btn-primary">Book Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Advertise;