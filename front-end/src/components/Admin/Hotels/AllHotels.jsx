import React from "react";
import './adminhotels.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const AllHotels = () => {
    return (
        <div className="d-flex flex-column all-hotels-container">
            <div className="d-flex flex-row justify-content-between">
                <h4>Current Hotels</h4>
                <a href='/admin/addhotel'><button className="all-hotels-add-btn"><FontAwesomeIcon icon={faPlus} className="all-hotels-icon" />New Hotel</button></a>
            </div>
            <div className="d-flex flex-row justify-content-between all-hotels-hotel">
                <span>Araliya Villa Spa - Sigiriya</span>
                <div>
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr"/>
            <div className="d-flex flex-row justify-content-between all-hotels-hotel">
                <span>Araliya Villa Spa - Sigiriya</span>
                <div>
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr"/>
            <div className="d-flex flex-row justify-content-between all-hotels-hotel">
                <span>Araliya Villa Spa - Sigiriya</span>
                <div>
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr"/>
            <div className="d-flex flex-row justify-content-between all-hotels-hotel">
                <span>Araliya Villa Spa - Sigiriya</span>
                <div>
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr"/>
            <div className="d-flex flex-row justify-content-between all-hotels-hotel">
                <span>Araliya Villa Spa - Sigiriya</span>
                <div>
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr"/>
            <div className="d-flex flex-row justify-content-between all-hotels-hotel">
                <span>Araliya Villa Spa - Sigiriya</span>
                <div>
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr"/>
            <div className="d-flex flex-row justify-content-between all-hotels-hotel">
                <span>Araliya Villa Spa - Sigiriya</span>
                <div>
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr"/>
        </div>
    );
}

export default AllHotels;