import React, { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Passwordhidden = () => {

    const [passwordType, setPasswordType] = useState('password')
    const [passwordIcon, setPasswordIcon] = useState(<FaEyeSlash />);

    const handelToggle = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
            setPasswordIcon(FaEye);
        } else {
            setPasswordType('password');
            setPasswordIcon(FaEyeSlash);
        }
    }
    return (
        <>
            <div class="loginform-input">
            <span className="loginiconpw"><i class="fa fa-key"></i></span>
            <input className="password-field" type={passwordType} class="form-control" placeholder="Password" required />
            <span className="pbtn" onClick={handelToggle}>
                {passwordIcon}
            </span>
            </div>
        </>
    );
}

export default Passwordhidden;