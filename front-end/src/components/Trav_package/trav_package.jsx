import React from "react";
import Form from 'react-bootstrap/Form';

// import { Component } from "react";

const Package = (props) => {
    console.log (props.name)
    return (
        <div className="package_1">
            <h4>{props.name}</h4>
            {/* <Form.Check reverse/>    */}
            <Form.Check reverse
                label={props.name}
            />
        </div>
    )
}
export default Package