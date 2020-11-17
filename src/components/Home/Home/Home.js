import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import HouseRent from '../HouseRent/HouseRent';
import Navbar from '../../Shared/Navbar/Navbar';
import Service from '../Service/Service';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <HouseRent></HouseRent>
            <Service></Service>
            <Footer></Footer>
        </div>
        
    );
};

export default Home;