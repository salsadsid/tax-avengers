import React from 'react';
import img from '../../../assets/confused-woman-working-laptop-cartoon-icon-illustration-people-technology-icon-concept_138676-2125-removebg-preview.png'
const AppointmentHeader = () => {
    return (
        <div className='bg-success w-full'>
            <div className='flex justify-center md:flex-nowrap flex-wrap items-center mx-auto lg:max-w-7xl'>
            <img src={img} alt="" className='w-36 my-2'/>
            <p className='text-3xl mx-4 font-semibold text-center md:text-left my-4'>Don’t get Confused. Book an appointment for more detail and pay less with Tax Avengers.</p>
            <p className='text-lg mx-4 my-4 text-center md:text-left'>Choose your filing option and upload last year’s return to start saving.</p>
            </div>
        </div>
    );
};

export default AppointmentHeader;