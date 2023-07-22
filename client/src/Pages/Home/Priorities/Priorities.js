import React from 'react';
import img from '../../../assets/ezgif-3-13a933b439.jpg'
import PrioritiesCard from '../../../components/PrioritiesCard/PrioritiesCard';
const Priorities = () => {
    return (
      <section className='my-24'>
         <div className="flex flex-col items-center justify-center pt-16 pb-28 px-4">
            <img src={img}alt=''></img>
            <h1 className="text-5xl font-bold md:w-1/2 text-center my-4">
            Your tax prep comes with built-in reassurance.
        </h1>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mx-10">
        <PrioritiesCard></PrioritiesCard>
        <PrioritiesCard></PrioritiesCard>
        <PrioritiesCard></PrioritiesCard>
      </div>
      </section>
    );
};

export default Priorities;