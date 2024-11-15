import React from 'react';
import './Header.css'
import logo from '../assets/img/logo.png';

const Header = () => {
    return (
        <div className='container-fluid sticky-top m-0 p-0'>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/"><img src={logo} alt="Logo"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item px-3">
                            <a className="nav-link active font-weight-bold fw-bolder text-primary" aria-current="page" href="/unscrewed">Unscrewed Systems</a>
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link font-weight-bold fw-bolder text-primary" href="/payloads">Payloads</a>
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link font-weight-bold fw-bolder text-primary" href="/energy">Energy Systems</a>
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link font-weight-bold fw-bolder text-primary" href="/careers">Careers</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;