import React from "react";
import img from "../../../assets/portrait.png";
const Banner = () => {
  return (
    <div className="hero bg-white">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse pb-0">
        <div className="md:w-1/2 w-full">
          <img src={img} className="w-full" />
        </div>
        <div className="md:w-1/2 w-full">
          <h1 className="text-5xl font-bold">
            Your biggest refund possible, <br></br>guaranteed.
          </h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur maiores eius porro debitis ratione ducimus perspiciatis
            accusantium dolore iusto amet repellendus, aspernatur quia adipisci
            corporis. Alias dolor magnam deleniti tempore!
          </p>
          <button className="btn btn-lg rounded-full p-8 px-12 pb-12 btn-primary normal-case m-0 md:mr-8 text-white">
            Contact us now
          </button>
          <button className="btn bg-white btn-lg rounded-full p-8 px-12 pb-12 btn-primary normal-case  text-primary hover:text-white">
            Contact us now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
