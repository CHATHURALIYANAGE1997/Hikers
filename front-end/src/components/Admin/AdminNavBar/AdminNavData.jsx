import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPersonHiking, faCalendarCheck, faClockRotateLeft, faMoneyCheckDollar, faCircleExclamation} from '@fortawesome/free-solid-svg-icons'

export const AdminNavData = [
    {
        title: "Home",
        icon: <FontAwesomeIcon icon={faHome}/>,
        link: "/admin/home"
    },
    {
        title: "Hotels",
        icon: <FontAwesomeIcon icon={faPersonHiking}/>,
        link: "/admin/hotels"
    },
    {
        title: "Transpotations",
        icon: <FontAwesomeIcon icon={faCalendarCheck}/>,
        link: "/admin/transportation"
    },
    {
        title: "Articles",
        icon: <FontAwesomeIcon icon={faClockRotateLeft}/>,
        link: "/admin/articles"
    },
    {
        title: "Ongoing Orders",
        icon: <FontAwesomeIcon icon={faMoneyCheckDollar}/>,
        link: "/admin/ongoingorders"
    },
    {
        title: "Camping Equipemnts",
        icon: <FontAwesomeIcon icon={faCircleExclamation}/>,
        link: "/admin/campingequipemnts"
    }
]