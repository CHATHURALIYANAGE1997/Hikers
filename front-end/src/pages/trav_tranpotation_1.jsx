import React, { useState } from "react";
import "../Styles/trav_transpotation.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TranspMenuIcon from "../components/Trav_transportMenuIcon/trav_transportMenuIcon";
import Stack from 'react-bootstrap/Stack';
import { AiOutlineCar } from 'react-icons/ai';
import { TiLocationArrowOutline } from "react-icons/ti";
import { GoLocation } from 'react-icons/go';
import { AiOutlineSave } from 'react-icons/ai';
import VehicleTypes from "../components/Trav_vehicleTypes/tav_vehicleTypes";
import VehicleDetails from "../components/Trav_vehicleDetails/trav_vehicleDetails";
// import TranspMenuIcon from "../Trav_transportMenuIcon/trav_transportMenuIcon";
// import { AiOutlineCar } from 'react-icons/ai';
import { FaCaravan } from "react-icons/fa";
import { FaShuttleVan } from "react-icons/fa";
import { IoBusOutline } from 'react-icons/io5';
// import Stack from 'react-bootstrap/Stack';
import { RiMotorbikeLine } from "react-icons/ri";
import vehicleDetails from "../components/Trav_vehicleDetails/vehicleDetails";

const Transport = () => {
    const [currentStatus, updateStatus] = useState ("bike")
        return (
            <div className="tr_main">
                
                {/* <span className="tr_leftDiv"></span>
                <span className="tr_rightDiv"></span> */}
                <Row>
                    <Col className="tr_leftCol">
                        <Row className="tr_mainMenuRow">
                            {/* <p>Main menu</p>                                      */}
                            <div className="tr_menuDiv">
                                <Stack className="tr_mainMenu" direction="horizontal" gap={5}>
                                    <div className="tr_firstMenuIcon"
                                        >
                                        <TranspMenuIcon 
                                            name="Ride" 
                                            icon={<AiOutlineCar size={60}/>}>

                                        </TranspMenuIcon>
                                    </div>
                                    <div className="tr_secondMenuIcon">
                                        <TranspMenuIcon
                                            name="Start"
                                            icon={<TiLocationArrowOutline size={60}/>}>

                                        </TranspMenuIcon></div>
                                    <div className="tr_thirdMenuIcon">
                                        <TranspMenuIcon
                                            name="Destination"
                                            icon={<GoLocation size={60}/>}>
                                                
                                        </TranspMenuIcon></div>
                                    <div className="tr_fourthMenuIcon">
                                        <TranspMenuIcon
                                            name="Saved"
                                            icon={<AiOutlineSave size={60}/>}>
                                                
                                        </TranspMenuIcon>
                                    </div>

                                </Stack>
                            </div>
                            <br></br>
                            <div className="tr_leftColLowerDiv">
                                {/* <h3>Shirantha</h3> */}
                                <div className="tr_contMenu">
                                    {/* <VehicleTypes/> */}
                                    <Stack className="trv_vehicleMenu" direction="horizontal" gap={5}>
                                    <div 
                                        className="trv_firstMenuIcon"
                                        onClick={() => updateStatus ("bike")}
                                        >
                                        <TranspMenuIcon 
                                            name="Bike" 
                                            icon={<RiMotorbikeLine size={60}/>}>

                                        </TranspMenuIcon>
                                    </div>
                                    <div 
                                        className="trv_secondMenuIcon"
                                        onClick={() => updateStatus ("tuk")}>
                                        <TranspMenuIcon
                                            name="Tuk"
                                            icon={<FaCaravan size={60}/>}>

                                        </TranspMenuIcon></div>
                                    <div 
                                        className="trv_thirdMenuIcon"
                                        onClick={() => updateStatus ("car")}>
                                        <TranspMenuIcon
                                            name="Car"
                                            icon={<AiOutlineCar size={60}/>}>
                                                
                                        </TranspMenuIcon></div>
                                    <div 
                                        className="trv_fourthMenuIcon">
                                            
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
                                </div>
                                {/* <VehicleTypes/> */}

                            </div>
                        </Row>

                    </Col>
                    <Col className="tr_rightCol ms-auto" >
                        <div className="tr_rightContainer">
                            {currentStatus === "bike" && <VehicleDetails data={vehicleDetails} vehiInd={0}/>}
                            {currentStatus === "tuk" && <VehicleDetails data={vehicleDetails} vehiInd={1}/>}
                            {currentStatus === "car" && <VehicleDetails data={vehicleDetails} vehiInd={2}/>}
                            
                        </div>
                    </Col>
                </Row>    
            </div>
        )
}
export default Transport