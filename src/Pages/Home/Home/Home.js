import React from 'react';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div> 
           <Banner></Banner>
           <Reviews></Reviews>
           <Services></Services>
        </div>
    );
};

export default Home;