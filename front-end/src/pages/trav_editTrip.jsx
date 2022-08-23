import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "../Styles/trav_editTrip.css"
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";

const editTrip = () => {
    return (
        <div className="tret_mainDiv">
            <Navbar/>
            <br></br>
            <h4 className="tred_mainText">Check Your Trip...</h4>
            <br></br>
            <div className="et_mainDiv">
                <Stack gap={3}>
                <InputGroup className="nameRow" gap={3}>                    {/* name */}       
                    <InputGroup.Text className="nameLabel">
                        Name

                    </InputGroup.Text>
                    <Form.Control className="inputName"/>
                </InputGroup>
                
                <InputGroup className="locationRow">                        {/* Location */}
                    <InputGroup.Text className="locationLabel">
                        Location

                    </InputGroup.Text>
                    <Form.Control className="inputLocation"/>
                </InputGroup>
                
                <InputGroup className="crowdRow">                                               {/* Crowd */}
                    <InputGroup.Text className="crowdLabel">Crowd</InputGroup.Text>
                    <Form.Control className="inputAdult" aria-label="adults" />
                    <div className="vr" />
                    <Form.Control className="inputChildren" aria-label="children" />

                </InputGroup>
                <InputGroup className="dateRow">                        {/* Date */}
                    <InputGroup.Text className="dateLabel">
                        Date

                    </InputGroup.Text>
                    <Form.Control className="inputdate"/>

                </InputGroup>
                <InputGroup className="packageRow">                        {/* Package */}
                    <InputGroup.Text className="packageLabel">
                        Package

                    </InputGroup.Text>
                    <Form.Control className="inputpackage"/>
                </InputGroup>
                <InputGroup className="activityRow">                        {/* Activities */}
                    <InputGroup.Text className="activityLabel">
                        Activities

                    </InputGroup.Text>
                    <Form.Control className="inputActivities"/>
                </InputGroup>

                <InputGroup className="hotelRow">                        {/* Hotel */}
                    <InputGroup.Text className="locationLabel">
                        Hotel

                    </InputGroup.Text>
                    <Form.Control className="inputHotel"/>
                </InputGroup>
                <InputGroup className="transportRow">                        {/* Transport */}
                    <InputGroup.Text className="locationLabel">
                        Transpotation

                    </InputGroup.Text>
                    <Form.Control className="inputTranspotation"/>
                </InputGroup>
                <Row className="et_btnRow">
                    
                        <Col className="editbtnCol">
                            <Link to={"/organizeTrip"}>
                                <Button className="btnEdit" variant="outline-primary">Edit</Button>{' '}            {/* Edit btn */}

                                </Link>
                        </Col>
                        <Col className="conirmTripCol">
                            <Link to={"/welcome"}>
                                <Button className="btnConfirm" variant="outline-success">Confirm</Button>{' '}                                 {/* Confirm btn */}

                            </Link>
                        </Col>
                   
                </Row>

                </Stack>
                
            </div>

        </div>
    )
}
export default editTrip