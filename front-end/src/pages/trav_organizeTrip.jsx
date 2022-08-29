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

function oraganizeTrip(props) {

  const [validated, setValidated] = useState(false);

  const url = "localhost:8080/user/senddata"

  const initialState = {
    name: "",
    adults: "",
    children: "",
    date: "",

  };
  const provinces = [                             // Provinces array       
    {id : "1", name : "North Western"},
    {id : "2", name : "Central"}

  ]
  const mountains = [                                               // Mountains array
    {id : "1", provinceId : "1", name : "Dolukanda"},
    {id : "2", provinceId : "1", name : "Hulangala"},
    {id : "3", provinceId : "2", name : "Hulangala"},
    {id : "4", provinceId : "2", name : "Narangala"}
  ]
  const [province, setProvince] = useState ([])       // Provinces dropdown use state
  const [mountain, setMountain] = useState ([])       // Mountains dropdown use state

  useEffect (() =>{                                   // setProvince useEffect
    setProvince (provinces)

  }, [])

  const handleProvince = (id) => {                            // Provinces and mountain handle function
    const dt = mountains.filter (x => x.provinceId === id)
    setMountain (dt)

  }

  const [data, setData] = useState(initialState);

  const handle = (e) => {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)

  }
  const submit = (e) => {
    e.preventDefault()

  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      Axios.post(url, {
        name: data.name,
        adults: parseInt(data.adults),
        children: parseInt(data.children),
        date: data.date

      })
        .then(res => {
          console.log(res.data)

        })

    }

    setValidated(true);
  }

  // if (localStorage.jwtToken) {
  //   authToken(localStorage.jwtToken);
  // }

  // const auth = useSelector((state) => state.auth);

  // if (auth.isLoggedIn === true && auth.role === "User") {
    return (
      <div className='trot_mainDiv'>
        <Navbar />

        <div class="md-stepper-horizontal editable orange">
          <div class="md-step active done">
            <div class="md-step-circle"><span>1</span></div>
            <div class="md-step-title">Trip Package</div>
            <div class="md-step-bar-left"></div>
            <div class="md-step-bar-right"></div>
          </div>
          <div class="md-step">
            <div class="md-step-circle"><span>2</span></div>
            <div class="md-step-title">Hotel</div>
            <div class="md-step-optional">Optional</div>
            <div class="md-step-bar-left"></div>
            <div class="md-step-bar-right"></div>
          </div>
          <div class="md-step">
            <div class="md-step-circle"><span>3</span></div>
            <div class="md-step-title">Transport Service</div>
            <div class="md-step-optional">Optional</div>
            <div class="md-step-bar-left"></div>
            <div class="md-step-bar-right"></div>
          </div>
          <div class="md-step">
            <div class="md-step-circle"><span>4</span></div>
            <div class="md-step-title">Payment</div>
            <div class="md-step-bar-left"></div>
            <div class="md-step-bar-right"></div>
          </div>
        </div>
        <div className="formContainer">

          <div className="trot_mainTextDiv">
            <p className="txtOrganizeTrip">Organize Your Trip...</p>
          </div>

          <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <Row className="mb-3">                                                {/* Name */}
              <Form.Group as={Row} md="" controlId="validationCustom01">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  className=''
                  required
                  type="text"
                  placeholder="First name"
                  name='name'
                  id='name'
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
                      type="number"
                      placeholder="Less than 20"
                      name='adults'
                      id='adults'
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
                        type="number"
                        placeholder="Less than 20"
                        aria-describedby="inputGroupPrepend"
                        name='children'
                        required
                        id='children'
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
                  // placeholder="DD/MM/YYYY" 
                  name='date'
                  id='date'
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
                
                <div className="d-flex flex-row w-75">                              {/* provinces drop down */}                    
                  <Form.Select 
                    id='ddlProvince'
                    aria-label="" 
                    className='trot_dropDown' 
                    onChange={(e) => handleProvince (e.target.value)}
                    >
                    <option value={0}>Select a Province</option>
                    {
                      province &&
                      province !== undefined ?
                      province.map ((prv, index) => {
                        return (
                          <option key={index} value={prv.id}>{prv.name}</option>
                        )
                      })
                      :"No province"

                    }
                  </Form.Select>

                  <Form.Select 
                    id='ddlMountain'
                    aria-label="" 
                    className='trot_dropDown' 
                    // onChange={(e) => handleMountain (e.target.value)}
                    >
                    <option value={0}>Select a mountain</option>
                    {
                      mountain &&
                      mountain !== undefined ?
                      mountain.map ((prv, index) => {
                        return (
                          <option key={index} value={prv.id}>{prv.name}</option>
                        )
                      })
                      :"No province"

                    }
                  </Form.Select>
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
              <Row className="trsp_packageRow">
                <Col sm={4}><Package className="pkgOneDay" name="One Day Hike" des=" " topic_1="Local" topic_2="Foriegn" lPrice="1000" fPrice="2000" /></Col>
                <Col sm={4}><Package className="pkgCamping" name="Camping" des=" " topic_1="Local" topic_2="Foriegn" lPrice="1000" fPrice="2000" /></Col>
                <Col sm={4}><Package className="pkgAbseiling" name="Abseiling" des="" topic_1="Local" topic_2="Foriegn" lPrice="10000" fPrice="20000" /></Col>

              </Row>

            </Row>
            <Container>
              <Row>
                <Col className="col_1 organize-optional">
                  <Form.Label>Optional</Form.Label>

                </Col>
                <Col className="col_2">
                  <Row classname="col_2_row_1">
                    <Form.Check
                      required
                      label="Hotel"

                    />
                  </Row>
                  <Row className='col_2_row_2'>
                    <Form.Check
                      required
                      label="BBQ"

                    />
                  </Row>

                </Col>
                <Col className="col_3">
                  <Row className="col_3_row_1">
                    <Form.Check
                      required
                      label="Transport"

                    />
                  </Row>
                  <Row className="col_3_row_2">
                    <Form.Check
                      required
                      label="Photoshoot"

                    />
                  </Row>

                </Col>
                <Col className='col_4'>
                  {/* <Row className="col_4_row_1">
                  <Form.Check
                    required
                    label="Abseilling"

                  />
                </Row> */}
                  <Row className="col_4_row_2">

                  </Row>
                </Col>

              </Row>
            </Container>

            <Form.Group className="mb-3">
              <Form.Check
                required
                label="I like to share your traveling guide"
                feedback="You must agree before submitting."
                feedbackType="invalid"
                className='organize-share-guide'
              />
            </Form.Group>
            <div className=' d-flex flex-row justify-content-end'>
              <Stack direction="horizontal" gap={3} className="d-flex flex-row justify-content-right">
                <Link to={"/welcome"}><Button variant=" ms-auto" className='organize-trip-back'>Back</Button></Link>{' '}
                <Link to={"/hotels"}><Button type='submit' variant=" ms-auto" className="organize-trip-next">Next</Button></Link>{' '}

              </Stack>
            </div>

          </Form>
        </div>
      </div>

    );
  }
//   else {
//     localStorage.clear();
//     // return props.history.push("/");
//     { return <div><NotFoundPage /></div> }

//   }
// }

// render(<oraganizeTrip />);
export default oraganizeTrip