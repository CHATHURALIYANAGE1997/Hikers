import React from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./trav_package.css"

// import { Component } from "react";

const Package = (props) => {
    console.log (props.name)
    return (
        <div className="package_1">
            <Form.Check reverse
                label={props.name}
            />
            <Row>
                <div>
                    <h5 className="txtLocal"><u>Local -</u></h5>

                </div>
            </Row>
            <Row>
                <div>
                    <p className="localDes">Rs. {props.lPrice} per person.</p>

                </div>
            </Row>
            <Row>
                <div>
                    <h5 className="txtForiegn"><u>Foriegn -</u></h5>

                </div>
            </Row>
            <Row>
                <div>
                    <p className="ForiegnDes">Rs. {props.fPrice} per person.</p>

                </div>
            </Row>
            
        </div>
    )
}
export default Package