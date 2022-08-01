import React from "react";
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import "../Styles/trav_selectPackages.css"
import Package from "../components/Trav_package/trav_package";

const selectPackages = () => {
    return (
        <div>
            <div className="packageContainer mx-auto">
                <h3>Select Yours</h3>
            <Stack gap={1} className="col-md-5 mx-auto">
                <Package name="One Day Hike" lPrice="1000" fPrice="2000"/>
                
            </Stack>
            </div>
        </div>

    )
}
export default selectPackages