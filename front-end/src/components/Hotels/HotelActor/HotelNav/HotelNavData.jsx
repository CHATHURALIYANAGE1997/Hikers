import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPersonHiking, faCalendarCheck, faClockRotateLeft, faMoneyCheckDollar, faCircleExclamation} from '@fortawesome/free-solid-svg-icons'

export const HotelNavData = [
    {
        title: "Profile",
        icon: <FontAwesomeIcon icon={faHome}/>,
        link: "/hotel/profile"
    },
    {
        title: "Rooms",
        icon: <FontAwesomeIcon icon={faPersonHiking}/>,
        link: "/hotel/rooms"
    },
    {
        title: "Payments",
        icon: <FontAwesomeIcon icon={faMoneyCheckDollar}/>,
        link: "/hotel/payments"
    },
    {
        title: "Bookings",
        icon: <FontAwesomeIcon icon={faCalendarCheck}/>,
        link: "/hotel/bookings"
    },
    // {
    //     title: "Booking History",
    //     icon: <FontAwesomeIcon icon={faClockRotateLeft}/>,
    //     link: "/hotel/history"
    // }
]