import React, { useState, useEffect } from 'react';

const BookingListTable = () => {
    const [bookingList, setBookingList] = useState([])

    useEffect(() =>{
        fetch("https://aqueous-ravine-41043.herokuapp.com/bookings")
        .then(res => res.json())
        .then(data => setBookingList(data))
    },[])

    console.log(bookingList)

    return (
        <div className="m-3">
            <table className="table bg-white">
                <thead className="bg-secondary">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Phone No</th>
                        <th scope="col">Massage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookingList.map(book => 
                            <tr key={book._id}>
                                <td>{book.name}</td>
                                <td>{book.email}</td>
                                <td>{book.number}</td>
                                <td>{book.message}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default BookingListTable;