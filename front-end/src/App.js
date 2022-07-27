import React from 'react';
import {BrowserRouter, BrowserRouter as Routes, Route} from 'react-router-dom';
// import HotelInfo from './pages/HotelInfo';
import Hotels from './pages/Hotels';
import Login from './pages/Login'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Welcomepage from './pages/Welcomepage';
import LandingPage from './pages/landing';
import Articles from './pages/Articles';
import HotelBooking from './pages/HotelBooking';
import BasicTabs from './pages/HotelDetails';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
                <div className="text-center">
                    <Route> 
                          <Route path = "/" exact component = {Login}></Route>
                          <Route path = "/login"  component = {Login}></Route>
                          <Route path = "/signup"  component = {Signup}></Route>
                          <Route path = "/signin"  component = {Signin}></Route>
                          <Route path = "/welcome"  component = {Welcomepage}></Route>
                          <Route path = "/reserve"  component = {HotelBooking}></Route>
                          <Route path = "/hotels"  component = {Hotels}></Route>
                          <Route path = "/hoteldetails"  component = {BasicTabs}></Route>
                          <Route path = "/landingPage/" component= {LandingPage}></Route>
                          <Route path = "/articles/" component= {Articles}></Route>

                           {/*<Route path = "/home" exact component = {}></Route> */}
                    </Route>
                </div>
              
        </Routes>
        </BrowserRouter>
    </div>
    
  );
}

export default App;
