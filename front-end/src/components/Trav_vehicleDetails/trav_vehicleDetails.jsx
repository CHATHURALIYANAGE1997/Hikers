import React from "react";

const VehicleDetails = ({data, vehiInd}) => {
    return (
        <div>
            {data [vehiInd].map (item => (
                <div>
                    <h4>{item.title}</h4>
                    <h4>{item.passengers}</h4>
                </div>
            ))}
        </div>
        

    )
}
export default VehicleDetails