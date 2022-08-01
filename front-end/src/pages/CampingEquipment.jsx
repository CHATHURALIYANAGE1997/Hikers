import React from "react";
import Navbar from "../components/Navbar/Navbar";
import campingequipment from "../components/CampingEquipment/campingequipment.css";
import Sidebar from "../components/CampingEquipment/Sidebar";
import { useTitle } from "../components/Title/Title";
// import background from "../components/images/background.jpg";




const CampingEquipment = () => {
    useTitle("Hikers")


    return (
        <div className="campingContainer">
            <Navbar/>
            <Sidebar/>
                             
       </div>
           
       
    
        
    )

}
export default CampingEquipment;