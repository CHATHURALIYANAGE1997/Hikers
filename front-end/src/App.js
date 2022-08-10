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
import ArticleInfo from './pages/ArticleInfo';
import Equipments from './pages/Equipments';
import HotelBooking from './pages/HotelBooking';
import BasicTabs from './pages/HotelDetails';
import { useSelector } from "react-redux";
import authToken from "./utils/authToken";
import oraganizeTrip from './pages/trav_organizeTrip';
import TravelingGuide from './pages/TravelingGuide';
import selectPackages from './pages/trav_selectPackages';
import CampingEquipment from "./pages/CampingEquipment";
import GuideTrips from './pages/GuideTrips';
import transport from './pages/trav_tranpotation_1';
import editTrip from './pages/trav_editTrip';
import Donations from './pages/Donations';
import GuideSchedule from './pages/GuideSchedule';
import GuidePayements from './pages/GuidePayements';
import GuideHistory from './pages/GuideHistory';


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
                          <Route path = "/articleinfo/" component= {ArticleInfo}></Route>
                          <Route path = "/equipments/" component= {Equipments}></Route>
                          <Route path = "/organizeTrip" component = {oraganizeTrip}></Route>
                          {/* <Route path = "/guide" component = {TravelingGuide}></Route> */}
                          <Route path = "/selectPackages" component={selectPackages}></Route>
                          <Route path = "/transport" component={transport}></Route>
                          <Route path = "/editTrip" component={editTrip}></Route>
                          <Route path = "/trav_organizeTrip" component = {oraganizeTrip}></Route>

                          <Route path = "/guide/profile" component = {TravelingGuide}></Route>
                          <Route path = "/guide/trips" component = {GuideTrips}></Route>
                          <Route path = "/guide/schedules" component = {GuideSchedule}></Route>
                          <Route path = "/guide/history" component = {GuideHistory}></Route>
                          <Route path = "/guide/payments" component = {GuidePayements}></Route>

                          <Route path = "/trav_selectPackages" component={selectPackages}></Route>
                          <Route path = "/camping/" component= {CampingEquipment}></Route>
                          <Route path = "/donations/" component= {Donations}></Route>


                           {/*<Route path = "/home" exact component = {}></Route> */}
                    </Route>
                </div>
              
        </Routes>
        </BrowserRouter>
    </div>
    
  );
}

export default App;
