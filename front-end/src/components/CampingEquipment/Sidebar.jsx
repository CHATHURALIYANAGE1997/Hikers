import React from 'react';
import './campingequipment.css';
import {SidebarData} from './SidebarData';

function Sidebar(){
    return (
      <div className="campingSidebar">
        <ul className='campingSidebarList'>
          {SidebarData.map((val, key)=>{
            return (
              <li 
                key={key}
                className="campingSidebarRow"
                id= {window.location.pathname === val.link ? "active" : ""}
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                <div id="campingsidebaricon">
                  {val.icon}
                </div>
                <div id="campingsidebartitle">
                  {val.title}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );    
    
}
export default Sidebar;