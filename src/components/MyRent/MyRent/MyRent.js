import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Topbar from '../../Shared/Topbar/Topbar';
import MyRentTable from '../MyRentTable/MyRentTable';

const MyRent = () => {
    return (
        <div style={{overflowX:'hidden'}}>
            <Topbar/>
            <div className="row">
                <Sidebar/>
                <div style={{height:"100vh"}} className="col-md-9 bg-light">
                <h3 className="px-4 py-2 text-dark">My Rent</h3>
                <MyRentTable/>
                </div>
            </div>
        </div>
    );
};

export default MyRent;