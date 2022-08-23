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
import TransportStart from "../components/Tav_transportStart/trav_transportStart";
import Table from 'react-bootstrap/Table';
import savedPlaces from "../components/Trav_savedPlaces/savedPlaces";
import SavedPlaces from "../components/Trav_savedPlaces/trav_savedPlaces";
import Navbar from "../components/Navbar/Navbar";
import "../Styles/trav_transpotation.css"
import Map from "../components/Trav_map/trav_map";

const Transport = () => {
    const [currentMainStatus, updateCurrentMainStatus] = useState ("")
    const [currentStatus, updateStatus] = useState ("")
        return (
            <div className="tr_main">
                <Navbar/>
                {/* <span className="tr_leftDiv"></span>
                <span className="tr_rightDiv"></span> */}
                <Row>
                    <Col className="tr_leftCol">
                        <Row className="tr_mainMenuRow">
                            <br />
                            {/* <p>Main menu</p>                                      */}
                            <div className="tr_menuDiv">
                                <Stack className="tr_mainMenu" direction="horizontal" gap={5}>
                                    <div 
                                        className="tr_secondMenuIcon"
                                        onClick={() => updateCurrentMainStatus ("start")}
                                        >
                                        <TranspMenuIcon
                                            name="Start"
                                            icon={<TiLocationArrowOutline size={60}/>}>

                                        </TranspMenuIcon>

                                    </div>
                                    
                                    <div 
                                        className="tr_thirdMenuIcon"
                                        onClick={() => updateCurrentMainStatus ("destination")}
                                        >
                                        
                                        <TranspMenuIcon
                                            name="Destination"
                                            icon={<GoLocation size={60}/>}>
                                                
                                        </TranspMenuIcon>
                                    </div>

                                    <div 
                                        className="tr_firstMenuIcon"
                                        onClick={() => updateCurrentMainStatus ("ride")}
                                        >
                                        <TranspMenuIcon 
                                            name="Ride" 
                                            icon={<AiOutlineCar size={60}/>}>

                                        </TranspMenuIcon>
                                    </div>

                                    {/* <div 
                                        className="tr_fourthMenuIcon"
                                        onClick={() => updateCurrentMainStatus ("saved")}
                                        >
                                        <TranspMenuIcon
                                            name="Saved"
                                            icon={<AiOutlineSave size={60}/>}>
                                                
                                        </TranspMenuIcon>
                                    </div> */}

                                </Stack>
                                
                            </div>
                            <br></br>
                            <div className="tr_leftColLowerDiv">
                              
                                <div className="tr_contMenu">
                                    {currentMainStatus === "start" && 
                                        <TransportStart labelName = "Start"/>

                                    }
                                    {currentMainStatus === "destination" && 
                                        <TransportStart labelName = "Destination"/>

                                    }
                                    {currentMainStatus === "ride" && 
                                    <Stack 
                                        className="trv_vehicleMenu" 
                                        direction="horizontal" 
                                        gap={5}
                                    >
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
                                        className="trv_fourthMenuIcon"
                                        onClick={() => updateStatus ("van")}>
                                            
                                        <TranspMenuIcon
                                            name="Van"
                                            icon={<FaShuttleVan size={60}/>}>
                                                
                                        </TranspMenuIcon>
                                    </div>
                                    <div 
                                        className="trv_fifthMenuIcon"
                                        onClick={() => updateStatus ("bus")}>
                                        <TranspMenuIcon
                                            name="Bus"
                                            icon={<IoBusOutline size={60}/>}>
                                                
                                        </TranspMenuIcon>
                                    </div>
                                </Stack>
                                }
                                
                                {currentMainStatus === "saved" &&                   
                                        <Table striped>                             {/* Saved places table */}                 
      
                                        <tbody>
                                          <tr 
                                            onClick={() => updateStatus ("dolukanda")}
                                            >
                                            <td>Dolukanda</td>
                                            
                                          </tr>
                                          <tr
                                            onClick={() => updateStatus ("hulangala")}
                                          >
                                            <td>Hulangala</td>
                                            
                                          </tr>
                                          <tr 
                                            onClick={() => updateStatus ("sigiriya")}
                                          >
                                            <td>Sigiriya</td>
                                            
                                          </tr>
                                        </tbody>
                                      </Table>

                                    }
                                </div>
                            
                            </div>
                        </Row>

                    </Col>
                    <Col className="tr_rightCol ms-auto" >
                        <div className="tr_rightColUpperDiv">
                            {currentMainStatus === "ride" && 
                                <p className="textRide">Details</p>

                            }  
                            {currentMainStatus === "start" && 
                                <p className="textStart">Choose</p>
                            
                            }  
                            {currentMainStatus === "destination" && 
                                <p className="textDestination">Choose</p>
                            
                            }  
                            {currentMainStatus === "saved" && 
                                <p className="textSaved">Select</p>
                            
                            }        
                        </div>
                        <div className="tr_rightContainer">
                            {/* <Map/> */}
                            {currentMainStatus === "" && <Map/>}           {/* Initial right div */}
                            {currentMainStatus === "start" && <Map/>}           {/* Start right div */}
                            {currentMainStatus === "destination" && <Map/>}           {/* Destination right div */}
                            
                            {currentMainStatus === "ride" && currentStatus === "bike" && <VehicleDetails data={vehicleDetails} vehiInd={0}/>}           {/* vehicle information */}
                            {currentMainStatus === "ride" && currentStatus === "tuk" && <VehicleDetails data={vehicleDetails} vehiInd={1}/>}
                            {currentMainStatus === "ride" && currentStatus === "car" && <VehicleDetails data={vehicleDetails} vehiInd={2}/>}
                            {currentMainStatus === "ride" && currentStatus === "van" && <VehicleDetails data={vehicleDetails} vehiInd={3}/>}
                            {currentMainStatus === "ride" && currentStatus === "bus" && <VehicleDetails data={vehicleDetails} vehiInd={4}/>}
                            
                            {currentMainStatus === "saved" && currentStatus === "dolukanda" && <SavedPlaces data_1={savedPlaces} placeInd={0}/>}           {/* saved places pics */}
                            {currentMainStatus === "saved" && currentStatus === "hulangala" && <SavedPlaces data_1={savedPlaces} placeInd={1}/>}
                            {currentMainStatus === "saved" && currentStatus === "sigiriya" && <SavedPlaces data_1={savedPlaces} placeInd={2}/>}
                        </div>
                    </Col>
                </Row>    
            </div>
        )
}
export default Transport