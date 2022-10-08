import * as React from 'react';
import './hotelprofile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashCan, faPencil } from "@fortawesome/free-solid-svg-icons";


function RulesData(props) {

    const { rules } = props;

    const displayDetails = (props) => {

        if (rules.length > 0) {
            const id = localStorage.getItem("id");
            return (
                rules.map((rule, index) => {
                    if (id == rule.hotel_id) {
                        console.log(rule.description);
                        return (
                            <>
                                <li>{rule.description}</li>
                            </>

                        )
                    }
                })
            )
        } else {
            return (
                <>
                    No rules
                </>
            )
        }
    }


    return (
        <>
            {displayDetails(props)}
        </>
    )

}

export default RulesData;
