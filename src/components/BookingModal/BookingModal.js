import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({appointmentOption,selectedDate}) => {
    const{name,slots}=appointmentOption
    const date = format(selectedDate,"PP")
    return (
        <div>
            <input type="checkbox" id="appointment-booking" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="appointment-booking" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg text-primary text-center font-bold">{name}</h3>
   <form className='grid grid-cols-1 gap-6 mt-12'>
   <input type="text" defaultValue={date} disabled placeholder="Type here" className="input input-bordered input-primary rounded-full w-full" />
   <select className="select select-primary w-full rounded-full">
  {
    slots.map(slot=><option value={slot}>{slot}</option>)
  }
</select>
   <input type="text" placeholder="Type here" className="input input-bordered input-primary rounded-full w-full" />
   <input type="text" placeholder="Type here" className="input input-bordered input-primary rounded-full w-full" />
   <input type="text" placeholder="Type here" className="input input-bordered input-primary rounded-full  w-full" />
   <input type="submit" value="Submit" className="btn btn-md rounded-full btn-primary normal-case m-0 mr-8 text-white text-lg w-full" />
   
   </form>
  </div>
</div>
        </div>
    );
};

export default BookingModal;