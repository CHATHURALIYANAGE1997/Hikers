import React from 'react';
import { BrowserRouter, BrowserRouter as Routes, Route } from 'react-router-dom';
import { Switch as Switch } from 'react-router-dom';
// import HotelInfo from './pages/HotelInfo';
import Hotels from './pages/Hotels';
import TravelerSignup from './pages/trav_signup'
import GuideSignup from './pages/GuideSignup'
import EquipmentSignup from './pages/EquipmentSignup'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import Login from './pages/Login'
import Home from "./pages/Home";
import DonationsHome from "./pages/DonationsHome";
// import Welcomepage from './pages/Welcomepage';
import LandingPage from './pages/landing';
import Articles from './pages/Articles';
import ArticleInfo from './pages/ArticleInfo';
import Forums from './pages/Forums';
import ForumDetails from './pages/ForumDetails';
import forumQuestion from './pages/forumQuestion';
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
import Transport from './pages/trav_tranpotation_1';
import editTrip from './pages/trav_editTrip';
import GuideSchedule from './pages/GuideSchedule';
import GuidePayements from './pages/GuidePayements';
import GuideHistory from './pages/GuideHistory';
// import GuideIssues from './pages/GuideIssues';
import HotelProfile from './pages/HotelProfile';
import HotelRoom from './pages/HotelRoom';
import TransportProviderProfile from './pages/TransportProviderProfile';
import TransportProviderTrip from './pages/TransportProviderTrips';
import TransportProviderTripHistory from './pages/TransportProviderTripHistory';
import TransportProviderPaymemts from './pages/TransportProviderPayments';
import TransportProviderIssues from './pages/TransportProviderIssues';
import TransportProviderCalendar from './pages/TransportProviderCalendar';
import AdminHome from './pages/AdminHome';
import AdminHotels from './pages/AdminHotels';
import AdminTranspotation from './pages/AdminTranspotation';
import AdminArticles from './pages/AdminArticles';
import AdminAddArticle from './pages/AdminAddArticle';
import AdminAddHotel from './pages/AdminAddHotel';
import AdminAddTransporter from './pages/AdminAddTransporter';
import DayDistribution from './pages/trav_dayDistribution';
import NotFoundPage from "./pages/NotFoundPage";

import verifyaccount from "./pages/verifyaccount";
import TravelerProfile from './pages/TravelerProfile';
import TravelerTrips from './pages/TravelerTrips';
import TravelerIssues from './pages/TravelerIssues';
import Page from './pages/page';

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
            <Switch>



              <Route path="/" exact component={Login}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/verify/:id?" component={verifyaccount} />
              <Route path="/travsignup" component={TravelerSignup}></Route>
              <Route path="/guidesignup" component={GuideSignup}></Route>
              <Route path="/equipmentsignup" component={EquipmentSignup}></Route>
              <Route path="/forgotpassword" component={ForgotPassword}></Route>
              <Route path="/resetpassword" component={ResetPassword}></Route>
              <Route path="/travsignup" component={TravelerSignup}></Route>
              {/*{auth.isLoggedIn===true && auth.role==="User" ?<Route path = "/home" exact component= {Home}></Route>:<Route component={NotFoundPage} />}*/}
              <Route path="/donationshome" exact component={DonationsHome}></Route>
              {/* <Route path = "/welcome"  component = {Welcomepage}></Route> */}
              <Route path="/reserve" component={HotelBooking}></Route>
              <Route path="/hotels" component={Hotels}></Route>
              <Route path="/hoteldetails" component={BasicTabs}></Route>
              <Route path="/landingPage/" component={LandingPage}></Route>
              <Route path="/articles/" component={Articles}></Route>
              <Route path="/articleinfo/" component={ArticleInfo}></Route>
              <Route path = "/forums/" component= {Forums}></Route>
              <Route path = "/forumDetails/" component= {ForumDetails}></Route>
              <Route path = "/forumQuestion/" component= {forumQuestion}></Route>
              <Route path="/equipments/" component={Equipments}></Route>
              <Route path="/organizeTrip" component={oraganizeTrip}></Route>
              {/* <Route path = "/guide" component = {TravelingGuide}></Route> */}
              <Route path="/selectPackages" component={selectPackages}></Route>
              <Route path="/transport" component={Transport}></Route>
              <Route path="/editTrip" component={editTrip}></Route>
              <Route path="/organize" component={oraganizeTrip}></Route>

               {/* Traveler */}
              <Route path="/traveler/profile" component={TravelerProfile}></Route>
              <Route path="/traveler/trips" component={TravelerTrips}></Route>
              <Route path="/traveler/issues" component={TravelerIssues}></Route>
              <Route path="/welcome" component={Page}></Route>


              {/* Guide */}
              <Route path="/guide/profile" component={TravelingGuide}></Route>
              <Route path="/guide/trips" component={GuideTrips}></Route>
              <Route path="/guide/schedules" component={GuideSchedule}></Route>
              <Route path="/guide/history" component={GuideHistory}></Route>
              <Route path="/guide/payments" component={GuidePayements}></Route>

              {/* <Route path = "/guide/issues" component = {GuideIssues}></Route> */}

              {/* Transport service provider */}
              <Route path="/transportservice/profile" component={TransportProviderProfile}></Route>
              <Route path="/transportservice/trips" component={TransportProviderTrip}></Route>
              <Route path="/transportservice/history" component={TransportProviderTripHistory}></Route>
              <Route path="/transportservice/payments" component={TransportProviderPaymemts}></Route>
              <Route path="/transportservice/issues" component={TransportProviderIssues}></Route>
              <Route path="/transportservice/calendar" component={TransportProviderCalendar}></Route>

              {/* Hotel */}
              <Route path="/hotel/profile" component={HotelProfile}></Route>
              <Route path="/hotel/rooms" component={HotelRoom}></Route>


              {/* Admin */}
              <Route path="/admin/home" component={AdminHome}></Route>
              <Route path="/admin/hotels" component={AdminHotels}></Route>
              <Route path="/admin/transportation" component={AdminTranspotation}></Route>
              <Route path="/admin/articles" component={AdminArticles}></Route>
              <Route path="/admin/addarticle" component={AdminAddArticle}></Route>
              <Route path="/admin/addhotel" component={AdminAddHotel}></Route>
              <Route path="/admin/addtransporter" component={AdminAddTransporter}></Route>


              <Route path="/trav_selectPackages" component={selectPackages}></Route>
              <Route path="/camping/" component={CampingEquipment}></Route>
              <Route path="/daydistribution" component={DayDistribution}></Route>

            </Switch>
            
          </div>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;


