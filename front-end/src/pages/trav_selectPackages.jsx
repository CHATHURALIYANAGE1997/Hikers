import React from "react";
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import "../Styles/trav_selectPackages.css"
import Package from "../components/Trav_package/trav_package";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from "../components/Navbar/Navbar";


const selectPackages = () => {
    return (
        <div className="trsp_mainDiv">
            <Navbar/>
            <div className="packageContainer mx-auto">
                <h3 className="trsp_mainText">Select Yours Package...</h3>
            {/* <Stack gap={1} className="col-md-5 mx-auto">
                <Package name="One Day Hike" des="" topic_1="Local" topic_2="Foriegn" lPrice="1000" fPrice="2000"/>
                <Package name="Camping" des="" topic_1="Local" topic_2="Foriegn" lPrice="1000" fPrice="2000"/>
                <Package name="Abseiling" des="Rs.20000 per person" topic_1="Local" topic_2="Foriegn" lPrice="1000" fPrice="2000"/>
                <Button type="submit">Next</Button>
            </Stack> */}
                <br />
            <Row className="trsp_packageRow">
                <Col sm={4}><Package className="pkgOneDay" name="One Day Hike" des=" " topic_1="Local" topic_2="Foriegn" lPrice="1000" fPrice="2000"/></Col>
                <Col sm={4}><Package className="pkgCamping" name="Camping" des=" " topic_1="Local" topic_2="Foriegn" lPrice="1000" fPrice="2000"/></Col>
                <Col sm={4}><Package className="pkgAbseiling" name="Abseiling" des="Rs.20000 per person" topic_1="Local" topic_2="Foriegn" lPrice="1000" fPrice="2000"/></Col>
            </Row>
            <br />
            <Row className="trsp_buttonRow">
                <Button  className="trsp_buttonSelectPackage" variant="outline-primary" size="lg">Select Package</Button>{' '}
            </Row>
            </div>
        </div>

    )
}
export default selectPackages