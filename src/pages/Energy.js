import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import Inteligence from './../components/Inteligence';
import Connect from './../components/Connect';
import Uncrewed_aircraft_systems from './../components/Uncrewed_aircraft_systems';
import Advancing from './../components/Advancing';

const Energy = () => {
    return (
        <div>
            <Header />
            <Uncrewed_aircraft_systems />
            <Advancing />
            <Inteligence></Inteligence>
            <Connect />
            <Footer />
        </div>
    );
};

export default Energy;