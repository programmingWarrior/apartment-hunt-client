import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        <div className="banner-area">
            <div>
                <h2 className="text-center text-white banner-text">
                    FIND YOUR HOUSE RENT
                </h2>
                <div className="row banner-search-area d-flex justify-content-center">
                    <div className="banner-search-input col-75">
                        <input className="form-control" type="text" placeholder="Search....."/>
                    </div>
                    <div className="col-25">
                        <button className="btn-brand" style={{padding:"14px 46px", marginLeft:"18px"}}>Find Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;