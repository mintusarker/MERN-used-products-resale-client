import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Loading/Loading';

const MyOrders = () => {

    const [bookings, setBookings] = useState([]);
    const { loading } = useContext(AuthContext)

    const { user } = useContext(AuthContext);


    useEffect(() => {
        fetch(`https://used-products-resale-server-alpha.vercel.app/bookings?email=${user?.email}`, {
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [user?.email])


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
                                    <td>{booking?.price}</td>
                                    <td>
                                        {
                                            booking?.price && !booking.paid &&
                                            <Link to={`/dashboard/payment/${booking?._id}`}><button className='btn btn-primary btn-sm'>Pay</button></Link>
                                        }
                                        {
                                            booking?.price && booking?.paid && <span className='font-semibold text-green-500'>Paid</span>
                                        }

                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;