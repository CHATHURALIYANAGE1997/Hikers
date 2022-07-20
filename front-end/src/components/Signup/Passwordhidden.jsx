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
            <input className="password-field" type={passwordType} class="form-control" placeholder="Password" />
            <span className="pbtn" onClick={handelToggle}>
                {passwordIcon}
            </span>
        </>
    );
}

export default Passwordhidden;