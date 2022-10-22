import React from "react";
    import "./rateTransport.css"
    import Form from 'react-bootstrap/Form';

    const Rateoptions = () => {
        return (
            <div>
                <div>
                    <Form.Check className="selectionsrating"
                        inline
                        label="Excellent"
                        name="group1"
                        type="radio"
                    />
                    <Form.Check className="selectionsrating"
                        inline
                        label="Very Good"
                        name="group1"
                        type="radio"
                    />
                    <Form.Check className="selectionsrating"
                        inline
                        label="Good"
                        name="group1"
                        type="radio"
                    />
                    <Form.Check className="selectionsrating"
                        inline
                        label="Average"
                        name="group1"
                        type="radio"
                    />
                    <Form.Check className="selectionsrating"
                        inline
                        label="Poor"
                        name="group1"
                        type="radio"
                    />
                    <Form.Check className="selectionsrating"
                        inline
                        label="Very Poor"
                        name="group1"
                        type="radio"
                    />
                </div>
            </div>

        );
    }
    export default Rateoptions;