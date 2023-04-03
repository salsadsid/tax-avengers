import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [selectedDate,setSelectedDate]=useState(new Date())
    return (
        <div>
            <AppointmentHeader></AppointmentHeader>
            <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}></AppointmentBanner>
            <AvailableAppointment selectedDate={selectedDate}></AvailableAppointment>
        </div>
    );
};

export default Appointment;