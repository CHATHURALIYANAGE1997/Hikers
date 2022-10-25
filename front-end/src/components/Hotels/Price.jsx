import React from "react";
import "./bookingdetails.css";

const Price = () => {

    const singleprice = localStorage.getItem("singleprice");
    const single = localStorage.getItem("singleroom");
    const doubleprice = localStorage.getItem("doubleprice");
    const double = localStorage.getItem("doubleroom");
    const trippleprice = localStorage.getItem("trippleprice");
    const tripple = localStorage.getItem("trippleroom");
    console.log(singleprice);

    const price = single * singleprice + double * doubleprice + tripple * trippleprice;

    var d1 = new Date(localStorage.getItem("checkin"));
    var d2 = new Date(localStorage.getItem("checkout"));

    var diff = d2.getTime() - d1.getTime();

    var daydiff = diff / (1000 * 60 * 60 * 24);

    return (
        <div>
            <div className="d-flex flex-column p-3 mt-2 price-booking">
                <div className="d-flex flex-row justify-content-between">
                    <div className="price-price">Price</div>
                    <div className="price-price">LKR 34000.00</div>
                </div>
                <div className="price-currency mb-2">(Your currency)</div>

                <div className="price-currency">(for {daydiff} nights & all guests)</div>
            </div>
        </div>
    );
}

export default Price;