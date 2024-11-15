import React from 'react';
import Header from './../components/Header';
import Hero from './../components/Hero';
import Autonomous from './../components/Autonomous';
import UncrewedDrone from './../components/UncrewedDrone';
import Mission from './../components/Mission';
import Looking from './../components/Looking';
import News from './../components/News';
import Footer from './../components/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Autonomous />
            <UncrewedDrone />
            <Mission />
            <Looking />
            <News />
            <Footer />
        </div>
    );
};

export default Home;