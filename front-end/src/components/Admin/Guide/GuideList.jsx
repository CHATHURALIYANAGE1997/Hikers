import React, { useState } from "react";
import './adminguide.css';
import AllGuider from "./AllGuider";


export default function GuideList(props) {

    const [modalShow, setModalShow] = React.useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const { guiders } = props;


    return (
        <div className="d-flex flex-column all-hotels-container">
            <div className="d-flex flex-row justify-content-between">
                <h4>Current Guiding Service Providers</h4>
            </div>

            <AllGuider guiders={guiders} />

        </div>
    );



}

// export default AllTransportProviders;