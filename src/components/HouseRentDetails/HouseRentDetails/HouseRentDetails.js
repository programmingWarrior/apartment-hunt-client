import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import "./HouseRentDetails.css";
import img1 from '../../../images/Rectangle 407.png'
import img2 from '../../../images/Rectangle 408.png'
import img3 from '../../../images/Rectangle 409.png'
import img4 from '../../../images/Rectangle 410.png'
import { UserContext } from '../../../App';
import HouseRentDetailsForm from '../HouseRentDetailsForm/HouseRentDetailsForm';


const HouseRentDetails = () => {
    const [houseDetail, setHouseDetail] = useContext(UserContext)

    return (
        <div>
            <div>
                <Navbar></Navbar> 
            </div>
            <div className="apartment-banner">
                <h2 className="text-center text-white banner-text">
                    Apartment
                </h2>
            </div>
            <div className="container">
                <div className="row" style={{marginTop:"48px"}}>
                    <div className="col-md-9 house-detail">
                        {houseDetail &&
                            <img src={`data:image/png;base64,${houseDetail.picture.img}`} alt="" height="376" width="770"/>
                        }
                        <div style={{marginTop:"24px",marginBottom:'48px'}}>
                            <img src={img1} alt="" height="111" width="170" style={{marginRight:'30px'}}/>
                            <img src={img2} alt="" height="111" width="170" style={{marginRight:'30px'}}/>
                            <img src={img3} alt="" height="111" width="170" style={{marginRight:'30px'}}/>
                            <img src={img4} alt="" height="111" width="170"/>
                        </div>
                        {houseDetail &&
                            <div style={{display: 'flex'}}>
                                <h2 style={{color:'#16322E', fontSize:'36px', fontWeight:'bold'}}>{houseDetail.title}</h2>
                                <h2 className="ml-auto" style={{color:'#275A53', fontSize:'36px', fontWeight:'bold'}}>${houseDetail.price}</h2>
                            </div>
                        }
                        <p style={{color:'#747474', fontSize:'24px'}}>
                        3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.
                        </p>
                        <p style={{color:'#16322E', fontSize:'28px', fontWeight:'bold'}}>
                        Price Details-
                        </p>
                        <p style={{color:'#747474', fontSize:'24px'}}>
                            Rent/Month: $550 (negotiable) <br/>
                            Service Charge : 8,000/= Tk per month, subject to change <br/>
                            Security Deposit : 3 month’s rent <br/>
                            Flat Release Policy : 3 months earlier notice required 
                        </p>
                        <p style={{color:'#16322E', fontSize:'28px', fontWeight:'bold'}}>
                            Property Details-
                        </p>
                        <p style={{color:'#747474', fontSize:'24px'}}>
                            Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.
                            Flat Size : 3000 Sq Feet.
                            Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)
                            Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.
                            Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.
                            Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera
                        </p>

                    </div>
                    <div className="col-md-3" style={{backgroundColor: '#F4F4F4', minHeight:"505px"}}>
                        <HouseRentDetailsForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseRentDetails;