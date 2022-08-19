import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faHotel, faTaxi, faNewspaper, faTent, faClock} from '@fortawesome/free-solid-svg-icons'

export const AdminNavData = [
    {
        title: "Home",
        icon: <FontAwesomeIcon icon={faHome}/>,
        link: "/admin/home"
    },
    {
        title: "Hotels",
        icon: <FontAwesomeIcon icon={faHotel}/>,
        link: "/admin/hotels"
    },
    {
        title: "Transpotations",
        icon: <FontAwesomeIcon icon={faTaxi}/>,
        link: "/admin/transportation"
    },
    {
        title: "Articles",
        icon: <FontAwesomeIcon icon={faNewspaper}/>,
        link: "/admin/articles"
    },
    {
        title: "Camping Equipemnts",
        icon: <FontAwesomeIcon icon={faTent}/>,
        link: "/admin/campingequipemnts"
    },
    {
        title: "Ongoing Orders",
        icon: <FontAwesomeIcon icon={faClock}/>,
        link: "/admin/ongoingorders"
    }
    
]