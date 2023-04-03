import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from '../../../components/AppointmentOption/AppointmentOption';
import BookingModal from '../../../components/BookingModal/BookingModal';

const AvailableAppointment = ({selectedDate}) => {
    const [appointmentOptions,setAppointmentOptions]=useState([])
    const [appointmentOption,setAppointmentOption]=useState(null)
    useEffect(()=>{
        fetch("appointmentOptions.json")
        .then(res=>res.json())
        .then(data=>setAppointmentOptions(data))
    },[])
    return (
        <div>
            <p className='text-2xl font-bold my-10 text-center'>Available Appointment on : {format(selectedDate,"PP")} </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-16'>
                {
                    appointmentOptions.map(option=><AppointmentOption option={option}
                    setAppointmentOption={setAppointmentOption}
                    ></AppointmentOption>)
                }
            </div>
            {appointmentOption && <BookingModal appointmentOption={appointmentOption} selectedDate={selectedDate}>

            </BookingModal>}
        </div>
    );
};

export default AvailableAppointment;