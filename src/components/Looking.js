import React from 'react';
import './Looking.css';

const Looking = () => {
    return (
        <div>
            <div className="container-fluid bg-looking text-white">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-md-6">
                            <h4>Looking for more information?</h4>
                            <h2>LET'S CONNECT</h2>
                        </div>
                        <div className="col-md-6">
                            <p>Get in touch to discuss Edge Autonomy’s mission-driven solutions and how we can further your operational success.</p>
                            <button className='btn btn-danger'>CONTACT US</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Looking;