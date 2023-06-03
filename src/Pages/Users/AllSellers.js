import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../Loading/Loading';
import { FaCheck } from "react-icons/fa";

const AllSellers = () => {

    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://used-products-resale-server-alpha.vercel.app/user/sellers')
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteSellers = id => {
        fetch(`https://used-products-resale-server-alpha.vercel.app/user/sellers/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Sellers deleted successfully')
                }
            })
    };

    const handleStatusUpdate = id => {
        fetch(`https://used-products-resale-server-alpha.vercel.app/user/sellers/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ status: 'Verified' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Seller Verified successfully')
                }
            })

    }

    // if (isLoading) {
    //     return <Loading></Loading>
    // }


    return (
        <div>
            <h2 className='text-2xl my-5'>All sellers</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className='text-blue-600 font-bold'>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Account Type</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) => <tr>
                                <th>{i + 1}</th>
                                <td><div className='flex'>
                                    <div>
                                        {seller?.name}
                                    </div>
                                    <div>
                                        {seller?.status ? <FaCheck className='badge badge-md bg-blue-700 rounded-xl p-1 m-1'></FaCheck> : ''}
                                    </div>
                                </div></td>
                                <td>{seller?.email}</td>
                                <td>{seller?.option}</td>
                                <td><button onClick={() => handleStatusUpdate(seller?._id)} className='btn btn-secondary btn-sm'>{seller?.status ? seller?.status : 'Verify'}</button></td>
                                <td><button onClick={() => handleDeleteSellers(seller?._id)} className='btn btn-warning btn-sm'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;