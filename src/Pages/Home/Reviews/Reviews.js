import React from "react";
import { AiFillStar } from 'react-icons/ai';
import award from '../../../assets/award (1).svg';

const Reviews = () => {
  return (
    <div className="hero bg-white">
      <div className="flex md:flex-row w-full flex-col  items-center justify-center pb-0">
        <div className="w-full md:w-1/2 bg-accent md:p-16 px-4 py-12">
          <h1 className="text-4xl mb-2 font-bold">Expert Box, Inc</h1>
          <div className="flex"><AiFillStar className="text-2xl text-orange-300"></AiFillStar>
          <AiFillStar className="text-2xl text-orange-300"></AiFillStar>
          <AiFillStar className="text-2xl text-orange-300"></AiFillStar>
          <AiFillStar className="text-2xl text-orange-300"></AiFillStar>
          <AiFillStar className="text-2xl text-orange-300"></AiFillStar></div>
          <p className="py-6 text-2xl font-semibold">
            "Best tax related solutions overall"
          </p>
        <div className="flex items-center"> 
        <img src={award} alt="" className="w-10"/>
        <p className="ml-4 text-lg font-semibold">Bankrate, 2023</p>
        </div>
        </div>
        <div className="w-full md:w-1/2 bg-neutral md:p-16 px-4 py-12">
          <h1 className="text-4xl mb-2 font-bold">Accountants Hub</h1>
          <div className="flex"><AiFillStar className="text-2xl text-orange-300"></AiFillStar>
          <AiFillStar className="text-2xl text-orange-300"></AiFillStar>
          <AiFillStar className="text-2xl text-orange-300"></AiFillStar>
          <AiFillStar className="text-2xl text-orange-300"></AiFillStar>
          <AiFillStar className="text-2xl text-orange-300"></AiFillStar></div>
          <p className="py-6 text-2xl font-semibold">
            "They have best Chartered Accountants"
          </p>
        <div className="flex items-center"> 
        <img src={award} alt="" className="w-10"/>
        <p className="ml-4 text-lg font-semibold">NerdWallet, January 2023</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
