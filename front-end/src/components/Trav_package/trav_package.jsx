import React from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./trav_package.css";
// import TranspMenuIcon from "../Trav_transportMenuIcon/trav_transportMenuIcon";

const Package = (props) => {
    // console.log (props.name)
    return (
        <div className="package_1">
            <div className="trp_checkBox">
            <Form.Check 
                reverse
                label={props.name}
                id={props.id}
                type='radio'
                name="package"
                value={props.value}
            />
            </div>  
            <Row>
                <div className="divDecText">
                    <h5>{props.des}</h5>

                </div>
            </Row>
           
            <Row>
                <div>
                    <h6 className="localDes">Rs. {props.lPrice} per person.</h6>
                </div>
            </Row>
            <Row>
                <div>
                    <p className="">{props.con}</p>
                </div>
            </Row>
                      
        </div>
    )
}
export default Package