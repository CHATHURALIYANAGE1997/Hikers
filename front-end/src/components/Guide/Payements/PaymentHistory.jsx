import React from "react";
import './payments.css';

const PaymentHistory = () => {
    return (
        <div className="">
            <div className="d-flex flex-row payment-table">
                <div className="w-25 payment-history-travel">Hanthana Travel</div>
                <div className="w-25 payment-history-date">04.03.2022</div>
                <div className="w-50 payment-history-amount">LKR 10,250</div>
            </div>
            <hr className="payment-history-line"></hr>
            <div className="d-flex flex-row payment-table">
                <div className="w-25 payment-history-travel">Hanthana Travel</div>
                <div className="w-25 payment-history-date">04.03.2022</div>
                <div className="w-50 payment-history-amount">LKR 10,250</div>
            </div>
            <hr className="payment-history-line"></hr>
        </div>
    );
}

export default PaymentHistory;