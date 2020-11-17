import React from 'react';
import './Footer.css';
import facebook from '../../../images/facebook.png';
import instagram from '../../../images/instagram.png';
import linkedIn from '../../../images/linkedIn.png';
import utube from '../../../images/utube.png';
import location from '../../../images/location.png';
import { Link } from 'react-router-dom';


const Footer = () => {
    
    return (
        <footer className="footer-area" style={{color: 'white'}}>
            <div className="">
                <div className="row" style={{marginRight:0, marginLeft:0,paddingBottom:'103px'}}>
                    <div className="col-sm-6 col-md-4" style={{display: 'flex', marginTop:'77px'}}>
                        <img src={location} alt="" height="24" width="24" style={{color: 'white'}}/>
                        <p style={{marginLeft:"14px"}}>H#340 (4th Floor), Road #24, <br/>
                            New DOHS, Mohakhali, Dhaka, Bangladesh <br/>
                            Phone: 018XXXXXXXX <br/>
                            E-mail: info@company.com</p>
                    </div>
                    <div className="col-sm-6 col-md-2" style={{paddingTop:'55px'}}>
                         
                        <ul>
                        <p style={{marginBottom:'14px', fontSize:'20px'}}>Company</p>
                            <li className="company-info"><Link to="">About</Link></li>
                            <li className="company-info"><Link to="">Site Map</Link></li>
                            <li className="company-info"><Link to="">Support Center</Link></li>
                            <li className="company-info"><Link to="">Terms Conditions</Link></li>
                            <li className="company-info"><Link to="">Submit Listing</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-2" style={{paddingTop:'55px'}}>
                         
                        <ul>
                        <p style={{marginBottom:'14px', fontSize:'20px'}}>Quick Links</p>
                            <li className="company-info"><Link to="">Quick Links</Link></li>
                            <li className="company-info"><Link to="">Rentals</Link></li>
                            <li className="company-info"><Link to="">Sales</Link></li>
                            <li className="company-info"><Link to="">contact</Link></li>
                            <li className="company-info"><Link to="">Terms Conditions</Link></li>
                            <li className="company-info"><Link to="">Our blog</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3" style={{paddingTop:'55px', marginLeft:'57px'}}>
                        <p style={{marginBottom:'14px', fontSize:'20px'}}>About Us</p>
                        <p >We are the top real estate <br/>
                        agency in Sydney, with agents <br/>
                        available to answer any  <br/>
                        question 24/7.</p>
                        <div style={{marginTop:"36px"}} className="footer-contact-icon">
                            <Link to=""><img src={facebook} alt="" height="23" width="23" style={{marginRight:'30px'}}/></Link>
                            <Link to=""><img src={instagram} alt="" height="23" width="23" style={{marginRight:'30px'}}/></Link>
                            <Link to=""><img src={linkedIn} alt="" height="23" width="23" style={{marginRight:'30px'}}/></Link>
                            <Link to=""><img src={utube} alt="" height="23" width="23" /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                    <p style={{color: '#747474',paddingBottom:"10px"}}>Copyright {(new Date()).getFullYear()} All Rights Reserved- Team 59</p>
                </div>
        </footer>
        
    );
};

export default Footer;