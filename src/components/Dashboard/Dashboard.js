import React from 'react';
import Sidebar from '../Shared/Sidebar/Sidebar';
import Topbar from '../Shared/Topbar/Topbar';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div style={{overflowX:'hidden'}}>
            <Topbar/>
            <div className="row">
                <Sidebar/>
                <div style={{height:"100vh"}} className="col-md-9 bg-light">
                <h3 className="px-4 pb-5 pt-2 text-dark">Welcome to Dashboard</h3>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;