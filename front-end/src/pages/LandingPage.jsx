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
        <div className="Container3">
          <div className="row aboutUsrow">
            <h1 className="AboutUsTitle">About Us</h1>
            <p className="fw-bold AboutUsParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPageNew;
