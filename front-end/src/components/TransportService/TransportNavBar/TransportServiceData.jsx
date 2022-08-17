import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPersonHiking, faClockRotateLeft, faMoneyCheckDollar, faCircleExclamation, faCalendarDays} from '@fortawesome/free-solid-svg-icons'

export const TransportServiceData = [
    {
        title: "Profile",
        icon: <FontAwesomeIcon icon={faHome}/>,
        link: "/transportservice/profile"
    },
    {
        title: "Trips",
        icon: <FontAwesomeIcon icon={faPersonHiking}/>,
        link: "/transportservice/trips"
    },
    {
        title: "Trip History",
        icon: <FontAwesomeIcon icon={faClockRotateLeft}/>,
        link: "/transportservice/history"
    },
    {
        title: "Payments",
        icon: <FontAwesomeIcon icon={faMoneyCheckDollar}/>,
        link: "/transportservice/payments"
    },
    {
        title: "Issues",
        icon: <FontAwesomeIcon icon={faCircleExclamation}/>,
        link: "/transportservice/issues"
    },
    {
        title: "Calendar",
        icon: <FontAwesomeIcon icon={faCalendarDays}/>,
        link: "/transportservice/calendar"
    }
]