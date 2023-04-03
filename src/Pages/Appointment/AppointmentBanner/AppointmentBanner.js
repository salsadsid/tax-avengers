import React, { useState } from 'react';
import img from "../../../assets/wil-stewart-tB4-ftQ4zyI-unsplash.jpg";
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
const AppointmentBanner = (props) => {
    console.log(props)
    const {selectedDate,setSelectedDate} = props
    
    return (
        <div className="hero bg-info">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full p-12 ">
          <img src={img} className="h-full object-cover rounded-full"/>
        </div>
        <div className="w-full px-8 pb-10">
           <div className='md:my-28 my-12 mx-12 w-full'>
           <DayPicker
            mode='single'
            selected={selectedDate}
            onSelect={setSelectedDate}
            className='mt-12'
            > </DayPicker>
           </div>
       </div>
      </div>
    </div>
    );
};

export default AppointmentBanner;