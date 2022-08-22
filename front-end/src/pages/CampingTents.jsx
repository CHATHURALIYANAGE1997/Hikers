import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/CampingEquipment/CampingNav/Sidebar";
import TentSort from "../components/CampingEquipment/CampingTents/TentSort";
import "../components/CampingEquipment/CampingTents/CampingTents.css";
import { useTitle } from "../components/Title/Title";
import TentList from "../components/CampingEquipment/CampingTents/TentList";

const CampingTents = () => {
  useTitle("Hikers");

  return (
    <div className="d-flex flex-column campingContainer">
      <Navbar />
      <div className="d-flex flex-row campingContainersub">
        <div>
          <Sidebar />
        </div>
        <div className="d-flex flex-column campingTentWall">
          <TentSort />
          <TentList />
        </div>
      </div>
    </div>
  );
};
export default CampingTents;
