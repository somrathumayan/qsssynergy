import React from 'react';
import './Mission.css';
import drone3 from '../assets/img/drone3.webp';
import drone4 from '../assets/img/dron4.webp';
import d5 from '../assets/img/d5.jpg';
import d6 from '../assets/img/d6.jpg';
import d7 from '../assets/img/d7.jpg';
import d8 from '../assets/img/d8.jpg';
import d9 from '../assets/img/d9.jpg';

const Mission = () => {
    return (
        <div>
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-6">
                        <h5>Mission-centric</h5>
                        <h3>AVIATION SOLUTIONS</h3>
                    </div>
                    <div className="col-md-6">
                        <p>Our customers face unique challenges – and we stand with them to develop tailored solutions that meet each individual mission need. Our dedication to top-tier products and services paves a path to success – no matter the environment or conditions.</p>
                    </div>
                </div>

                <div className="row py-5">
                    <div className="col-md-6">
                        <img src={drone3} alt="drone" className='img-fluid' />
                    </div>
                    <div className="col-md-6 text-dark">
                        <h3>VXE30 STALKER</h3>
                        <p>Portable, quiet SUAS supporting militaries and law enforcement with long-endurance imaging in a wide range of environments</p>
                        <a href="/" className='text-primary text-decoration-none'>LEARN MORE ↓</a>
                    </div>
                </div>

                <hr />

                <div className="row py-5">
                    <div className="col-md-6">
                        <h3>PENGUIN C VTOL</h3>
                        <p>Integrated platform capable of flying missions anywhere, anytime even when infrastructure is lacking to launch and recover</p>
                        <a href="/" className='text-primary text-decoration-none'>LEARN MORE ↓</a>
                    </div>
                    <div className="col-md-6">
                        <img className='img-fluid' src={drone4} alt="" />
                    </div>
                </div>

                <div className="mission__vid">
                    <iframe width="100%" height="450" src="https://www.youtube.com/embed/UrvLDId7_OA?si=tqkZNINBCi8t4xWW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                <div className="edge__area py-5">
                    <h4>The Edge Autonomy team</h4>
                    <h3>JOIN US IN SHAPING THE FUTURE OF AUTONOMOUS SYSTEMS</h3>
                    <p>Our team is agile and engaged – we are proud to work together with the best and the brightest minds in the industry. We are driving forward- looking innovation, and every voice is heard and respected as we forge ahead.</p>
                    <a href="/" className='text-primary text-decoration-none'>CHECK OUT OUR OPEN POSITIONS ↓</a>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <img className='img-fluid pb-4' src={d5} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <img className='img-fluid pb-4' width={"100%"} src={d6} alt="" />
                            </div>
                            <div className="col-md-6">
                                <img className='img-fluid pb-4' width={"100%"} src={d7} alt="" />
                            </div>
                            <div className="col-md-6">
                                <img className='img-fluid pb-4' width={"100%"} src={d8} alt="" />
                            </div>
                            <div className="col-md-6">
                                <img className='img-fluid pb-4' width={"100%"} src={d9} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;