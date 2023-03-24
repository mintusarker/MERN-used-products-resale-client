import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hooks/UseAdmin';
import UseBuyer from '../Hooks/UseBuyer';
import UseSeller from '../Hooks/UseSeller';
import Navbar from '../Pages/SharePage/Nabver/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = UseSeller(user?.email);
    const [isBuyer] = UseBuyer(user?.email);

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* outlet */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu mt-10 p-4 w-80 text-base-content">
                        {
                            isBuyer && <>
                                <li className='badge-primary'><Link to='/dashboard/orders'>My Orders</Link></li>
                            </>
                        }

                        {
                            isSeller && <>
                                <li className='badge-primary'><Link to='/dashboard/addproduct'>Add A Product</Link></li>
                                <li className='badge-primary my-5'><Link to='/dashboard/myproduct'>My Products</Link></li>
                                <li className='badge-primary'><Link to='/dashboard/advertise'>Advertise Item</Link></li>
                            </>
                        }

                        {
                            isAdmin && <>
                                <li className='badge-primary mt-5'><Link to='/dashboard/allusers'>All User</Link></li>
                                <li className='badge-primary my-5'><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                                <li className='badge-primary'><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                                <li className='badge-primary my-5'><Link to='/dashboard/reportitem'>Reported Item</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;