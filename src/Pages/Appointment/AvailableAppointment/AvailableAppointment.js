import { format } from 'date-fns';
import React, {useState } from 'react';
import AppointmentOption from '../../../components/AppointmentOption/AppointmentOption';
import BookingModal from '../../../components/BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';

const AvailableAppointment = ({selectedDate}) => {
    const [appointmentOption,setAppointmentOption]=useState(null)

    //using fetch only
    // const{data:appointmentOptions=[]}=useQuery({
    //     queryKey:['appointmentOptions'],
    //     queryFn:()=>
    //         fetch('http://localhost:5000/appointmentOption')
    //         .then(res=>res.json())
    // })

    const{data:appointmentOptions=[] ,status}=useQuery({
        queryKey:['appointmentOptions'],
        queryFn:async()=>{
            const res = await fetch('http://localhost:5000/appointmentOption')
            const data = res.json()
            return data
        }
    })

    console.log(status)
    return (
        <div>
            <p className='text-2xl font-bold my-10 text-center'>Available Appointment on : {format(selectedDate,"PP")} </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16'>
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