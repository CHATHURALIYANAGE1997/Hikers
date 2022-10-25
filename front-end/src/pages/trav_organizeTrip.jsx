import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import "../Styles/trav_organizeTrip.css"
import Container from 'react-bootstrap/Container';
import { useDispatch } from "react-redux";
import { authenticateUser } from "../services/index";
import Axios from 'axios';
import Navbar from "../components/Navbar/Navbar";
import Package from '../components/Trav_package/trav_package';
import Stack from 'react-bootstrap/Stack';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import authToken from "../utils/authToken";
import NotFoundPage from './NotFoundPage';
import { useEffect } from 'react';
import axios from "axios";

function oraganizeTrip(props) {

  const [validated, setValidated] = useState(false);

  const url = "http://localhost:8080/user/login";

  const travel_province = localStorage.getItem("travel_province");
  const travel_mountain = localStorage.getItem("travel_mount");

  const initialState = {
    // name: "",
    adults: "",
    children: "",
    date: "",
<<<<<<< refs/remotes/origin/main
    mountain: "",
    province: "",
    package: "",

=======
    province: travel_province,
    mountain: travel_mountain,
    abseiling: "",
    camping: "",
    onedayhike: "",
    email: "",
    firstprice: "",
>>>>>>> Update Front end
  };

  const [data, setData] = useState(initialState);

  const handle = (e) => {
    const newData = { ...data }
    newData[e.target.name] = e.target.value
    setData(newData)
    console.log(newData)

  }
  const submit = (e) => {
    e.preventDefault()

  }
  const [error, setError] = useState();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    const token = localStorage.jwtToken

    if (form.checkValidity()) {
      // event.preventDefault();
      // event.stopPropagation();
      Axios.post(url, data, {
        // name: data.name,
        // adults: parseInt(data.adults),
        // children: parseInt(data.children),
        // date: data.date,
        // mountain: data.mountain,
        // package: data.package
        headers: {
          Authorization: `Bearer ${token}`,

        },
      }) .then(res => {
          console.log(res)
          // setShow (true)
          resetTripForm ()
          setError ("Successfully sent.")

        }).catch ((error) => {
          console.log (error.message)
          resetTripForm ()
          setError ("Error is occured")

        })
    }

    setValidated(true);
  }
  const resetTripForm = () => {
    setData (initialState)

  }

  if (localStorage.jwtToken) {
    authToken(localStorage.jwtToken);
  }

  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const addTrip = () => {
    const api = 'http://localhost:8080/user/plantrip';
    const token = localStorage.jwtToken;
    axios.post(api, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      console.log(response);
      resetLoginForm();
      console.log("trip ok");
    }).catch((error) => {
      console.log(error.message);
      resetLoginForm();
      console.log("Not ok");
    })
  };
  const resetLoginForm = () => {
    setData(initialState);
  };

  // if (auth.isLoggedIn === true && auth.role === "User") {

  return (
    <div className='trot_mainDiv'>
      <Navbar />

      <div className="md-stepper-horizontal editable orange">
        <div className="md-step active done">
          <div className="md-step-circle"><span>1</span></div>
          <div className="md-step-title">Trip Package</div>
          <div className="md-step-bar-left"></div>
          <div className="md-step-bar-right"></div>
        </div>
        <div className="md-step">
          <div className="md-step-circle"><span>2</span></div>
          <div className="md-step-title">Hotel</div>
          <div className="md-step-optional">Optional</div>
          <div className="md-step-bar-left"></div>
          <div className="md-step-bar-right"></div>
        </div>
        <div className="md-step">
          <div className="md-step-circle"><span>3</span></div>
          <div className="md-step-title">Transport Service</div>
          <div className="md-step-optional">Optional</div>
          <div className="md-step-bar-left"></div>
          <div className="md-step-bar-right"></div>
        </div>
        <div className="md-step">
          <div className="md-step-circle"><span>4</span></div>
          <div className="md-step-title">Payment</div>
          <div className="md-step-bar-left"></div>
          <div className="md-step-bar-right"></div>
        </div>
      </div>
      <div className="formContainer">

        <div className="trot_mainTextDiv">
          <p className="txtOrganizeTrip">Organize Your Trip...</p>
        </div>

        <Form noValidate validated={validated}>

          <Row className="mb-3">                                                {/* Name */}
            <Form.Group as={Row} md="" controlId="validationCustom01">
              <Form.Label>Name</Form.Label>
              <Form.Control
                className=''
                required
                type="text"
                placeholder="First name"
                name='name'
                // id='name'
                value={data.name}
                onChange={handle}

              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Enter the name
              </Form.Control.Feedback>

            </Form.Group>

          </Row>
          {/* # of crowd */}
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>No of Crowd : </Form.Label>
              <div className='d-flex flex-row justify-content-between'>
                <Form.Group as={Col} md="5" controlId="validationCustom02" className="w-100 adults">
                  <Form.Label className='trot_adults'>Adults</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Less than 15"
                    name='adults'
                    // min={0}
                    // max={15}
                    value={data.adults}
                    onChange={handle}
                    className='w-100'

                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please a valid number
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="5" controlId="validationCustomUsername" className="w-100">
                  <Form.Label>Children</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="text"
                      placeholder="Less than 10"
                      aria-describedby="inputGroupPrepend"
                      name='children'
                      required
                      // min={0}
                      // max={10}
                      value={data.children}
                      onChange={handle}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please a valid number
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </div>
            </Form.Group>

          </Row>

          <Row className="mb-3">
            <Form.Group as={Row} md="6" controlId="validationCustom03">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name='date'
                value={data.date}
                onChange={(e) => handle(e)}
                min="2022-11-01"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Row} md="3" controlId="validationCustom04" className="d-flex flex-column">

