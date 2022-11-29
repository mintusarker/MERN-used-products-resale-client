import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import UseSeller from '../Hooks/UseSeller';

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = UseSeller(user?.email)
    const location = useLocation();

    if (loading || isSellerLoading) {
        return <p className='text-center my-20'><button className="btn loading">loading...</button></p>
    }

    if (user && isSeller) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default SellerRoute;