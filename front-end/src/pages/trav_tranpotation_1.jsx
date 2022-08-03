import React from "react";
import "../Styles/trav_transpotation.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import transportMenu from "../components/Trav_transpotationMenu/trav_transpotationMenu";

const transport = () => {
        return (
            <div className="tr_main">
                
                {/* <span className="tr_leftDiv"></span>
                <span className="tr_rightDiv"></span> */}
                <Row>
                    <Col className="tr_leftCol">
                        <Row className="tr_mainMenuRow">
                            <p>Main menu</p>                                     
                            <transportMenu/>

                        </Row>
                    </Col>
                    <Col className="tr_rightCol"></Col>
                </Row>    
            </div>
        )
}
export default transport