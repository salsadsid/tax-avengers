import React from "react";
import img from "../../assets/portrait.png";
import { FiArrowRight } from "react-icons/fi";
import { TiTick } from "react-icons/ti";

const Service = () => {
  return (
    <div className="rounded-3xl relative bg-white  overflow-hidden">
      <div className="w-full">
        <img
          alt="Developer"
          src={img}
          class="absolute bottom-0 right-0 h-1/2 md:h-3/4 transition-opacity"
        />
      </div>

      <div class="relative p-4 sm:p-6 lg:p-8">
        <p class="text-3xl font-medium tracking-widest hover:text-primary cursor-pointer flex items-center">
          File Your Tax <FiArrowRight className="ml-4" />
        </p>

        <p class="text-md sm:text-lg my-4">Lorem ipsum dolor sit amet </p>
        <p class="text-lg font-medium flex items-center my-2">
          <span className="text-primary">
            <TiTick className="mx-4" />
          </span>{" "}
          Step-by-step guidance
        </p>
        <p class="text-lg font-medium flex items-center">
          <span className="text-primary">
            <TiTick className="mx-4" />
          </span>{" "}
          Step-by-step guidance
        </p>
        <p class="text-lg font-medium flex items-center mt-2">
          <span className="text-primary">
            <TiTick className="mx-4" />
          </span>{" "}
          Step-by-step guidance
        </p>
        <p className="mt-28 text-sm">starting at</p>
        <p className="text-4xl font-bold">$80</p>
        <p className="text-sm">+ Additional State Charges</p>
        <button className="btn rounded-full w-full mt-12 btn-primary normal-case m-0 md:mr-8 text-lg py-3 shadow-sm pb-10 text-white">
            Contact us now
          </button>
      </div>
    </div>
  );
};

export default Service;
