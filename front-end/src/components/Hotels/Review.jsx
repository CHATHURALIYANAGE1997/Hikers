import React from "react";
import "./facilities.css";

const Reviews = () => {
    return (
        <div>
            <div className="p-2 hf-bg">
                <h5 className="review-title">Recent Guest Reviews</h5>
                <div className="bg-white hf-box">
                    <div className="d-flex flex-row justify-content-between">
                        <div>Stars</div>
                        <div className="review-traveler">Bimalka Peiris : June 20,2022 : 9.45 AM</div>
                    </div>
                    <h6>I have stayed in this hotel with my family and i am very happy to say that
                        they have an excellent customer service and the facilities are very good all the rooms are in good condition.Will recommend everyone</h6>
                </div>
                <div className="bg-white hf-box">
                    <div className="d-flex flex-row justify-content-between">
                        <div>Stars</div>
                        <div className="review-traveler">Bimalka Peiris : June 20,2022 : 9.45 AM</div>
                    </div>
                    <h6>The facilities are superb.Planning to stay in  this hotel again with my friends
                        in the next month .The food in the restaurant is fabulous</h6>
                </div>
                <div className="bg-white hf-box-2">
                    <div className="d-flex flex-row justify-content-between">
                        <div>Stars</div>
                        <div className="review-traveler">Bimalka Peiris : June 20,2022 : 9.45 AM</div>
                    </div>
                    <h6>The environment is very nice.The food is clean and rooms are in good conditions.There was a small issue with the receiptionist as they were a bit late and we had to wait a little longer to book a room</h6>
                </div>
            </div>
        </div>
    );
}

export default Reviews;