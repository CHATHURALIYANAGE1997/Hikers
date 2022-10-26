import React, { useState, useEffect, useSelector } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide, faVanShuttle } from "@fortawesome/free-solid-svg-icons";
import "./schedule.css";
import axios from "axios";
import authToken from "../../../utils/authToken";

const Today = (props) => {
  const { email } = props;

  if (localStorage.jwtToken) {
    authToken(localStorage.jwtToken);
  }

  const accessToken = localStorage.jwtToken;

  const [guiders, setGuiders] = useState("");

  //   const email = auth.username;

  const url = `http://localhost:8080/travelingguide/getAllTrip/${email}`;

  useEffect(() => {
    getAllGuiders();
  }, []);

  const getAllGuiders = () => {
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        const allGuiders = response.data;
        setGuiders(allGuiders);
        console.log(allGuiders);
        console.log("IIII");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const TodayTrip = (props) => {
    if (guiders.length > 0) {
      return guiders.map((guiders) => {
        if (guiders.date == "20221026") {
          return (
            <div class="today-container w-100">
              <div className="d-flex flex-column today-card">
                <div className="d-flex flex-row justify-content-between">
                  <h5 className="today-title">Today</h5>
                  <h7 className="today-date">guide</h7>
                </div>
                <h7>Starting : 9.00 AM</h7>
                <h7>Ending : 7.00 PM</h7>
                <h3 className="today-trip">Trip to {guiders.mountain}</h3>
                <div className="today-transport mb-3 d-flex flex-row">
                  <div className="d-flex flex-column w-50 text-left">
                    <h6 className="today-transport-mode">Transport</h6>
                    <div>
                      <FontAwesomeIcon
                        icon={faVanShuttle}
                        className="today-icon"
                      />
                      <h7 className="today-vehicle-number">CBA - ##### </h7>
                    </div>
                  </div>
                  <div className="d-flex flex-column text-left">
                    {/* <h6 className="today-transport-mode">Food</h6>
                          <div>
                            <h7 className="today-food">03 - Veg, 05 - Chicken</h7>
                          </div> */}
                  </div>
                </div>
                <div className="d-flex flex-column text-left">
                  <h6 className="today-transport-mode">Hotel</h6>
                  <div>
                    <h7 className="today-food">The Epitome</h7>
                  </div>
                </div>
                <hr />
                <h6>Team details</h6>
                <div className="d-flex flex-row">
                  <div className="d-flex flex-column today-members">
                    <h5>{guiders.name}</h5>
                    <span>Mr. AW Perera</span>
                    <span>95#######V</span>
                    <span>078234567</span>
                  </div>
                  <div className="d-flex flex-column today-members">
                    <h5>Member 1#</h5>
                    <span>Mr. AW Perera</span>
                    <span>95#######V</span>
                    <span>078234567</span>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      });
    }
  };
  return <>{TodayTrip(props)}</>;
};

export default Today;
