import React from "react";
import './profile.css';

const GuideReview = () => {
    return (
        <div class="gr-container">
            <div className="gr-card">
                <h5 className="text-left">Experience</h5>
                <div className="d-flex flex-column pl-2">
                    <div className="d-flex flex-row justify-content-center">
                        <div className="gr-experience">
                            <small>Guiding knowledge</small>
                        </div>
                        <div class="progress mb-3 gr-progress">
                            <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <div className="gr-experience">
                            <small>Trustworthiness</small>
                        </div>
                        <div class="progress mb-3 gr-progress">
                            <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <div className="gr-experience">
                            <small>Friendlyness</small>
                        </div>
                        <div class="progress mb-3 gr-progress">
                            <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <div className="gr-experience">
                            <small>Time management</small>
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

export default GuideReview;