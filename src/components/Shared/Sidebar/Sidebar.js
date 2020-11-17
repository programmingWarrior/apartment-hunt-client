import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faListAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faHome, faListAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
// import '../../Home/Home/Home.css'
// import { UserContext } from '../../../App';

const Sidebar = () => {
    // const [loggedInUser, setLoggedInUser, serviceData, setServiceData, isAdmin, setIsAdmin] = useContext(UserContext);

    return (
        <div className="sidebar d-flex flex-column col-md-3 justify-content-between p-5">
            <ul className="list-unstyled">
                <li>
                    <Link to="/bookingList" className="text-dark">
                        <FontAwesomeIcon icon={faListAlt} /> <span className="ml-2">Booking List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addRentHouse" className="text-dark">
                        <FontAwesomeIcon icon={faPlus} /> <span className="ml-2">Add Rent House</span>
                    </Link>
                </li>
                <li>
                    <Link to="/myRent" className="text-dark">
                        <FontAwesomeIcon icon={faHome} /> <span className="ml-2">My Rent</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;