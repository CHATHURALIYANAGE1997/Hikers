import React from "react";
import sleepBag from "./sleep-bag.jpg";
import campingLight from "./camping-light.png";
import renter from "./renter.jpeg";

const AccesoriList = () => {
  return (
    // <div className="d-flex flex-row tent-list-container">
    //   <div class="card tent-camping-card">
    //     <div class="row">This is some text within a card body.</div>
    //   </div>
    // </div>
    <div className="d-flex flex-row accessori-list-container">
      <div className="card accessori-camping-card">
        <div className="card-body">
          <div className="row g-2">
            <div className="col-md-3 border-danger">
              <p className="accessori-price font-weight-bold">
                <small>Rs.700(Per Day)</small>
              </p>
              <img
                className="camping-accessori-img-top"
                src={sleepBag}
                alt="Tent image "
              ></img>
            </div>
            <div className="col-md-5">
              <p className="accessori-description font-weight-bold">
                <medium>Sleeping Bag</medium>
              </p>
              <p className="accessori-description font-weight-bold">
                <medium>
                    The closest Big Agnes has ever come to sleeping in a real 
                    bed in the backcountry, the Camp Robber Bedroll's plush and 
                    lofty quilt and soft, fitted sheet-like pad cover will have
                    you convinced you booked a room at a 5-star hotel. 
                </medium>
              </p>
            </div>
            <div className="col-md-4 accessori-contact-details">
              <div className="row">
                <h5 className="accessori-contact-title">Contact Details</h5>
                <div className="col text-center">
                  <img
                    className="camping-accessori-contact-img-top"
                    src={renter}
                    alt="Contact image "
                  ></img>
                </div>
                <div className="mt-2 d-flex flex-column accessori-contact">
                  <div>Name :Gayan Dias</div>
                  <div>Telephone: 070-1702926</div>
                  <div>Email: dias@gmail.com</div>
                  <div>Address:No.120,Borelesgamuwa,Colombo</div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card accessori-camping-card">
        <div className="card-body">
          <div className="row g-2">
            <div className="col-md-3 border-danger">
              <p className="tent-price font-weight-bold">
                <small>Rs.750(Per Day)</small>
              </p>
              <img
                className="camping-accessori-img-top"
                src={campingLight}
                alt="Tent image "
              ></img>
            </div>
            <div className="col-md-5">
              <p className="accessori-description font-weight-bold">
                <medium>Camping Light</medium>
              </p>
              <p className="accessori-description font-weight-bold">
                <medium>
                    Collapsible Portable LED Camping Lantern XTAUTO Lightweight Waterproof
                    Solar USB Rechargeable LED Flashlight Survival Kits for Indoor Outdoor 
                    Home Emergency Light Power Outages Hiking Hurricane 4-Pack
                </medium>
              </p>
            </div>
            <div className="col-md-4 accessori-contact-details">
              <div className="row">
                <h5 className="accessori-contact-title">Contact Details</h5>
                <div className="col text-center">
                  <img
                    className="camping-accessori-contact-img-top"
                    src={renter}
                    alt="Contact image "
                  ></img>
                </div>
                <div className="mt-2 d-flex flex-column accessori-contact">
                  <div>Name :Gayan Dias</div>
                  <div>Telephone: 070-1702926</div>
                  <div>Email: dias@gmail.com</div>
                  <div>Address:No.120,Borelesgamuwa,Colombo</div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccesoriList;
