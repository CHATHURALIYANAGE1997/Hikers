import React from 'react';
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';
import './signup.css';

const Phone = ()=> {
  const [value, setValue] = useState()
  return (
    <div>
    <PhoneInput
    className='phone'
      placeholder="Telephone number"
      value={value}
      onChange={setValue}/>
    </div>
  )

};

export default Phone;
