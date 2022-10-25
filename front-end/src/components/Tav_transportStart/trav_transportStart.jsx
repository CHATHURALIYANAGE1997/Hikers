import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { Autocomplete } from "@react-google-maps/api";

const TransportStart = (props) => {
  return (
    <div>
      <Autocomplete>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          {props.labelName}
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"

        />
      </InputGroup>
      </Autocomplete>
      
    </div>
  );
};
export default TransportStart;
