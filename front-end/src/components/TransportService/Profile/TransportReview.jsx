import React from "react";
import './transportprofile.css';

const TransportReview = () => {
    return (
        <div class="transport-review-container">
            <div className="transport-review-card">
                <h5 className="text-left">Experience</h5>
                <div className="d-flex flex-column pl-2">
                    <div className="d-flex flex-row justify-content-center">
                        <div className="mr-2 w-25">
                            <small>Time Management</small>
                        </div>
                        <div class="progress mb-3 gr-progress">
                            <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <div className="mr-2 w-25">
                            <small>Trust Worthiness</small>
                        </div>
                        <div class="progress mb-3 gr-progress">
                            <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransportReview;