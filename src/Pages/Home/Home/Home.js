import React from 'react';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Priorities from '../Priorities/Priorities';

const Home = () => {
    return (
        <div> 
           <Banner></Banner>
           <Reviews></Reviews>
           <Services></Services>
           <Priorities></Priorities>
           <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;