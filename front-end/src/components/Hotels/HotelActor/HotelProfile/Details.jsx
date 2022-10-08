import * as React from 'react';
import './hotelprofile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashCan, faPencil } from "@fortawesome/free-solid-svg-icons";


export default function Details(props) {

    const displayDetails = (props) => {

        const { details } = props;

        return (
            <div className="d-flex flex-column details-address pt-3">
                <div className='d-flex flex-row w-100'>
                    <span className='w-25 details-col1'>Address</span>
                    <span>:</span>
                    <span className='details-col2'>{details.address}</span>
                </div>
                <hr></hr>
                <div className='d-flex flex-row w-100'>
                    <span className='w-25 details-col1'>Phone number</span>
                    <span>:</span>
                    <span className='details-col2'>{details.contactNumber}</span>
                </div>
                <hr></hr>
                <div className='d-flex flex-row w-100'>
                    <span className='w-25 details-col1'>Email</span>
                    <span>:</span>
                    <span className='details-col2'>{details.email}</span>
                </div>
                <hr></hr>
                <div className='d-flex flex-row w-100'>
                    <span className='w-25 details-col1'>Ratings</span>
                    <span>:</span>
                    <span className='details-col2'>{details.rate} / 5</span>
                </div>
                <hr></hr>
                <div className='d-flex flex-row w-100'>
                    <span className='w-25 details-col1'>Bank</span>
                    <span>:</span>
                    <span className='details-col2'>BOC</span>
                </div>
                <hr></hr>
                <div className='d-flex flex-row w-100'>
                    <span className='w-25 details-col1'>Bank account Number</span>
                    <span>:</span>
                    <span className='details-col2'>500-12345-1234</span>
                </div>
                <hr></hr>
                <div className='d-flex flex-row w-100'>
                    <span className='w-25 details-col1'>Branch</span>
                    <span>:</span>
                    <span className='details-col2'>Kurunegala</span>
                </div>
                <hr></hr>

                {/* <div className='d-flex flex-column mt-4 w-100'>
                    <div className='d-flex flex-row justify-content-between'>
                        <h4 className='details-facilities'>Hotel Rules</h4>
                        <div className='details-facilities-plus'>
                            <button type="button" class="btn btn-primary"><FontAwesomeIcon icon={faPlus} className="rating-plus-icon" /> Add New Rule</button>
                        </div>
                    </div>
                    <div className='details-facility-container'>
                        <div className='d-flex flex-row justify-content-end'>
                            <FontAwesomeIcon icon={faPencil} className="rating-pencil-icon" />
                        </div>
                        <ul>
                            <li>This is a paid facility for hotel guests with an admission fee.</li>
                            <li>Swimsuits and swim caps are required to use in the swimming pool.Shower rooms and personal lockers are available for use.Guests under 14 years old may enter only when accompanied by an adult .</li>
                            <li>Outside food is not permitted in the swimming pool</li>
                        </ul>
                    </div>
                </div> */}
            </div>
        );
    }

    return (
        <>
            {displayDetails(props)}
        </>
    )
}

// export default Details;