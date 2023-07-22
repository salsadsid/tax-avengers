import React from 'react';
import { useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const error = useRouteError()

    return (
        <div className='flex-col justify-center items-center'>
            <p className='text-red-500 text-3xl'>Something Went Wrong !!!</p>
            <p className='text-red-500 text-xl'>{error.statusText || error.message}</p>
        </div>
    );
};

export default DisplayError;