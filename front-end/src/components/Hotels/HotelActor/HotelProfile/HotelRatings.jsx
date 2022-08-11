import * as React from 'react';
import './hotelprofile.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

const HotelRatings = () => {
    return (
        <div className="details-address">
            <FontAwesomeIcon icon={faStar} className="rating-icon" />
            <FontAwesomeIcon icon={faStar} className="rating-icon" />
            <FontAwesomeIcon icon={faStar} className="rating-icon" />
            <FontAwesomeIcon icon={faStarHalf} className="rating-icon" />

        </div>
        
    );
}

export default HotelRatings;