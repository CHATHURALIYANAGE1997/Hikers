import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Container, Image } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "../components/Landing/Landing.css";
import LandingWall1 from "../components/Landing/LandingWall1.jpg";

const LandingPageNew = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        {/* <div className="LandingContainer">
          <Row className="LandingRow">
            <Col sm={5}>
              <h1 className="hikingTitle">Welcome To Hikers</h1>
              <h3>Safe Trip to the peak</h3>
            </Col>
            <Col sm={7}>
              <img src={LandingWall1} className="img-fluid"></img>
            </Col>
          </Row>
        </div> */}
        <div class="landingContainer">
          <div class="row landing-row">
            <div class="col landing-col">
              <h1 className="hikingTitle">Welcome To Hikers</h1>
              <h3>Safe Trip to the peak</h3>
              <p>The carousel is a slideshow for cycling through a series of content, 
                built with CSS 3D transforms and a bit of JavaScript. It works with a 
              .</p>
            </div>
            <div class="col landing-col1">
              <img src={LandingWall1} className="rounded img-fluid landingImage"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPageNew;
