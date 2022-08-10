import React from "react";
import './wallCamping.css';
import CampingSearch from "../Searchbar/CampingSearch";


const Wall = () => {
    return (
        
         <div className="d-flex flex-column picture-row">
            <div className="mt-4 row">
              <h1 className="camping-heading">Camping Equipment</h1> 
            </div>
            <div className="mt-4 row align-self-center campingSearch">
              <CampingSearch/>
            </div>                 
        </div>
                
    );
}
export default Wall;