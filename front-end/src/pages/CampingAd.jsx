import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/CampingEquipment/CampingNav/Sidebar";
import { useTitle } from "../components/Title/Title";
import "../components/CampingEquipment/CampingAd/CampingAd.css";


const CampingAd = () => {
    useTitle("Hikers");
  
    return (
      <div className="d-flex flex-column campingContainer">
        <Navbar />
        <div className="d-flex flex-row campingContainersub">
          <div>
            <Sidebar />
          </div>
          <div className="d-flex flex-column campingAdWall">
          
          </div>
        </div>
      </div>
    );
  };
  export default CampingAd;
  