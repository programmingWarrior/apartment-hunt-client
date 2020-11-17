import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../images/Logo.png"
import "./Navbar.css"


const Navbar = () => {
    return (
        <div>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <Link to="/" className="navbar-brand">
                        <img src={logo}  height="55" alt="" loading="lazy"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            <Link to="/" className="nav-link active">
                                Home <span className="sr-only">(current)</span>
                            </Link>
                            <Link to="" className="nav-link">
                                About
                            </Link>
                            <Link to="" className="nav-link">
                                Service
                            </Link>
                            <Link to="" className="nav-link">
                                Concerns
                            </Link>
                            <Link to="" className="nav-link">
                                Event
                            </Link>
                            <Link to="" className="nav-link">
                                Contact
                            </Link>
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;