import React from 'react';
import SecondaryButton from '../SecondaryButton/SecondaryButton';

const AppointmentOption = ({option ,setAppointmentOption}) => {
    const {name,slots,des,price}= option
    return (
        <div className="card w-96 bg-info shadow-xl mx-auto">
  <div className="card-body text-center">
    <h2 className="text-2xl font-bold text-primary text-center">{name}</h2>
    <p>{des}</p>
    <p className='font-medium'>{slots?.length ? slots[0] : "No slot available"}</p>
    <p className='font-medium'>{slots?.length ? slots?.length : "No" }{" Space(s) Available"}</p>
    <p className='font-medium'>Price: ${price}</p>
    <div className="card-actions justify-center">
    <label htmlFor="appointment-booking" onClick={()=>setAppointmentOption(option)} className="btn rounded-full w-full btn-primary normal-case m-0 text-lg py-3 shadow-sm pb-10 text-white">
    Book Appointment
          </label> 

    </div>
  </div>
</div>
    );
};

export default AppointmentOption;