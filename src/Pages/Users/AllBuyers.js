import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../Loading/Loading';

const AllBuyers = () => {

    const { data: buyers = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/user/buyers')
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteBuyers = id => {
        fetch(`http://localhost:5000/user/buyers/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Buyers deleted successfully')
                }
            })
    };


    // if (isLoading) {
    //     return <Loading></Loading>
    // };


    return (
        <div>
            <h2 className='text-2xl my-5'>All Buyers</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className='text-blue-600 font-bold'>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Account Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{buyer?.name}</td>
                                <td>{buyer?.email}</td>
                                <td>{buyer?.option}</td>
                                <td><button onClick={() => handleDeleteBuyers(buyer?._id)} className='btn btn-warning btn-sm'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;