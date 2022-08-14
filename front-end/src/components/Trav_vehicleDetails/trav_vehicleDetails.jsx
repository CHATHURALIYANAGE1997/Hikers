import React from "react";

const VehicleDetails = ({data, vehiInd}) => {
    return (
        <div>
            {data [vehiInd].map (item => (
                <div>
                    <label htmlFor="" className="trnspd_vehicleType">Vehicle Type :</label>
                    <h4>{item.title}</h4>
                    <label htmlFor="" className="trnspd_passengers">Maximum Pasengers :</label>
                    <h4>{item.passengers}</h4>
                    <label htmlFor="" className="trnspd_passengers">Rate (Rs/Km) :</label>
                    <h4>{item.rate}</h4>
                </div>
            ))}
        </div>
        

    )
}
export default VehicleDetails