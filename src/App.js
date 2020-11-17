import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './components/NotFound/NotFound';
import { createContext, useState } from 'react';
import MyRent from './components/MyRent/MyRent/MyRent';
import Login from './components/Login/Login/Login';
import AddRentHouse from './components/AddRentHouse/AddRentHouse/AddRentHouse';
import BookingList from './components/BookingList/BookingList/BookingList';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';
import HouseRentDetails from './components/HouseRentDetails/HouseRentDetails/HouseRentDetails';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext()

function App() {
  const [houseDetail, setHouseDetail] = useState({})
  
  const [user, setUser] = useState({
    isSignedIn: false,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
  });
  // console.log(houseDetail)
  return (
    <UserContext.Provider value={[houseDetail, setHouseDetail, user, setUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/houseDetail">
            <HouseRentDetails></HouseRentDetails>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/bookingList">
            <BookingList></BookingList>
          </PrivateRoute>
          <PrivateRoute path="/myRent">
            <MyRent></MyRent>
          </PrivateRoute>
          <PrivateRoute path="/addRentHouse">
            <AddRentHouse></AddRentHouse>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
