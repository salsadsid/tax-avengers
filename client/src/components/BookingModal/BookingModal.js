import React, { useContext } from "react";
import { format } from "date-fns";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";

const BookingModal = ({
  appointmentOption,
  selectedDate,
  setAppointmentOption,
  refetch
}) => {
  const { name, slots,price } = appointmentOption;
  const date = format(selectedDate, "PP");
  const { user } = useContext(AuthContext);
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const clientName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      service: name,
      client: clientName,
      slot,
      email,
      phone,
      price
    };
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setAppointmentOption(null);
          refetch();
          toast.success("Booking Confirmed", {
            style: {
              background: "#1FAA59",
              color:"#fff"
            },
            // Custom Icon
            icon: "👏",
            // Change colors of success/error/loading icon
            iconTheme: {
              primary: "#000",
              secondary: "#fff",
            },
          });
        }
        else{
          toast.error(data.message,{
            style: {
              background: "#BF3325",
              color:"#fff"
            },
          })
        }
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="appointment-booking"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="appointment-booking"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg text-primary text-center font-bold">{name}</h3>
          <form
            className="grid grid-cols-1 gap-6 mt-12"
            onSubmit={handleBooking}
          >
            <input
              type="text"
              defaultValue={date}
              disabled
              name="date"
              placeholder="Type here"
              className="input input-bordered input-primary rounded-full w-full"
            />
            <select
              name="slot"
              className="select select-primary w-full rounded-full"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered input-primary rounded-full w-full"
              defaultValue={user?.displayName}
              disabled={user?.displayName}
            />
            <input
              name="email"
              type="email"
              placeholder="Type here"
              className="input input-bordered input-primary rounded-full w-full"
              defaultValue={user?.email}
              disabled={user?.email}
            />
            <input
              name="phone"
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary rounded-full  w-full"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-md rounded-full btn-primary normal-case m-0 mr-8 text-white text-lg w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
