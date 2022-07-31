import React from "react";
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import "../Styles/trav_selectPackages.css"
import Package from "../components/Trav_package/trav_package";

const selectPackages = () => {
    return (
        <div>
            {/* <div className="packageContainer"> */}
            <Stack gap={1} className="col-md-5 mx-auto">
                <Package name="One Day Hike"/>
                {/* <Button variant="outline-secondary">Cancel</Button>
                <Button variant="outline-secondary">Cancel</Button> */}
            </Stack>
            {/* </div> */}
        </div>

    )
}
export default selectPackages