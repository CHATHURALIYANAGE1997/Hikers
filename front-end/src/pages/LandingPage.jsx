import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Container, Image } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "../components/Landing/Landing.css";
import Couple from "../components/Landing/couple.png";
import Articlecarousel from "../components/Carousel/carousel";

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
              <h4 className="hikingTitleSub">
                <i>Safe trip to the pea</i>k
              </h4>
              <p>Hikers provide you the best hiking experiance in Sri Lanka.</p>
            </div>
            <div class="col landing-col1">
              <img
                src={Couple}
                className="rounded img-fluid landingImage"
              ></img>
            </div>
          </div>
        </div>
        <div className="Container2">
          <div className="row articlecarouselrow">
            <Articlecarousel />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPageNew;
