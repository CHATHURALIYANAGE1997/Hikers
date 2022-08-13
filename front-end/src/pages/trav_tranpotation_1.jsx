import React from "react";
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

const Transport = () => {
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
                                    <VehicleTypes/>

                                </div>
                                {/* <VehicleTypes/> */}

                            </div>
                        </Row>

                    </Col>
                    <Col className="tr_rightCol ms-auto" ></Col>
                </Row>    
            </div>
        )
}
export default Transport