import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

console.log(stripePromise)


const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();


    if(navigation.state === "loading"){
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl'>Payment for {booking?.itemName} Laptop</h2>
            <h2 className='text-xl'>Please Pay {booking?.price}</h2>

            <div className='my-8 w-96'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;