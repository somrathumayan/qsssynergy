import React from 'react';
import compare from '../assets/img/Icon-Compare-qn6qz2b7g5rbho1g7v3j9pjc6e7lbrlcr66a7hkkms.webp';
import request from '../assets/img/Icon-Request-more-info-qn6qz2b7g5rbho1g7v3j9pjc6e7lbrlcr66a7hkkms.webp';
import contact from '../assets/img/Icon-Contact-Us-qn6qz2b7g5rbho1g7v3j9pjc6e7lbrlcr66a7hkkms.webp';
import partners from '../assets/img/Icon-Partners-Vendors-qn6qz2b7g5rbho1g7v3j9pjc6e7lbrlcr66a7hkkms.webp';

const Connect = () => {
    return (
        <div>
            <div className="container text-center py-5">
                <h4>We're here to support your mission</h4>
                <h3>LET'S CONNECT</h3>
                <div className="row">
                    <div className="col-md-3">
                        <div className="py-5">
                            <img src={compare} alt=""/>
                        </div>
                        <a href="/" className='text-decoration-none'>COMPARE UNCREWED SYSTEMS ↓</a>
                    </div>
                    <div className="col-md-3">
                        <div className="py-5">
                            <img src={request} alt="" />
                        </div>
                        <a href="/" className='text-decoration-none'>REQUEST MORE INFORMATION ↓</a>
                    </div>
                    <div className="col-md-3">
                        <div className="py-5">
                            <img src={contact} alt="" />
                        </div>
                        <a href="/" className='text-decoration-none'>CONTACT US ↓</a>
                    </div>
                    <div className="col-md-3">
                        <div className="py-5">
                            <img src={partners} alt="" />
                        </div>
                        <a href="/" className='text-decoration-none'>PARTNERS & VENDORS ↓</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Connect;