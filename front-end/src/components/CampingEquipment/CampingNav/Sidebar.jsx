import React from 'react';
import './campingequipment.css';
import {SidebarData} from './SidebarData';
import {Link} from "react-router-dom";

function Sidebar(){
    return (
      <div className="campingSidebar">
        <ul className='campingSidebarList'>
          {SidebarData.map((val, key)=>{
            return (
              <Link to={val.link}>
              <li 
                key={key}
                className="campingSidebarRow"
                id= {window.location.pathname === val.link ? "active" : ""}
                
              >
                <div id="campingsidebaricon">
                  {val.icon}
                </div>
                <div id="campingsidebartitle">
                  {val.title}
                </div>
              </li>
              </Link>
            );
          })}
        </ul>
      </div>
    );    
    
}
export default Sidebar;