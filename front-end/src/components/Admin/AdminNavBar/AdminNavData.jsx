import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faHotel, faTaxi, faNewspaper, faTent, faClock, faUser, faPerson} from '@fortawesome/free-solid-svg-icons'

export const AdminNavData = [
    {
        title: "Home",
        icon: <FontAwesomeIcon icon={faHome}/>,
        link: "/admin/home"
    },
    {
        title: "Trips",
        icon: <FontAwesomeIcon icon={faClock}/>,
        link: "/admin/trips"
    },
    {
        title: "Guide",
        icon: <FontAwesomeIcon icon={faHome}/>,
        link: "/admin/guide"
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
        title: "Registrations",
        icon: <FontAwesomeIcon icon={faUser}/>,
        link: "/admin/registrations"
    },
    {
        title: "Camping Equipemnts",
        icon: <FontAwesomeIcon icon={faTent}/>,
        link: "/admin/campingequipemnts"
    }    
    
]