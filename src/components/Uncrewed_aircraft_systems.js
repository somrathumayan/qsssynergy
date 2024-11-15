import React from 'react';
import './Uncrewed_aircraft_systems.css';
import uncrewed_aircraft_systems_imgage from '../assets/img/Uncrewed-Systems-Header.jpg';

const Uncrewed_aircraft_systems = () => {
    return (
        <div className="container-fluid uncrewed_aircraft_systems_area m-0 p-0">
            <div className="uncrewed_aircraft_systems_image">
                <img src={uncrewed_aircraft_systems_imgage} alt="image" className='img-fluid'/>
            </div>

            <div className='container m-0'>
                <div className="uncrewed_aircraft_systems_text">
                    <h4>Uncrewed aircraft systems</h4>
                    <h2>Uncrewed Systems</h2>
                    <p>We continuously push the limits of long endurance, long range reconnaissance, and adaptable uncrewed aircraft systems for intelligence, surveillance, and reconnaissance missions around the world.</p>
                </div>
            </div>
        </div>
    );
};

export default Uncrewed_aircraft_systems;