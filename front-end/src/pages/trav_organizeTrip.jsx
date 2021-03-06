import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import "../Styles/trav_organizeTrip.css"
import Container from 'react-bootstrap/Container';

function oraganizeTrip() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <p className="txtOrganizeTrip">Organize it</p>
    <div className="formContainer">
        
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          
      <Row className="mb-3">                                                {/* Name */}
        <Form.Group as={Row} md="4" controlId="validationCustom01">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            // defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
              You must enter the name.
            </Form.Control.Feedback>
          
        </Form.Group>
        
      </Row>
                                                                          {/* # of crowd */}
      <Row className="mb-3">                                                                                   
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>No of Crowd</Form.Label>
          
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Adults</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Less than 20"
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
              Please a valid number
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Children</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Less than 20"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please a valid number
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      
      <Row className="mb-3">                                                {/* Date */}
        <Form.Group as={Row} md="6" controlId="validationCustom03">
          <Form.Label>Date</Form.Label>
          <Form.Control type="text" placeholder="DD/MM/YYYY" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group as={Row} md="3" controlId="validationCustom04">             {/* Location */}
          <Form.Label>Location</Form.Label>
          {/* <Form.Control type="text" placeholder="State" required /> */}
          <Form.Select aria-label="Select a location">
            <option>Select a location</option>
            <option value="1">Dolukanda</option>
            <option value="2">Bathalegala</option>
            <option value="3">Hulangala</option>

          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
      </Row>
      
      {/* <Form.Check reverse aria-label="option 1" label="Option"/> */}
      {/* <Row className='OptinalDiv'>
          <Col className='txtOptional'></Col>
      </Row> */}
      <Container>
        <Row>
          <Col className = "col_1">
          <Form.Label>Optional</Form.Label>

          </Col>
          <Col className = "col_2">
            <Row classname="col_2_row_1">
            <Form.Check
              // required
              label="Hotel"

            />
            </Row>
            <Row className='col_2_row_2'>
              <Form.Check
                // required
                label="BBQ"

              />
            </Row>
            
          </Col>
          <Col className="col_3">
            <Row className="col_3_row_1">
            <Form.Check
              // required
              label="Transport"

            />
            </Row>
            <Row className="col_3_row_2">
            <Form.Check
              // required
              label="Photoshoot"

            />
            </Row>
          
          </Col>
          <Col className='col_4'>
            <Row className="col_4_row_1">
              <Form.Check
                // required
                label="Abseilling"

              />
            </Row>
            <Row className ="col_4_row_2">
              
            </Row>
          </Col>
          
        </Row>
    </Container>

      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
    </div>
    </div>
    
  );
}

// render(<oraganizeTrip />);
export default oraganizeTrip