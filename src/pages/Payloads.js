import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import Connect from './../components/Connect';
import Inteligence from './../components/Inteligence';
import Advancing from './../components/Advancing';
import Uncrewed_aircraft_systems from './../components/Uncrewed_aircraft_systems';
import Mission from './../components/Mission';



const Payloads = () => {
    return (
        <div>
            <Header />
            <Uncrewed_aircraft_systems />
            <Advancing />
            <Mission />
            <Inteligence/>
            <Connect />
            <Footer />
            
        </div>
    );
};

export default Payloads;