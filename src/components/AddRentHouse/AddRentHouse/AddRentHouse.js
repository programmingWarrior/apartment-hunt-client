import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Topbar from '../../Shared/Topbar/Topbar';
import AddRentHouseForm from '../AddRentHouseForm/AddRentHouseForm';

const AddRentHouse = () => {
    return (
        <div style={{overflowX:'hidden'}}>
            <Topbar/>
            <div className="row">
                <Sidebar/>
                <div className="col-md-9 bg-light">
                <h3 className="px-4 pb-5 pt-2 text-dark">Add Rent House</h3>
                <AddRentHouseForm/>
                </div>
            </div>
        </div>
    );
};

export default AddRentHouse;