<<<<<<< refs/remotes/origin/main
            <Row className="mb-3">
              <Form.Group as={Row} md="6" controlId="validationCustom03">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  // placeholder="DD/MM/YYYY" 
                  name='date'
                  // id='date'
                  value={data.date}
                  onChange={(e) => handle(e)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Row} md="3" controlId="validationCustom04" className="d-flex flex-column">

                <Form.Label>Location</Form.Label>

                
                

                  {/* <Form.Select 
                    // id='ddlMountain'
                    aria-label="" 
                    className='trot_dropDown' 
                    // onChange={(e) => handleMountain (e.target.value)}
                    name='mountain'
                    // id={'mountain'}
                    value={data.mountain}
                    onChange={handle}

                    >
                    <option value={0}>Select a mountain</option>
                    {
                      mountain &&
                      mountain !== undefined ?
                      mountain.map ((prv, index) => {
                        return (
                          <option key={index} value={prv.name}>{prv.name}</option>
                        )
                      })
                      :"No province"

                    }
                  </Form.Select> */}
=======
              <Form.Label>Location</Form.Label>

              <div className="d-flex flex-row w-75 justify-content-between">
                <div className='d-flex flex-column'>
                  <label>Province</label>
>>>>>>> Update Front end
                  <Form.Control
                    className=''
                    disabled
                    type="text"
                    name='province'
                    value={travel_province}
                    readOnly
                  />
                </div>
                <div className='d-flex flex-column text-align-left'>
                  <label>Mountain</label>
                  <Form.Control
