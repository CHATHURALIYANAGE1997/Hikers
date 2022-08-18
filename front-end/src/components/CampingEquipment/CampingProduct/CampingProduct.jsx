import React from "react";
import './CampingProduct.css';
import bbq from "./bbq.jpg"; 
import persontent from "./persontent.jpg";
import campinglight from "./campinglight.png";
import threetent from "./threetent.jpg"; 
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function GroupExample() {
  return (
  
         <div className="card-group">
          <div className="card">
            <img className="mx-auto campingcard-img-top" src={bbq} alt="Card image cap"></img>
            <div className="card-body">
              <h6 className="card-title">BBQ Machine</h6>
              <p className="card-text"><small>Small Portable BBQ Barbecue Steel Charcoal Grill Out Door.</small></p>
              <p className="camping-price font-weight-bold"><small>Rs.450(Per Day)</small></p>
              <a href="#" class="btn btn-primary btn-sm">View More</a>
            </div>
          </div>
          <div className="card">
            <img className="mx-auto campingcard-img-top" src={campinglight} alt="Card image "></img>
            <div className="card-body">
              <h6 className="card-title">Camping Light</h6>
              <p className="card-text"><small>HARPER LIVING Rechargeable Camping LED Retro Water Resistant</small></p>
              <p className="camping-price font-weight-bold"><small>Rs.200(Per Day)</small></p>
              <a href="#" class="btn btn-primary btn-sm">View More</a>
            </div>
          </div>
          <div className="card">
            <img className="mx-auto campingcard-img-top" src={persontent} alt="Card image "></img>
            <div className="card-body">
              <h6 className="card-title">Two Person Tent</h6>
              <p className="card-text"><small>Portal Outdoors Unisex's Zeta Spacious Dome Tent</small></p>
              <p className="camping-price font-weight-bold"><small>Rs.600(Per Day)</small></p>
              <a href="#" class="btn btn-primary btn-sm">View More</a>
            </div>
          </div>
          <div className="card">
            <img className="mx-auto campingcard-img-top" src={threetent} alt="Card image "></img>
            <div className="card-body">
              <h6 className="card-title">Three Person Tent</h6>
              <p className="card-text"><small>High Peak Lightweight Minilite Unisex Outdoor Frame Tent</small></p>
              <p className="camping-price font-weight-bold"><small>Rs.750(Per Day)</small></p>
              <a href="#" class="btn btn-primary btn-sm">View More</a>
            </div>
          </div>
      </div>
     
  


  );
}

export default GroupExample;