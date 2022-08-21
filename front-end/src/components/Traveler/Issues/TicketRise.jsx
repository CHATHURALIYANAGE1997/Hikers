import React from "react";
import './ticketrise.css';

const TicketRise = () => {
    return (
        <div className="w-100">
            <h4 className="transport-issues-title">On-going trips</h4>
            <h5 className="transport-issues-title">Trip details</h5>
            <div className="d-flex flex-column transport-issues-container">
                <div className="d-flex flex-row justify-content-between">
                    <h5 className="transport-issues-trip-title">Trip from Kurunegala town to Dolukanda</h5>
                    <h5>Date : 30th July 2022</h5>
                </div>
                <div className="d-flex flex-row">
                    <h6 className="w-25">Traveleing Guide</h6>
                    <h6>: Mr. Kasun Perera</h6>
                </div>
                <div className="d-flex flex-row">
                    <h6 className="w-25">Transport Service Provider</h6>
                    <h6>: Mr. Kasun Perera</h6>
                </div>
                <div className="d-flex flex-row">
                    <h6 className="w-25">Vehicle Type</h6>
                    <h6>: Car</h6>
                </div>
                <div className="d-flex flex-row">
                    <h6 className="w-25">Vehicle Number</h6>
                    <h6>: CBA-1234</h6>
                </div>
                <h5>Rise a ticket</h5>
                <span>If you have any complaints regarding the trip rise a ticket</span>
                <form>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                            I am not satisfing with traveling guide.
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                            I am not satisfing with transport facilities.
                        </label>
                    </div>
                    <div class="form-group">
                        <label for="comment">Your issue :</label>
                        <textarea class="form-control ticket-description" rows="5" id="comment"></textarea>
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                        <button type="button" className="transport-issues-submit-btn">Rise a ticket</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TicketRise;