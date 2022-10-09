import * as React from 'react';
import './hotelroom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faWifi, faPlus } from "@fortawesome/free-solid-svg-icons";

const Rooms = (props) => {

    const { room } = props;

    const displayDetails = (props) => {
        if (room.length > 0) {
            const id = localStorage.getItem("id");
            let beds = "01 Single bed";
            return (
                room.map((room, index) => {
                    if(room.sleeps == 2){
                        beds = "01 Double bed";
                    }
                    else if(room.sleeps == 3){
                        beds = "01 Double bed + 01 Single bed";
                    }
                    if (id == room.hotel_id) {
                        return (
                            <>
                                <div className='d-flex flex-column rooms-card'>
                                    <h3 className='text-capitalize'>{room.room_type}</h3>
                                    <span className='m-auto h6'><FontAwesomeIcon icon={faBed} className='rooms-icon' />{beds}</span>
                                    <span className='m-auto'>No. of Sleeps : 0{room.sleeps}</span>
                                    <span className='m-auto'><FontAwesomeIcon icon={faWifi} className='rooms-icon' />{room.facility}</span>
                                    <span className='m-auto'>{room.food} included</span>
                                    <div className='rooms-price'>
                                        <span className='rooms-price-span h4'>LKR {room.amount} /= </span>
                                    </div>
                                </div>
                            </>
                        )
                    }
                })
            )
        }
    }

    return(
        <>
            {displayDetails(props)}
        </>
    )

    // return (
    //     <div className="d-flex flex-column w-100 p-3 mb-2">
    //         <div className='d-flex flex-row w-100 justify-content-between pb-2'>
    //             <h4 className='rooms-rooms'>Rooms</h4>
    //             <div className='rooms-plus'>
    //                 <button type="button" class="btn btn-primary"><FontAwesomeIcon icon={faPlus} className="rating-plus-icon" /> Add Room Type</button>
    //             </div>
    //         </div>
    //         <div className='d-flex flex-row rooms-card-container'>
    //             <div className='d-flex flex-column rooms-card'>
    //                 <h5>Single Room</h5>
    //                 <span className='m-auto'><FontAwesomeIcon icon={faBed} className='rooms-icon' /> 01 Single bed</span>
    //                 <span className='m-auto'>No. of Sleeps : 01</span>
    //                 <span className='m-auto'><FontAwesomeIcon icon={faWifi} className='rooms-icon' />Free Wifi</span>
    //                 <span className='m-auto'>Breakfast included</span>
    //                 <div className='rooms-price'>
    //                     LKR 10, 500
    //                 </div>
    //             </div>
    //             <div className='d-flex flex-column rooms-card'>
    //                 <h5>Double Room</h5>
    //                 <span className='m-auto'><FontAwesomeIcon icon={faBed} className='rooms-icon' /> 01 Double bed</span>
    //                 <span className='m-auto'>No. of Sleeps : 02</span>
    //                 <span className='m-auto'><FontAwesomeIcon icon={faWifi} className='rooms-icon' />Free Wifi</span>
    //                 <span className='m-auto'>Breakfast included</span>
    //                 <div className='rooms-price'>
    //                     LKR 10, 500
    //                 </div>
    //             </div>
    //             <div className='d-flex flex-column rooms-card'>
    //                 <h5>Tripple Room</h5>
    //                 <div className='d-flex flex-column'>
    //                     <span className='m-auto'><FontAwesomeIcon icon={faBed} className='rooms-icon' /> 01 Single bed</span>
    //                     <span>01 Double bed</span>
    //                 </div>
    //                 <span className='m-auto'>No. of Sleeps : 03</span>
    //                 <span className='m-auto'><FontAwesomeIcon icon={faWifi} className='rooms-icon' />Free Wifi</span>
    //                 <span className='m-auto'>Breakfast & Dinner included</span>
    //                 <div className='rooms-price'>
    //                     LKR 10, 500
    //                 </div>
    //             </div>
    //             <div className='d-flex flex-column rooms-card'>
    //                 <h5>Tripple Room</h5>
    //                 <div className='d-flex flex-column'>
    //                     <span className='m-auto'><FontAwesomeIcon icon={faBed} className='rooms-icon' /> 01 Single bed</span>
    //                     <span>01 Double bed</span>
    //                 </div>
    //                 <span className='m-auto'>No. of Sleeps : 03</span>
    //                 <span className='m-auto'><FontAwesomeIcon icon={faWifi} className='rooms-icon' />Free Wifi</span>
    //                 <span className='m-auto'>Breakfast & Dinner included</span>
    //                 <div className='rooms-price'>
    //                     LKR 10, 500
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
}

export default Rooms;