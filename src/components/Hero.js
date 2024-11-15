import React from 'react';
import './Hero.css';
import hero__image from '../assets/img/drone.jpeg';

const Hero = () => {
    return (
        <div className="hero__section">
            <div className="hero_img">
                <img className='img-fluid' src={hero__image} alt='hero__image'/>
            </div>
            <div className='container'>   
                <div className="col-md-12 hero_text text-white bg-dark">
                    <h2 className="hero__h2">
                        SEE FARTHER. SEE MORE.
                    </h2>
                    <p className="hero__p">
                    Over three decades of innovation providing critical multi-mission uncrewed aircraft, advanced ISR optics, and resilient energy solutions.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;