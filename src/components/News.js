import React from 'react';
import './News.css';
import support from '../assets/img/MTI-300x152.jpg';
import DG from '../assets/img/DG-Article-1-768x576.jpg';
import Man from '../assets/img/461590389.jpg';


const News = () => {
    return (
        <div className='container py-5'>
            <h3>NEWS & BLOG</h3>
            <div className="row py-5">
                <div className="col-md-4">
                    <div className="card h-100">
                        <img className='card-img-top img-fluid w-full' src={support} alt="news_image" />
                        <div className="card-body">
                            <h5 className="card-title">Supporting High-Stakes Decision-Making: Advanced Movement Technologies for Mission-Critical Situational Awareness</h5>
                            <p className="card-text">Uncrewed aerial vehicles play a critical role in ISR missions, increasing the situational awareness that leads to timely and effective decision-making when the stakes are high. Developed to carry a wide variety of payloads, UAVs facilitate the gathering and transmission of accurate data to key human actors in real or near-real time for a distinct in-field advantage. Optical gimbal cameras are often the payload of choice for ISR missions. With a multitude of sensors (color and IR), laser pointers and range finders, geolocation capabilities, image stabilization, optical and digital zoom, and real-time data transmission, these cameras are ideal for a real-time data exchange that provides critical information to decision-makers in the field.</p>
                        </div>
                        
                        <hr />

                        <div className="card-body">
                            <p className="card-link text-dark text-decoration-none">November 6, 2024</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100">
                        <img className='card-img-top img-fluid' src={DG} alt="news_image" />
                        <div className="card-body h-100">
                            <h5 className="card-title">The Future of AI in Uncrewed Aircraft Systems and What it Means for the Warfighter</h5>
                            <p className="card-text">The AI revolution is here, and aerospace engineering companies are at a critical juncture in the defense industry. As artificial intelligence technologies are gaining acceptance and increased applications in the UAS space there is increased potential to significantly raise the value of an uncrewed aircraft system to the warfighter.</p>
                        </div>
                        
                        <hr />

                        <div className="card-body">
                            <p className="card-link text-dark text-decoration-none">October 18, 2024</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100">
                        <img className='card-img-top img-fluid' src={Man} alt="news_image" />
                        <div className="card-body h-100">
                            <h5 className="card-title">Edge Autonomy Program Manager & Pilot Teams Up with Fellow Veterans to Airdrop Vital Supplies Post-Helene</h5>
                            <p className="card-text">When Helene made landfall and it became clear it would take days for official emergency management to reach many of the smaller mountain communities outside of Asheville, Veteran pilots – including Edge Autonomy’s Jeremy White – decided to take action.</p>
                        </div>
                        
                        <hr />

                        <div className="card-body">
                            <p className="card-link text-dark text-decoration-none">October 4, 2024</p>
                        </div>
                    </div>
                </div>
            </div>
            .
        </div>
    );
};

export default News;