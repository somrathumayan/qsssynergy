import React from 'react';
import Ruggedized from '../assets/img/MicrosoftTeams-image-10.jpg';
import Onboard from '../assets/img/Onboard-Video-Processing-1024x768.jpg';
import Software from '../assets/img/UAVF_publication_USTmedia_pages92-97_pdf__page_5_of_5_-1024x756.jpg';
import ITAR from '../assets/img/Gimbals-at-trade-show-2-1024x768.jpg';

const Inteligence = () => {
    return (
        <div>
            <div className="container py-5">
                <h5>Intelligence, surveillance, and reconnaissance solutions</h5>
                <h3 className='pb-3 fw-bolder'>Meeting multiple mission needs</h3>
                <div className="row">
                    <div className="col-md-3">
                        <h4>Ruggedized Construction</h4>
                        <img src={Ruggedized} alt="Ruggedized" className='img-fluid py-3'/>
                        <p>Our systems are made to face harsh conditions with rugged designs comprised of an advanced magnesium structure assembled in a protected, fully sealed, dry gas environment.</p>
                    </div>
                    <div className="col-md-3">
                        <h4>Onboard Video Processing</h4>
                        <img src={Onboard} alt="Onboard" className='img-fluid py-3'/>
                        <p>Operators receive accurate information through onboard data enhancement including overlays, digital zoom, and recording.</p>
                    </div>
                    <div className="col-md-3">
                        <h4>Software Stabilization</h4>
                        <img src={Software} alt="Software" className='img-fluid py-3'/>
                        <p>A stabilized picture is crucial to providing accurate data. Our systems come pre-installed with software stabilization and roll correction, ensuring high-definition imagery that is normally reserved for much larger, more expensive gimbals requiring a larger and more expensive aircraft.</p>
                    </div>
                    <div className="col-md-3">
                        <h4>ITAR-Free</h4>
                        <img src={ITAR} alt="ITAR" className='img-fluid py-3'/>
                        <p>Edge Autonomy facilities in the European Union and the United States produce our optical gimbals, ensuring rapid delivery and ease of export control.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inteligence;