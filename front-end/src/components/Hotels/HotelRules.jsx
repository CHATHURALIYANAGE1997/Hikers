import React from "react";
import "./facilities.css";

const HotelRules = () => {
    return (
        <div>
            <div className="p-2 hf-bg">
                <h5 className="review-title">Recent Guest Reviews</h5>
                <div className="bg-white hf-box">
                    <h6>This is a paid facility for hotel guests with an admission fee.</h6>
                </div>
                <div className="bg-white hf-box">
                    <div className="d-flex flex-row justify-content-between">
                        <div>Stars</div>
                        <div className="review-traveler">Bimalka Peiris : June 20,2022 : 9.45 AM</div>
                    </div>
                    <h6>Swimsuits and swim caps are required to use in the swimming pool.Shower rooms and personal lockers are available for use.Guests under 14 years old may enter only when accompanied by an adult .</h6>
                </div>
                <div className="bg-white hf-box-2">
                    <div className="d-flex flex-row justify-content-between">
                        <div>Stars</div>
                        <div className="review-traveler">Bimalka Peiris : June 20,2022 : 9.45 AM</div>
                    </div>
                    <h6>Outside food is not permitted in the swimming pool</h6>
                </div>
            </div>
        </div>
    );
}

export default HotelRules;