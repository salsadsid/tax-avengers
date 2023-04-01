import React from "react";
import Service from "../../../components/Service/Service";
import img from "../../../assets/discussion-group-online-chat-clip-art-png-favpng-qPDyd2UdGZ5xkDFC8cFVbnU0m-removebg-preview.png";
import img2 from "../../../assets/pngtree-question-mark-in-pop-art-style-png-image_8947385.png";

const Services = () => {
  return (
    <div className="bg-primary">
      <div className="flex flex-col items-center justify-center py-32 px-4">
        <h1 className="text-4xl font-bold text-white text-center my-4">
          File the way you want with Tax Avengers
        </h1>
        <p className="text-xl text-white my-4 md:w-1/2 w-full text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit iure
          dolorum quas, beatae velit optio molestias magni provident asperiores
          tenetur!
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mx-10">
        <Service></Service>
        <Service></Service>
      </div>
      <div className="flex flex-col items-center justify-center md:py-20 py-12 px-4 mt-36 relative">
        <div>
          <img src={img} className="md:absolute relative left-0 w-40" alt="" />
        </div>
        <p className="text-xl text-white my-4 md:w-1/2 w-full text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <h1 className="text-4xl font-bold text-white text-center my-4">
          File the way you want with Tax Avengers
        </h1>
        <button className="btn bg-white border-0 rounded-full text-lg px-8 py-3 pb-10 normal-case hover:bg-black text-black hover:text-white mt-12 shadow">
          Help me choose
        </button>
        <div>
          <img
            src={img2}
            className="md:absolute relative bottom-0 right-0 w-40"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
