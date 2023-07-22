import React from "react";
import img from "../../../assets/sebastian-herrmann-6jAq8MkbULo-unsplash.jpg";
import img2 from "../../../assets/jess-bailey-q10VITrVYUM-unsplash.jpg";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
const MakeAppointment = () => {
  return (
    <div className="hero mt-32">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full">
          <img src={img} className="h-full object-cover"/>
        </div>
        <div className="w-full bg-info px-8 pb-10">
          <h1 className="text-5xl md:w-3/4 font-bold md:mt-36 mt-24">
          Find tax help in your area. <br></br>
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-1">
        
          <button className="btn bg-primary border-2 border-primary hover:border-black rounded-full text-lg px-8 py-3 pb-10 normal-case hover:bg-black text-white hover:text-white mt-12 shadow">
          Make Appointment
        </button>
          <button className="btn bg-white border-2 border-black hover:border-black rounded-full text-lg px-8 py-3 pb-10 normal-case hover:bg-black text-black hover:text-white mt-12 shadow">
          Find an office
        </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
