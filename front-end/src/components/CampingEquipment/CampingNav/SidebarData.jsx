import React from "react";
import { FaTools, FaCampground, FaCamera, FaHome} from 'react-icons/fa';
import { GiFlashlight } from "react-icons/gi";

export const  SidebarData= [
    {
        title:"Home",
        icon: <FaHome/>,
        link: "/camping"
    
    },
    {
        title:"Camping Tents",
        icon: <FaCampground/>,
        link: "/tents"
    
    },
    {
        title:"Camping Accessories",
        icon: <FaCamera/>,
        link: "/accesories"
    
    },
    {
        title:"Repair Service",
        icon: <GiFlashlight/>,
        link: "/equipment"
    
    },
    {
        title:"Post Ad",
        icon: <FaTools/>,
        link: "/repairSerice"
    
    }
   
]
  
