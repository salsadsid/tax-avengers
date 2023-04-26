import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import Loading from '../../../components/Loading/Loading';

const Payment = () => {
    const  booking =useLoaderData()
    const navigation= useNavigation()
    const {appointmentDate,service,slot,client,price}=booking
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)
    if( navigation.state === "loading"){
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className="text-3xl">Payment</h1>
            <p className='text-xl mt-5'> Hello {client},<br></br> please pay <span className='text-primary font-semibold'>{price}</span>  for service: <span className='text-primary font-semibold'>{service}</span>  on <span className='text-primary font-semibold'>{appointmentDate}</span> at <span className='text-primary font-semibold'>{slot}</span></p>
            <div className='w-96 mt-4'>
            <Elements stripe={stripePromise}>
                <CheckoutForm booking={booking}></CheckoutForm>
            </Elements>
            </div>
        </div>
    );
};

export default Payment;