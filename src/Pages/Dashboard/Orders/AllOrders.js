import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Loading from '../../Loading/Loading';

const AllOrders = () => {


    const { loading } = useContext(AuthContext)

    const { user } = useContext(AuthContext);


    const { data: allBookings = [], refetch } = useQuery({
        queryKey: ['allBookings'],
        queryFn: async () => {
            const res = await fetch(`https://used-products-resale-server-alpha.vercel.app/allBookings`);
            const data = await res.json();
            return data;
        }
    });

    const handleOrderRemove = id => {
        fetch(`https://used-products-resale-server-alpha.vercel.app/bookings/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Order deleted')
                refetch();
            })
    };

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl my-5'>All Orders: {allBookings?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className='text-blue-600 font-bold'>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Phone</th>
                            <th>Payment</th>
                            <th>order</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allBookings?.length &&
                            allBookings?.map((booking, i) =>
                                <tr>
                                    <th>{i + 1}</th>
                                    <th>
                                        <div className="avatar">
                                            <div className="w-16 rounded-sm">
                                                <img src={booking?.image} alt="" />
                                            </div>
                                        </div>
                                    </th>
                                    <td>{booking?.itemName}</td>
                                    <td>Tk. {booking?.price}</td>
                                    <td className='text-white'>{booking?.phone}</td>
                                    <td>
                                        {
                                            booking?.price && !booking.paid &&
                                            <button className='btn btn-outline btn-xs'>Pending</button>
                                        }
                                        {
                                            booking?.price && booking?.paid && <span className='font-semibold text-green-500'>Paid</span>
                                        }

                                    </td>
                                    <td>{!booking?.paid ? <button className='btn btn-outline btn-xs'>Pending</button> : <p className='text-success'>Ordered confirmed</p>}</td>
                                    <td>
                                        <button onClick={() => handleOrderRemove(booking?._id)} className='btn rounded-sm btn-primary btn-xs'>Remove</button>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;