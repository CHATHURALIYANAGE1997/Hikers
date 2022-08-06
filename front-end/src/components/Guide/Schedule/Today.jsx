import React from "react";
import './schedule.css';

const Today = () => {
    return (
        <div class="today-container">
            <div className="d-flex flex-column today-card">
                <div className="d-flex flex-row">
                    <h5 className="today-title">Today</h5>
                    <h7 className="today-date">27th July 2022</h7>
                </div>
            </div>
        </div>
    );
}

export default Today;