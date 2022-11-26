import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/SharePage/Nabver/Navbar';

const DashboardLayout = () => {
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
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to='/dashboard/orders'>My Orders</Link></li>
                        <li><Link to='/dashboard/allusers'>All Sellers</Link></li>
                        <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                        <li><Link to='/dashboard/addproduct'>Add A Product</Link></li>
                        <li><Link to='/dashboard/manageproducts'>My Products</Link></li>
                        <li><Link to='/dashboard/reportitem'>Reported Item</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;