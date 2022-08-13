import React from "react";
import TranspMenuIcon from "../Trav_transportMenuIcon/trav_transportMenuIcon";
import { AiOutlineCar } from 'react-icons/ai';
import { FaCaravan } from "react-icons/fa";
import { FaShuttleVan } from "react-icons/fa";
import { IoBusOutline } from 'react-icons/io5';
import Stack from 'react-bootstrap/Stack';
import { RiMotorbikeLine } from "react-icons/ri";
import Transport from "../../pages/trav_tranpotation_1";

const VehicleTypes = () => {
    return (
        <Stack className="trv_vehicleMenu" direction="horizontal" gap={5}>
                                    <div 
                                        className="trv_firstMenuIcon"
                                        onClick={() => Transport.update}
                                        >
                                        <TranspMenuIcon 
                                            name="Bike" 
                                            icon={<RiMotorbikeLine size={60}/>}>

                                        </TranspMenuIcon>
                                    </div>
                                    <div className="trv_secondMenuIcon">
                                        <TranspMenuIcon
                                            name="Tuk"
                                            icon={<FaCaravan size={60}/>}>

                                        </TranspMenuIcon></div>
                                    <div className="trv_thirdMenuIcon">
                                        <TranspMenuIcon
                                            name="Car"
                                            icon={<AiOutlineCar size={60}/>}>
                                                
                                        </TranspMenuIcon></div>
                                    <div className="trv_fourthMenuIcon">
                                        <TranspMenuIcon
                                            name="Van"
                                            icon={<FaShuttleVan size={60}/>}>
                                                
                                        </TranspMenuIcon>
                                    </div>
                                    <div className="trv_fifthMenuIcon">
                                        <TranspMenuIcon
                                            name="Bus"
                                            icon={<IoBusOutline size={60}/>}>
                                                
                                        </TranspMenuIcon>
                                    </div>
                                </Stack>
    )
}
export default VehicleTypes