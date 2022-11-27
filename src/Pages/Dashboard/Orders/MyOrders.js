import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Loading/Loading';

const MyOrders = () => {

    const { loading } = useContext(AuthContext)

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    if(loading){
        return <Loading></Loading>
    }
    
    return (
        <div>
            <h2 className='text-2xl'>My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, i) =>
                                <tr>
                                    <th>{i + 1}</th>
                                    <th> <img src={booking?.image_url} alt="" /> </th>
                                    <td>{booking?.itemName}</td>
                                    <td>{booking?.price}</td>
                                    <td>
                                        {
                                            booking?.price && !booking.paid &&
                                            <Link to={`/dashboard/payment/${booking._id}`}><button className='btn btn-primary btn-sm'>Pay</button></Link>
                                        }
                                        {
                                            booking?.price && booking.paid && <span className='font-semibold text-green-500'>Paid</span>
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