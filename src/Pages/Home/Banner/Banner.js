import React from "react";
import img from "../../../assets/portrait.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
const Banner = () => {
  return (
    <div className="hero bg-white">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse pb-0">
        <div className="md:w-1/2 w-full">
          <img src={img} className="w-full"/>
        </div>
        <div className="md:w-1/2 w-full">
          <h1 className="text-5xl font-bold md:mt-32 mt-24">
            Your biggest refund possible, <br></br>guaranteed.
          </h1>
          <p className="pt-8 md:pb-20 pb-12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur maiores eius porro debitis ratione ducimus perspiciatis
            accusantium dolore iusto amet repellendus, aspernatur quia adipisci
            corporis. Alias dolor magnam deleniti tempore!
          </p>
          <div className="">
          <PrimaryButton>Contact us now</PrimaryButton>
          <button className="btn bg-white btn-md md:btn-lg rounded-full md:p-8 md:px-12 md:pb-12 btn-primary normal-case  text-primary hover:text-white">
            Contact us now
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
