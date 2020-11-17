import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFound.css"

const NotFound = () => {
    return (
        <div >
            <h2 className="text-center" style={{marginTop:"100px", color:"red"}}>
                Page not found...
            </h2>
            <div className="text-center">
                <Link to="/">
                    <button className="notFound-btn">Home{"->>"}</button>
                </Link>
            </div>
            
        </div>
    );
};

export default NotFound;