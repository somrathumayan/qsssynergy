import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import Uncrewed_aircraft_systems from './../components/Uncrewed_aircraft_systems';
import Advancing from './../components/Advancing';
import AdvProducts from './../components/AdvProducts';
import Connect from './../components/Connect';


const Uncrewed = () => {
    return (
        <div>
            <Header />
            <Uncrewed_aircraft_systems />
            <Advancing />
            <AdvProducts />
            <Connect />
            <Footer />
        </div>
    );
};

export default Uncrewed;