import React from "react";
import { FaTools, FaCampground, FaCamera, FaHome} from 'react-icons/fa';
import { GiFlashlight } from "react-icons/gi";

export const  SidebarData= [
    {
        title:"Home",
        icon: <FaHome/>,
        link: "/home"
    
    },
    {
        title:"Camping Tents",
        icon: <FaCampground/>,
        link: "/tents"
    
    },
    {
        title:"Camping Accessories",
        icon: <FaCamera/>,
        link: "/accessories"
    
    },
    {
        title:"Camping Equipment",
        icon: <GiFlashlight/>,
        link: "/equipment"
    
    },
    {
        title:"Repair Service",
        icon: <FaTools/>,
        link: "/repairSerice"
    
    }
   
]
  
