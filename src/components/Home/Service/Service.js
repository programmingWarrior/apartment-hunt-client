import React from 'react';
import "./Service.css";
import Properties from '../../../images/apartment 1.png';
import Financing from '../../../images/affordable 1.png';
import Trusted from '../../../images/lessee 1.png'


const serviceData = [
    {
        title: 'Wide Range of Properties',
        img:Properties,
        description: 'With a robust selection of popular properties on hand, as well as leading properties from experts.'
    },
    {
        title: 'Financing Made Easy',
        img: Financing,
        description: 'Our stress-free finance department that can find financial solutions to save you money.'
    },
    {
        title: 'Trusted by Thousands',
        img:Trusted,
        description: '10 new offers every day. 350 offers on site, trusted by a community of thousands of users.'
    }
]

const Service = () => {
    return (
        <div style={{backgroundColor:"#F1F6F4", paddingBottom:"42px"}}>
            <div style={{paddingBottom:"70px"}}>
                <p className="text-center " style={{paddingTop:"104px",marginBottom:"55px"}}>
                    <small className="color-brand" style={{fontSize:"16px", height:"24px"}}>Service<br/> </small>
                   <span style={{color:"#16322E", fontWeight:"bold", fontFamily:"poppins", fontSize:"34px", height:'100px'}}>We're an agency tailored to all <br/> clients' needs that always delivers</span> 
                </p>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row">
                    {
                        serviceData.map(service=>
                            <div className="col-md-4 text-center service-area">
                                <img src={service.img} alt="" height="80" width="80" style={{marginBottom:"24px"}}/>
                                <h5 style={{color:"#16322E", height:"30px", fontSize:"20px", fontWeight:"semiBold"}}>{service.title}</h5>
                                <p style={{color:"#606268"}}>{service.description}</p>
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default Service;