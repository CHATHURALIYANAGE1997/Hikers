import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPersonHiking, faClockRotateLeft, faCircleExclamation} from '@fortawesome/free-solid-svg-icons';

export const TravelerNavData = [
    {
        title: "Profile",
        icon: <FontAwesomeIcon icon={faHome}/>,
        link: "/traveler/profile"
    },
    {
        title: "Trips",
        icon: <FontAwesomeIcon icon={faPersonHiking}/>,
        link: "/traveler/trips"
    },
    // {
    //     title: "Travel History",
    //     icon: <FontAwesomeIcon icon={faClockRotateLeft}/>,
    //     link: "/traveler/schedules"
    // },
    {
        title: "Issues",
        icon: <FontAwesomeIcon icon={faCircleExclamation}/>,
        link: "/traveler/issues"
    }
]