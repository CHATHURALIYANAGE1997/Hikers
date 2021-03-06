import React from 'react';
import {BrowserRouter, BrowserRouter as Routes, Route} from 'react-router-dom';
// import {Switch as Switch} from  'react-router-dom';
// import HotelInfo from './pages/HotelInfo';
import Hotels from './pages/Hotels';
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from "./pages/Home";
import Welcomepage from './pages/Welcomepage';
import LandingPage from './pages/landing';
import Articles from './pages/Articles';
import Equipments from './pages/Equipments';
import HotelBooking from './pages/HotelBooking';
import BasicTabs from './pages/HotelDetails';
import { useSelector } from "react-redux";
import authToken from "./utils/authToken";
import oraganizeTrip from './pages/trav_organizeTrip';


function App() {
    window.onbeforeunload = (event) => {
        const e = event || window.event;
        e.preventDefault();
        if (e) {
            e.returnValue = "";
        }
        return "";
    };

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);

    }
    const auth = useSelector((state) => state.auth);
    console.log(auth);
    console.log(auth.isLoggedIn);
    console.log(localStorage);
  return (
    <div>
      <BrowserRouter>
        <Routes>
                <div className="text-center">
                    <Route> 
                          <Route path = "/" exact component = {Login}></Route>
                          <Route path = "/login"  component = {Login}></Route>
                          <Route path = "/signup"  component = {Signup}></Route>
                          <Route path = "/home" exact component= {Home}></Route>
                          <Route path = "/welcome"  component = {Welcomepage}></Route>
                          <Route path = "/reserve"  component = {HotelBooking}></Route>
                          <Route path = "/hotels"  component = {Hotels}></Route>
                          <Route path = "/hoteldetails"  component = {BasicTabs}></Route>
                          <Route path = "/landingPage/" component= {LandingPage}></Route>
                          <Route path = "/articles/" component= {Articles}></Route>
                          <Route path = "/equipments/" component= {Equipments}></Route>
                          <Route path = "/trav_organizeTrip/" component = {oraganizeTrip}></Route>
                           {/*<Route path = "/home" exact component = {}></Route> */}
                    </Route>
                </div>
              
        </Routes>
        </BrowserRouter>
    </div>
    
  );
}

export default App;
