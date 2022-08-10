import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/CampingEquipment/CampingNav/Sidebar";
import Wall from "../components/CampingEquipment/Wall/Wall";
import { useTitle } from "../components/Title/Title";


const CampingEquipment = () => {
    useTitle("Hikers")

    return (
     
            <div className="d-flex flex-column campingContainer">
                <Navbar/>
                <div className="d-flex flex-row campingContainersub">
                    <div>
                    <Sidebar/>
                    </div>
                    <div class="d-flex flex-column campingWall">   
                    <Wall/>
                    </div>  
                </div>                       
            </div>
       
       
    
        
    )

}
export default CampingEquipment;