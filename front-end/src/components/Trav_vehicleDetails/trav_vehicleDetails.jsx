import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
// import "../Styles/trav_editTrip.css"
import Stack from 'react-bootstrap/Stack';
// import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import "./trav_vehicleDetails.css"
import {Link} from "react-router-dom";
// import { useState } from "react";

const initialData = {
    title: "",
    passengers: "",

}
// const [data, setData] = useState('')

// const handle = (e) => {
//     const newData = { ...data }
//     newData[e.target.name] = e.target.value
//     setData(newData)
//     console.log(newData)

// }
const VehicleDetails = ({data, vehiInd}) => {
    return (
        <div>
            {data [vehiInd].map (item => (
                <div>
                    {/* <label htmlFor="" className="trnspd_vehicleType">Vehicle Type :</label>
                    <h4>{item.title}</h4>
                    <label htmlFor="" className="trnspd_passengers">Maximum Pasengers :</label>
                    <h4>{item.passengers}</h4>
                    <label htmlFor="" className="trnspd_passengers">Rate (Rs/Km) :</label>
                    <h4>{item.rate}</h4>
                    <div className="trvd_buttonArea">
                        <Button className="trvd_Selectbutton" variant="success ">Select</Button>{' '}
                    </div> */}
                    <Stack gap={3}>
                <InputGroup className="nameRow" gap={3}>                    {/* name */}       
                    <InputGroup.Text className="nameLabel">
                    Vehicle Type

                    </InputGroup.Text>
                    <Form.Control 
                        className="inputName"
                        name='title'
                        value={item.title}
                        />
                </InputGroup>
                
                <InputGroup className="locationRow">                        {/* Location */}
                    <InputGroup.Text className="locationLabel">
                        Maximum Pasengers

                    </InputGroup.Text>
                    <Form.Control 
                        className="inputLocation"
                        name='passengers'
                        value={item.passengers}
                        />
                </InputGroup>
                
                <InputGroup className="locationRow">                        {/* Location */}
                    <InputGroup.Text className="locationLabel">
                    Rate (Rs/Km)

                    </InputGroup.Text>
                    <Form.Control 
                        className="inputLocation"
                        value={item.rate}
                        />
                    <InputGroup.Text className="trvd_rspkm">Rs/Km</InputGroup.Text>
                </InputGroup> 

                <div className="trvd_buttonArea">
                    <Link to={"/editTrip"}>
                        <Button type='submit' type='button'  className="trvd_Selectbutton" variant="success ">Select</Button>{' '}

                    </Link>
                        
                    </div>                                                                                       

                </Stack>
                </div>
            ))}
        </div>
        

    )
}
export default VehicleDetails