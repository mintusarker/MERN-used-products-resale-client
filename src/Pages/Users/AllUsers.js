import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://used-products-resale-server-alpha.vercel.app/users')
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = id => {
        fetch(`https://used-products-resale-server-alpha.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin Successful');
                    refetch();
                }
            })
    };


    const handleDeleteProduct = id => {
        fetch(`https://used-products-resale-server-alpha.vercel.app/users/${id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Account deleted successfully`)
                }
            })
    };
    return (
        <div>
            <h2 className='text-2xl mt-5'>All Users</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Account Type</th>
                            <th>Make Admin</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users?.map((user, i) => <tr key={user?._id}>
                                <th>{i + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.option}</td>
                                <td>{user?.role !== 'admin' ? <button onClick={() => handleMakeAdmin(user?._id)} className='btn btn-sm btn-primary'>Make Admin</button> : <p className='btn btn-sm btn-success'>Admin</p>}</td>
                                <td>
                                    {user?.role !== 'admin' && <button onClick={() => handleDeleteProduct(user?._id)} className='btn btn-sm btn-warning'>Delete</button>}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
