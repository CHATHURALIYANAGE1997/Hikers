import React from "react";
import './ourprojects.css';
import { FaDonate,FaUsers,FaHandshake } from "react-icons/fa";


const OurProjects = () => {
  return (
    <div>
      <h5 className="projectsh5">GET INVOLVED</h5>
      <h2 className="projectsh2">Let's Make A Difference Today</h2>

      <div class="donationcardcontainer">
        <div class="row justify-content-md-center">
          <div class="col-md-auto">
            <div class="card border-primary mb-3">
            <div className="donationicons"><FaUsers/></div>
              <div class="card-body text-primary">
                <h5 class="donationcard-title">Become A Volunteer</h5>
                <p class="donationcard-text">Come and join with us to protect our world by cleaning our environment </p>
              </div>
            </div>
          </div>
          <div class="col-md-auto">
            <div class="card border-primary mb-3">
            <div className="donationicons"><FaDonate /></div>
              <div class="card-body text-primary">
                <h5 class="donationcard-title">Donate to Support</h5>
                <p class="donationcard-text">Help us continue our work by donating a samll amount which can help us to protect our nature.</p>
              </div>
            </div>
          </div>
          <div class="col col-lg-2">
            <div class="card border-primary mb-3">
            <div className="donationicons"><FaHandshake/></div>
              <div class="card-body text-primary">
                <h5 class="donationcard-title">Become a Partner</h5>
                <p class="donationcard-text">Partner up with us to raise funds for many community service projects which helps us to protect our world.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurProjects;