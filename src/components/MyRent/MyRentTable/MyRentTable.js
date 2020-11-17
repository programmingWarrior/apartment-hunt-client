import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const MyRentTable = () => {
    const [houseDetail, setHouseDetail, user, setUser] = useContext(UserContext);
    const [bookingList, setBookingList] = useState([]);

    useEffect(() => {
        fetch('https://aqueous-ravine-41043.herokuapp.com/userRent', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({email: user.email})
        })
        .then(res => res.json())
        .then(data => {
            setBookingList(data)
        })
        .catch(err => {
          console.log(err)
        })
    }, [])

    console.log(bookingList)
    return (
        <div className="m-3">
            <table className="table bg-white">
                <thead className="bg-secondary">
                    <tr>
                    <th scope="col">House name</th>
                    <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookingList.map(book => 
                        <tr>
                            <td>{book.title}</td>
                            <td>{book.price}</td>
                        </tr>    
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyRentTable;