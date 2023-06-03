import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Loading/Loading';

const MyOrders = () => {

    // const [bookings, setBookings] = useState([]);
    const { loading } = useContext(AuthContext)

    const { user } = useContext(AuthContext);


    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch(`https://used-products-resale-server-alpha.vercel.app/bookings?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });



    // useEffect(() => {
    //     fetch(`https://used-products-resale-server-alpha.vercel.app/bookings?email=${user?.email}`, {
    //         // headers: {
    //         //     authorization: `bearer ${localStorage.getItem('accessToken')}`
    //         // }
    //     })
    //         .then(res => res.json())
    //         .then(data => setBookings(data))
    // }, [user?.email])


    const handleRemove = id => {
        fetch(`https://used-products-resale-server-alpha.vercel.app/bookings/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
            })
    };

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl my-5'>My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className='text-blue-600 font-bold'>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings?.length &&
                            bookings?.map((booking, i) =>
                                <tr>
                                    <th>{i + 1}</th>
                                    <th>
                                        <div className="avatar">
                                            <div className="w-24 rounded-xl">
                                                <img src={booking?.image} alt="" />
                                            </div>
                                        </div>
                                    </th>
                                    <td>{booking?.itemName}</td>
                                    <td>Tk. {booking?.price}</td>
                                    <td>
                                        {
                                            booking?.price && !booking.paid &&
                                            <Link to={`/dashboard/payment/${booking?._id}`}><button className='btn btn-primary btn-sm'>Pay</button></Link>
                                        }
                                        {
                                            booking?.price && booking?.paid && <span className='font-semibold text-green-500'>Paid</span>
                                        }

                                    </td>
                                    <td>{!booking?.paid ? <button onClick={() => handleRemove(booking?._id)} className='btn btn-primary btn-sm'>Remove</button> : <p className='text-success'>Ordered confirmed</p>}</td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;