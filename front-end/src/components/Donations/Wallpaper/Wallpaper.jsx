import React from "react";
import './wallpaperdonation.css';


const Wallpaper = () => {
  return (

    <div className="donationwallpaper">
      
        <h4 className="donation-h4">CONTRIBUTE TO PROTECT OUR NATURE</h4>
        <h1 className="donation-h1">Your Small Help Can Make A Difference</h1>
        <div class="row">
          <div class="col-8">
            <h5 className="donation-h5">Having smaller and more sustainable families. #Hikers families are protecting nature like nothing else that anyone can do.
              If you want a better future free from the climate and other ecological crises support the #Hikers revolution today.
              Your donation goes to the most just and effective way to fight the crises we all face today,
              from the climate to the massive gap between rich and poor. Give to have the biggest impact!</h5>
            <br />
            <button type="button" class="btn btn-warning donatebtn">Donate fund</button>
          </div>
        <div class="col-4">
          <div class="donationform-box">
            <div class="donationheader-text">
              Be a volunteer
            </div>
            <input placeholder="Enter Name" type="text" />
            <input placeholder="Enter Email" type="email" />
            <input placeholder="Enter Phone No" type="text" />
            {/* <select class="form-control">
              <option selected>Select a type</option>
              <option value="1">Volunteer</option>
              <option value="2">Partner</option>
            </select> */}
            <button>Involve Now</button>
          </div>
        </div>
      </div>
    </div>


  );
}
export default Wallpaper;