<<<<<<< refs/remotes/origin/main
                  className=''
                  disabled    
                  // required
                  type="text"
                  // placeholder="First name"
                  name='mountain'
                  // id='name'
                  value={travel_mountain}
                  //onChange={handle}
                  readOnly
                />

  

                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <br />
              <Form.Group as={Row} md="3" controlId="validationCustom04">
                <Form.Label>Packages</Form.Label>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <br />
              <Row className="trsp_packageRow"
                onChange={handle}

              >
                <Col sm={4}>
                  <Package
                    className="pkgOneDay"
                    name="One Day Hike"
                    des=" "
                    topic_1="Local"
                    topic_2="Foriegn"
                    lPrice="1000"
                    fPrice="2000"
                    value="1_day_hike"
                  />
                </Col>
                <Col sm={4}>
                  <Package
                    className="pkgCamping"
                    name="Camping"
                    des=" "
                    topic_1="Local"
                    topic_2="Foriegn"
                    lPrice="1000"
                    fPrice="2000"
                    value="camping"

                  />
                </Col>
                <Col sm={4}>
                  <Package
                    className="pkgAbseiling"
                    name="Abseiling"
                    des=""
                    topic_1="Local"
                    topic_2="Foriegn"
                    lPrice="10000"
                    fPrice="20000"
                    value="abseiling"

=======
                    className=''
                    disable
                    type="text"
                    name='mountain'
                    value={travel_mountain}
                    readOnly
>>>>>>> Update Front end
                  />
                </div>
              </div>

              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <br />
            <Form.Group as={Row} md="3" controlId="validationCustom04">
              <Form.Label>Packages</Form.Label>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <br />
            <Row className="trsp_packageRow"
              onChange={handle}

            >
              <Col sm={4}>
                <div className="package_1">
                  <div className="trp_checkBox">
                    <Form.Check
                      reverse
                      label="One Day Hike"
                      id="1"
                      type='radio'
                      name="onedayhike"
                      value="önedayhike"
                    />
                  </div>
                  {/* <Row><div className="divDecText"><h5>{props.des}</h5></div></Row> */}
                  <Row><div><h6 className="localDes">LKR 2000 per adult. LKR 1200 per child</h6></div></Row>
                  <Row><div><p className="">One day hike with guidancee service. Start at morning and end at evening</p></div></Row>
                </div>
              </Col>
              <Col sm={4}>
                <div className="package_1">
                  <div className="trp_checkBox">
                    <Form.Check
                      reverse
                      label="Camping"
                      id="1"
                      type='radio'
                      name="camping"
                      value="camping"
                    />
                  </div>
                  {/* <Row><div className="divDecText"><h5>{props.des}</h5></div></Row> */}
                  <Row><div><h6 className="localDes">LKR 3500 per adult. 2000 per child</h6></div></Row>
                  <Row><div><p className="">Hike with 01 night & camping. Camping adventures can be collect during night</p></div></Row>
                </div>
              </Col>
              <Col sm={4}>
                <div className="package_1">
                  <div className="trp_checkBox">
                    <Form.Check
                      reverse
                      label="Abseiling"
                      id="1"
                      type='radio'
                      name="abseiling"
                      value="Abseiling"
                    />
                  </div>
                  {/* <Row><div className="divDecText"><h5>{props.des}</h5></div></Row> */}
                  <Row><div><h6 className="localDes">LKR 7500 per person.</h6></div></Row>
                  <Row><div><p className="">Hike with abseiling. Only 10 people will be able to experience abseiling adventures.</p></div></Row>
                </div>
              </Col>

            </Row>

          </Row>

          <Form.Group
            className="mb-3"
            label="I like to share your traveling guide"
          >
          </Form.Group>

          <div className=' d-flex flex-row justify-content-end'>
            <Stack direction="horizontal" gap={3} className="d-flex flex-row justify-content-right">
              <Link to={"/welcome"}><Button variant=" ms-auto" className='organize-trip-back'>Back</Button></Link>{' '}
              <Link to={"/hotels"}><Button type='submit' type='button' variant=" ms-auto" className="organize-trip-next" onClick={addTrip}>Next</Button></Link>

            </Stack>
          </div>

        </Form>
      </div>
    </div>

  );
  // }
  // else {
  //   localStorage.clear();
  //   // return props.history.push("/");
  //   { return <div><NotFoundPage /></div> }

  // }
}

// render(<oraganizeTrip />);
export default oraganizeTrip