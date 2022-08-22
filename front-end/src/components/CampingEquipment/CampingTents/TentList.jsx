import React from "react";
import threetent from "./threetent.jpg";
import renter from "./renter.jpeg";

const TentList = () => {
  return (
    // <div className="d-flex flex-row tent-list-container">
    //   <div class="card tent-camping-card">
    //     <div class="row">This is some text within a card body.</div>
    //   </div>
    // </div>
    <div className="d-flex flex-row tent-list-container">
      <div className="card tent-camping-card">
        <div className="card-body">
          <div className="row g-2">
            <div className="col-md-3 border-danger">
              <p className="tent-price font-weight-bold">
                <small>Rs.600(Per Day)</small>
              </p>
              <img
                className="camping-tent-img-top"
                src={threetent}
                alt="Tent image "
              ></img>
            </div>
            <div className="col-md-5">
              <p className="tent-description font-weight-bold">
                <medium>02 person waterproof camping tent</medium>
              </p>
              <p className="tent-description font-weight-bold">
                <medium>
                  Scan Alpine tent is a 3 season premium quality locally made
                  camping tent.This gear will stand against any wather condition
                  and it will keep you dry throughout your adventure.
                </medium>
              </p>
            </div>
            <div className="col-md-4 tent-contact-details">
              <div className="row">
                <h5 className="tent-contact-title">Contact Details</h5>
                <div className="col text-center">
                  <img
                    className="camping-contact-img-top"
                    src={renter}
                    alt="Contact image "
                  ></img>
                </div>
                <div className="mt-2 d-flex flex-column tent-contact">
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
      <div className="card tent-camping-card">
        <div className="card-body">
          <div className="row g-2">
            <div className="col-md-3 border-danger">
              <p className="tent-price font-weight-bold">
                <small>Rs.600(Per Day)</small>
              </p>
              <img
                className="camping-tent-img-top"
                src={threetent}
                alt="Tent image "
              ></img>
            </div>
            <div className="col-md-5">
              <p className="tent-description font-weight-bold">
                <medium>02 person waterproof camping tent</medium>
              </p>
              <p className="tent-description font-weight-bold">
                <medium>
                  Scan Alpine tent is a 3 season premium quality locally made
                  camping tent.This gear will stand against any wather condition
                  and it will keep you dry throughout your adventure.
                </medium>
              </p>
            </div>
            <div className="col-md-4 tent-contact-details">
              <div className="row">
                <h5 className="tent-contact-title">Contact Details</h5>
                <div className="col text-center">
                  <img
                    className="camping-contact-img-top"
                    src={renter}
                    alt="Contact image "
                  ></img>
                </div>
                <div className="mt-2 d-flex flex-column tent-contact">
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
export default TentList;
