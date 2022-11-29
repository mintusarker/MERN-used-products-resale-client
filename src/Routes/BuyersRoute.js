import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import UseBuyer from '../Hooks/UseBuyer';

const BuyersRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    const [isBuyer, isBuyerLoading] = UseBuyer(user?.email)
    const location = useLocation();

    if (loading || isBuyerLoading) {
        return <p className='text-center my-20'><button className="btn loading">loading...</button></p>
    }

    if (user && isBuyer) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}

export default BuyersRoute;