import React from 'react';
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';
import './signup.css';

const Phone = () => {
  const [value, setValue] = useState()
  return (
    <div>
      <div class="col-12">
        <div className="form-control">
          <PhoneInput
            className='phone'
            placeholder="Telephone number"
            value={value}
            onChange={setValue} />
        </div>
      </div>
    </div>
  )

};

export default Phone;
