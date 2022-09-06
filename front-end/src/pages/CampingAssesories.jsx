import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/CampingEquipment/CampingNav/Sidebar";
import AccessoriesSort from "../components/CampingEquipment/CampingAssesories/AssesoriSort";
import "../components/CampingEquipment/CampingAssesories/Assesoreis.css";
import { useTitle } from "../components/Title/Title";
import AccesoriList from "../components/CampingEquipment/CampingAssesories/AssesoriesList";

const CampingAssesories = () => {
  useTitle("Hikers");

  return (
    <div className="d-flex flex-column campingContainer">
      <Navbar />
      <div className="d-flex flex-row campingContainersub">
        <div>
          <Sidebar />
        </div>
        <div className="d-flex flex-column campingAccessoriesWall">
          <AccessoriesSort />
          <AccesoriList />
        </div>
      </div>
    </div>
  );
};
export default CampingAssesories;
