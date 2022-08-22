import React from "react";
import './adminarticles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const Questions = () => {
    return (
        <div className="d-flex flex-column w-50 questions-container">
            <h5>Recent questions</h5>
            <div className="d-flex flex-row justify-content-between questions-recent">
                <div>
                    <span className="questions-topic">New Reply </span>
                    <span>: Public transport in Dambulla</span>
                </div>
                <button className="questions-see-more-btn"><FontAwesomeIcon icon={faAngleDoubleRight} className="questions-see-more-icon"/></button>
            </div>
            <div className="d-flex flex-row justify-content-between questions-recent">
                <div>
                    <span className="questions-topic">New Question </span>
                    <span>: Public transport in Nuwara Eliya</span>
                </div>
                <button className="questions-see-more-btn"><FontAwesomeIcon icon={faAngleDoubleRight} className="questions-see-more-icon"/></button>
            </div>

            <hr/>

            <h5>Questions asked by travelers</h5>
            <div className="input-group w-100 justify-content-center mb-3">
                <div className="form-outline w-75 mr-auto ml-auto">
                    <input type="search" id="form1" className="form-control history-input" placeholder="Search" />
                </div>
                <button type="button" className="btn btn-primary history-search-btn">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            <div className="d-flex flex-row justify-content-between questions-question">
                <div className="d-flex flex-column">
                    <span className="all-articles-title">Dolukanda forums</span>
                    <span className="all-articles-see-more-btn">see more..</span>
                </div>
                <button className="questions-view-btn">View</button>
            </div>
            <div className="d-flex flex-row justify-content-between questions-question">
                <div className="d-flex flex-column">
                    <span className="all-articles-title">Dolukanda forums</span>
                    <span className="all-articles-see-more-btn">see more..</span>
                </div>
                <button className="questions-view-btn">View</button>
            </div>
            <div className="d-flex flex-row justify-content-between questions-question">
                <div className="d-flex flex-column">
                    <span className="all-articles-title">Dolukanda forums</span>
                    <span className="all-articles-see-more-btn">see more..</span>
                </div>
                <button className="questions-view-btn">View</button>
            </div>
            <div className="d-flex flex-row justify-content-between questions-question">
                <div className="d-flex flex-column">
                    <span className="all-articles-title">Dolukanda forums</span>
                    <span className="all-articles-see-more-btn">see more..</span>
                </div>
                <button className="questions-view-btn">View</button>
            </div>
        </div>
    );
}

export default Questions;