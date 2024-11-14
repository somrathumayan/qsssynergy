import React from 'react';
import './Footer.css';
import logo from '../assets/img/logo.png';

const Footer = () => {
    return (
        <div className='container-fluid bg-looking'>
            <div className="container py-5">
                <img src={logo} alt="" className='img-fluid w-25'/>

                <div className="row text-white py-5">
                    <div className="col-md-2 col-sm-6 col-xs-2">
                        <h5>UNCREWED SYSTEMS</h5>
                        <ul className='list-group-horizontal list-inline'>
                            <li className='list-group-item'>
                                <a href="/" className='text-white text-decoration-none'>VXE30 Stalker</a>
                            </li>
                            <li className='list-group-item'>
                                <a href="/" className='text-white text-decoration-none'>VXE30 Stalker Havoc Configuration</a>
                            </li>
                            <li className='list-group-item'>
                                <a href="/" className='text-white text-decoration-none'>Penguin C VTOL</a>
                            </li>
                            <li className='list-group-item'>
                                <a href="/" className='text-white text-decoration-none'>Penguin C Mk2</a>
                            </li>
                            <li className='list-group-item'>
                                <a href="/" className='text-white text-decoration-none'>Penguin B</a>
                            </li>
                            <li className='list-group-item'>
                                <a href="/" className='text-white text-decoration-none'>Compare Uncrewed Aircraft Systems</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-6 col-xs-2">
                        <h5>PAYLOADS</h5>
                        <ul className='list-group-horizontal list-inline'>
                            <li className='list-group-item'>
                                <a href="/" className='text-white text-decoration-none'>E95</a>
                            </li>
                            <li className='list-group-item'>
                                <a href="/" className='text-white text-decoration-none'>E140 LC</a>
                            </li>
                            <li className='list-group-item'>
                                <a href="/" className='text-white text-decoration-none'>E140Z G2</a>
                            </li>
                            <li className='list-group-item'>
                                <a href="/" className='text-white text-decoration-none'>E180 MG</a>
                            </li>
                            <li className='list-group-item'>
                                <a href="/" className='text-white text-decoration-none'>E140 MWIR</a>
                            </li>
                            <li className='list-group-item'>
                                <a href="/" className='text-white text-decoration-none'>Compare Payload Systems</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-6 col-xs-2">
                        <h5>ENERGY SYSTEMS</h5>
                        <ul className='list-group-horizontal list-inline'>
                            <li className='list-group-item'>
                                <a className='text-white text-decoration-none' href="/">Performer Series</a>
                            </li>
                            <li className='list-group-item'>
                                <a className='text-white text-decoration-none' href="/">Endurance Series</a>
                            </li>
                            <li className='list-group-item'>
                                <a className='text-white text-decoration-none' href="/">Energy Components</a>
                            </li>
                            <li className='list-group-item'>
                                <a className='text-white text-decoration-none' href="/">Client Portal</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-6 col-xs-2">
                        <h5>COMPANY</h5>
                        <ul className='list-group-horizontal list-inline'>
                            <li className='list-group-item'>
                                <a className='text-white text-decoration-none' href="/">Mission</a>
                            </li>
                            <li className='list-group-item'>
                                <a className='text-white text-decoration-none' href="/">Our Team</a>
                            </li>
                            <li className='list-group-item'>
                                <a className='text-white text-decoration-none' href="/">Locations</a>
                            </li>
                            <li className='list-group-item'>
                                <a className='text-white text-decoration-none' href="/">Partners & Vendors</a>
                            </li>
                            <li className='list-group-item'>
                                <a className='text-white text-decoration-none' href="/">EU Reports</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-6 col-xs-2">
                        <h5>MEDIA</h5>
                        <ul className='list-group-horizontal list-inline'>
                            <li className='list-group-item'>
                                <a className='text-white text-decoration-none' href="/">News & Blog</a>
                            </li>
                            <li className='list-group-item'>
                                <a className='text-white text-decoration-none' href="/">Case Studies</a>
                            </li>
                            <li className='list-group-item'>
                                <a className='text-white text-decoration-none' href="/">Video</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-6 col-xs-2">
                        <h5>CAREERS</h5>
                        <ul className='list-group-horizontal list-inline'>
                            <li className='list-group-item'>
                                <a className='text-white text-decoration-none' href="/">Positions</a>
                            </li>
                            <li className='list-group-item'>
                                <a className='text-white text-decoration-none' href="/">Life @ Edge</a>
                            </li>
                            <li className='list-group-item'>
                                <a className='text-white text-decoration-none' href="/">Benefits</a>
                            </li>
                        </ul>
                    </div>
                </div>


                <p className='text-white text-center'>Copyright 2024 © All Rights Reserved.</p>
            </div>

        </div>
    );
};

export default Footer;