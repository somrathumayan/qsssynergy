import React from 'react';
import uncrewed from '../assets/img/drone-2.jpg';
import './UncrewedDrone.css';

const UncrewedDrone = () => {
    return (
        <div>
            <div className="container-fluid uncrewed">
                <img className='uncrewed-img img-fluid' src={uncrewed} height={{height: "500px"}} alt="image"/>
                
                <div className="container">
                    <div className="col-md-12 uncrewed-txt bg-dark">
                        <div className="text-white mx-5 py-5">
                            <h4>Uncrewed aerial vehicles</h4>
                            <h3>LONG-RANGE RECONNAISSANCE</h3>
                            <p>The right UAV solution can revolutionize military operations and aid in mission success. Our LRR solutions allow operators to gather images, insights, and data while staying out of harm’s way</p>
                            <a href="/" className='text-white text-decoration-none'>UAV SOLUTIONS ↓</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default UncrewedDrone;