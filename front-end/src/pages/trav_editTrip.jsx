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
import NotFoundPage from "./NotFoundPage";
import authToken from "../utils/authToken";
import { useSelector } from "react-redux";

const editTrip = () => {
    const accessToken = localStorage.jwtToken;

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const mount = localStorage.getItem("travel_mount");
    const province = localStorage.getItem("travel_province");
    const name = localStorage.getItem("oname");
    const adult = localStorage.getItem("oadult");
    const child = localStorage.getItem("ochild");
    const packagetype = localStorage.getItem("opackage");
    const tripdate = localStorage.getItem("odate");
    const hotelname = localStorage.getItem("hotelname");
    const singleroom = localStorage.getItem("singleroom");
    const doubleroom = localStorage.getItem("doubleroom");
    const tripleroom = localStorage.getItem("tripleroom");
    const price = localStorage.getItem("price");
    const packageprice = localStorage.getItem("packageprice");

    var num1 = parseFloat(price)
    var num2 = parseFloat(packageprice);
    const total = num1 + num2;


    const auth = useSelector((state) => state.auth);

    if (auth.isLoggedIn === true && auth.role === "User") {
        return (
            <div className="tret_mainDiv">
                <Navbar />
                <br></br>
                <h4 className="tred_mainText">Check Your Trip...</h4>
                <br></br>
                <div className="et_mainDiv">
                    <Stack gap={3}>
                        <InputGroup className="nameRow" gap={3}>                    {/* name */}
                            <InputGroup.Text className="nameLabel">
                                Name

                            </InputGroup.Text>
                            <Form.Control className="inputName" value={name} readOnly/>
                        </InputGroup>

                        <InputGroup className="locationRow">                        {/* Location */}
                            <InputGroup.Text className="locationLabel">
                                Location

                            </InputGroup.Text>
                            <Form.Control className="inputLocation" value={mount} readOnly/>
                        </InputGroup>

                        <InputGroup className="locationRow">                        {/* Location */}
                            <InputGroup.Text className="locationLabel">
                                Province

                            </InputGroup.Text>
                            <Form.Control className="inputLocation" value={province} readOnly/>
                        </InputGroup>

                        <InputGroup className="locationRow">                        {/* Location */}
                            <InputGroup.Text className="locationLabel">
                                Adults

                            </InputGroup.Text>
                            <Form.Control className="inputLocation" value={adult} readOnly/>
                        </InputGroup>
                        <InputGroup className="locationRow">                        {/* Location */}
                            <InputGroup.Text className="locationLabel">
                                Children

                            </InputGroup.Text>
                            <Form.Control className="inputLocation" value={child} readOnly/>
                        </InputGroup>

                        {/* <InputGroup className="crowdRow">                                               
                            <InputGroup.Text className="crowdLabel">Adults</InputGroup.Text>
                            <Form.Control className="inputAdult" aria-label="adults" />
                            <div className="vr" />
                            <Form.Control className="inputChildren" aria-label="children" />

                        </InputGroup> */}
                        <InputGroup className="dateRow">                        {/* Date */}
                            <InputGroup.Text className="dateLabel">
                                Date

                            </InputGroup.Text>
                            <Form.Control className="inputdate" value={tripdate} readOnly />

                        </InputGroup>
                        <InputGroup className="packageRow">                        {/* Package */}
                            <InputGroup.Text className="packageLabel">
                                Package

                            </InputGroup.Text>
                            <Form.Control className="inputpackage" value={packagetype} readOnly/>
                        </InputGroup>
                        {/* <InputGroup className="activityRow">                        
                            <InputGroup.Text className="activityLabel">
                                Activities

                            </InputGroup.Text>
                            <Form.Control className="inputActivities" />
                        </InputGroup> */}

                        <InputGroup className="hotelRow">                        {/* Hotel */}
                            <InputGroup.Text className="locationLabel">
                                Hotel

                            </InputGroup.Text>
                            <Form.Control className="inputHotel" value={hotelname} readOnly/>
                        </InputGroup>
                        <InputGroup className="hotelRow">                        {/* Hotel */}
                            <InputGroup.Text className="locationLabel">
                                Single rooms

                            </InputGroup.Text>
                            <Form.Control className="inputHotel" value={singleroom} readOnly/>
                        </InputGroup>
                        <InputGroup className="hotelRow">                        {/* Hotel */}
                            <InputGroup.Text className="locationLabel">
                                Double rooms

                            </InputGroup.Text>
                            <Form.Control className="inputHotel" value={doubleroom} readOnly/>
                        </InputGroup>
                        <InputGroup className="hotelRow">                        {/* Hotel */}
                            <InputGroup.Text className="locationLabel">
                                Full Payment (LKR)

                            </InputGroup.Text>
                            <Form.Control className="inputHotel" value={total} readOnly/>
                        </InputGroup>
                        {/* <InputGroup className="transportRow">                        
                            <InputGroup.Text className="locationLabel">
                                Transpotation

                            </InputGroup.Text>
                            <Form.Control className="inputTranspotation" />
                        </InputGroup> */}
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
    else {
        localStorage.clear();
        // return props.history.push("/");
        { return <div><NotFoundPage /></div> }

    }
}
export default editTrip