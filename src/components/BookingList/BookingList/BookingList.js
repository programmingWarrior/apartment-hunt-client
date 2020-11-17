import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Topbar from '../../Shared/Topbar/Topbar';
import BookingListTable from '../BookingListTable/BookingListTable';

const BookingList = () => {
    return (
        <div style={{overflowX:'hidden'}}>
            <Topbar/>
            <div className="row">
                <Sidebar/>
                <div style={{height:"100vh"}} className="col-md-9 bg-light">
                <h3 className="px-4 py-2 text-dark">Booking List</h3>
                <BookingListTable/>
                </div>
            </div>
        </div>
    );
};

export default BookingList;