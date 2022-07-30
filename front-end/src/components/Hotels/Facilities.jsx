import React from "react";
import "./facilities.css";

const Facilities = () => {
    return (
        <div>
            <div className="hf-bg">
                <div className="bg-white hf-box f-title">
                    <h4 className="font-weight-bold">Swimming Pool</h4>
                    <h6 className="f-content">This is a paid facility for hotel guests with an admission fee.
                        Swimsuits and swim caps are required to use in the swimming pool.Shower rooms and personal lockers are available for use.Guests under 14 years old may enter only when accompanied by an adult
                        .Outside food is not permitted in the swimming pool</h6>
                </div>
                <div className="bg-white hf-box f-title">
                    <h4 className="font-weight-bold f-content">Billiard Boards</h4>
                    <h6>Our hotel has a full-size billiard table available for all, providing an ideal activity to enjoy with family. Also on hand are a billiards captain and an assistant to teach and help you keep score and rack up the balls.</h6>
                </div>
                <div className="bg-white hf-box f-title">
                    <h4 className="font-weight-bold f-content">Feast 365 - Restaurant</h4>
                    <h6>Enjoy all day dining restaurant with exclusive buffet for all three major meals and the À la carte menu with traditional and international dishes. Our grand restaurant can host 150 guests at a time. And the action food station is something not to be missed.</h6>
                </div>
                <div className="bg-white hf-box-2 f-title">
                    <h4 className="font-weight-bold f-content">Cloud 9 - Café</h4>
                    <h6>Treat yourself with a warm aromatic coffee, high tea or an invigorating cup of tea. Experience the high quality brand of coffee with freshly prepared specialized cakes, pastries, breads and desserts to dine in or take away while enjoying the privilege of free Wi-Fi.</h6>
                </div>
            </div>
        </div>
    );
}

export default Facilities;