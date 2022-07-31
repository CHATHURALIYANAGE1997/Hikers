import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPersonHiking, faCalendarCheck, faClockRotateLeft, faMoneyCheckDollar, faCircleExclamation} from '@fortawesome/free-solid-svg-icons'

export const GuideNavData = [
    {
        title: "Profile",
        icon: <FontAwesomeIcon icon={faHome}/>,
        link: "/guide"
    },
    {
        title: "Trips",
        icon: <FontAwesomeIcon icon={faPersonHiking}/>,
        link: "/guide/trips"
    },
    {
        title: "Schedules",
        icon: <FontAwesomeIcon icon={faCalendarCheck}/>,
        link: "/guide/schedules"
    },
    {
        title: "History",
        icon: <FontAwesomeIcon icon={faClockRotateLeft}/>,
        link: "/guide/history"
    },
    {
        title: "Payments",
        icon: <FontAwesomeIcon icon={faMoneyCheckDollar}/>,
        link: "/guide/issues"
    },
    {
        title: "Issues",
        icon: <FontAwesomeIcon icon={faCircleExclamation}/>,
        link: "/hotels"
    }
]