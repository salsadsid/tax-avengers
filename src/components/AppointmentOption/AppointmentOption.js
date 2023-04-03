import React from 'react';
import SecondaryButton from '../SecondaryButton/SecondaryButton';

const AppointmentOption = ({option ,setAppointmentOption}) => {
    const {name,slots}= option
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
  <div className="card-body text-center">
    <h2 className="text-xl font-semibold text-primary text-center">{name}</h2>
    <p>{slots?.length ? slots[0] : "No slot available"}</p>
    <p>{slots?.length ? slots?.length : "No" }{" Space Available"}</p>
    <div className="card-actions justify-center">
    <label htmlFor="appointment-booking" onClick={()=>setAppointmentOption(option)} className="btn rounded-full w-full mt-12 btn-primary normal-case m-0 text-lg py-3 shadow-sm pb-10 text-white">
    Book Appointment
          </label> 

    </div>
  </div>
</div>
    );
};

export default AppointmentOption;