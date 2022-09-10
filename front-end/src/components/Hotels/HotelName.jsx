
import React from "react";

export default function HotelName(props) {

    const {name} = props;

    return(
        <div>
                <h2 className="mb-3 title font-weight-bold hotel-name">{name}</h2>
        </div>
    );
}

// export default HotelName;