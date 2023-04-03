import React from "react";
import img from "../../assets/portrait2.png";
import { FiArrowRight } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

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
        <p className="text-sm">+ Additional state charges</p>
        <SecondaryButton> Contact us now
          </SecondaryButton>
      </div>
    </div>
  );
};

export default Service;
