// import React from "react";
//     import "./rateTransport.css"
//     import Form from 'react-bootstrap/Form';

//     const Rateoptions = () => {
//         return (
//             <div>
//                 {/* <div>
//                     <h1>{gender}</h1>
//                     <input type="radio" name="gender" value="Male" onChange={e=>setGender(e.target.value)} />Male
//                     <input type="radio" name="gender" value="Female" onChange={e=>setGender(e.target.value)} />Female
//                 </div> */}
//                 <div>
//                     <Form.Check className="selectionsrating"
//                         inline
//                         label="Excellent"
//                         name="group1"
//                         type="radio"
//                     />
//                     <Form.Check className="selectionsrating"
//                         inline
//                         label="Very Good"
//                         name="group1"
//                         type="radio"
//                     />
//                     <Form.Check className="selectionsrating"
//                         inline
//                         label="Good"
//                         name="group1"
//                         type="radio"
//                     />
//                     <Form.Check className="selectionsrating"
//                         inline
//                         label="Average"
//                         name="group1"
//                         type="radio"
//                     />
//                     <Form.Check className="selectionsrating"
//                         inline
//                         label="Poor"
//                         name="group1"
//                         type="radio"
//                     />
//                     <Form.Check className="selectionsrating"
//                         inline
//                         label="Very Poor"
//                         name="group1"
//                         type="radio"
//                     />
//                 </div>
//             </div>

//         );
//     }
//     export default Rateoptions;

import React, { useState } from "react";
import "./rateTransport.css"
function Securityoption() {
    const [security, setSecurity] = useState();
    return (
            <div>
                <h1>{security}</h1>
                <input type="radio"  name="security" value="Excellent"  />Excellent
                {/* onChange={e => setNavigationcapacity(e.target.value)} */}
                <input type="radio"  name="security" value="Very Goood" />Very Good
                <input type="radio"  name="security" value="Good"  />Good
                <input type="radio"  name="security" value="Average" />Average
                <input type="radio"  name="security" value="Poor" />Poor
                <input type="radio"  name="security" value="Very Poor"  />Very Poor
            </div>
    );
}
export default Securityoption;
