import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "../Styles/trav_editTrip.css"
import Stack from 'react-bootstrap/Stack';

const editTrip = () => {
    return (
        <div>
            <br></br>
            <h4>Check the trip...</h4>
            {/* <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                Default
                </InputGroup.Text>
                <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup> */}
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


                </Stack>
                
            </div>

        </div>
    )
}
export default editTrip