import * as React from 'react';
import './hotelroom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faWifi, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";

const RoomPackages = (props) => {

    const { fpackage } = props;

    const displayDetails = (props) => {
        if (fpackage.length > 0) {
            const id = localStorage.getItem("id");
            return (
                fpackage.map((fpackage, index) => {
                    if (id == fpackage.hotel_id) {
                        let sleeps = [];
                        for(let i=0; i<fpackage.sleeps; i++){
                            sleeps.push(<FontAwesomeIcon icon={faUser} className='room-package-icon' />)
                        }
                        
                        return (
                            <>
                                <div className='d-flex flex-column room-package-card'>
                                    <h3 className='text-capitalize'>{fpackage.package_type}</h3>
                                    <span className='m-auto h6'><FontAwesomeIcon icon={faBed} className='rooms-icon' />{fpackage.no_double_bed} Double beds + {fpackage.no_single_bed} Single beds</span>
                                    <span className='m-auto'>
                                        Sleeps :
                                        {/* <FontAwesomeIcon icon={faUser} className='room-package-icon' />
                                        <FontAwesomeIcon icon={faUser} className='room-package-icon' />
                                        <FontAwesomeIcon icon={faUser} className='rooms-icon' />
                                        <FontAwesomeIcon icon={faUser} className='rooms-icon' /> */}
                                        {sleeps} ( 0{fpackage.sleeps} )
                                    </span>
                                    <span><FontAwesomeIcon icon={faWifi} className='rooms-icon' />{fpackage.facility}</span>
                                    <span className='m-auto room-package-meal'>{fpackage.food}</span>
                                    <div className='rooms-price'>
                                        <span className='rooms-price-span h4'>LKR {fpackage.amount} /= </span>
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
    //     <div className='d-flex flex-column room-package-card'>
    //         <h5>Family Package</h5>
    //         <span className='m-auto'><FontAwesomeIcon icon={faBed} className='rooms-icon' />02 Double beds</span>
    //         <span className='m-auto'>
    //             Sleeps :
    //             <FontAwesomeIcon icon={faUser} className='room-package-icon' />
    //             <FontAwesomeIcon icon={faUser} className='room-package-icon' />
    //             <FontAwesomeIcon icon={faUser} className='rooms-icon' />
    //             <FontAwesomeIcon icon={faUser} className='rooms-icon' />
    //         </span>
    //         <span><FontAwesomeIcon icon={faWifi} className='rooms-icon' />Free Wifi</span>
    //         <span className='m-auto room-package-meal'>Breakfast, Lunch & Dinner</span>
    //         <div className='room-package-price'>LKR 30, 300</div>
    //     </div>
    // );
}

export default RoomPackages;