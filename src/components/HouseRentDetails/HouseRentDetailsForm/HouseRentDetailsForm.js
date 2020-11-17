import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';

const HouseRentDetailsForm = () => {
    const [houseDetail, setHouseDetail] = useContext(UserContext);
    const history = useHistory()

    const handleSubmit = e => {
        const bookingInfo = {
            name: e.target.name.value,
            email: e.target.email.value,
            number: e.target.number.value,
            message: e.target.message.value,
            title: houseDetail.title,
            price: houseDetail.price,
        }

        fetch('https://aqueous-ravine-41043.herokuapp.com/addBooking', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(bookingInfo)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                history.push('/dashboard')
            }
        })
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="form-control" name="name" type="text" placeholder="Full Name" style={{marginTop:'49px'}} required/>
                <input className="form-control" name="number" type="number" placeholder="Phone No." style={{marginTop:'16px'}} required/>
                <input className="form-control" name="email" type="email" placeholder="Email Address" style={{marginTop:'16px'}} required/>
                <textarea className="form-control" name="message" cols="30" rows="5" placeholder="Message" style={{marginTop:'16px'}} required></textarea>
                <input className="btn-brand" type="submit" value="Request Booking" style={{marginTop:'24px',width: '100%'}}/>
            </form>
        </div>
    );
};

export default HouseRentDetailsForm;