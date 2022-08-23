import React from "react";

const SavedPlaces = ({data_1, placeInd}) => {
    return (
        <div>
            {data_1 [placeInd].map (item => (
                <div
                    // style={{backgroundImage: `url(${item.path})`}}
                    
                >
                    {/* <h2>Hello</h2> */}
                    <img src={item.path} alt="" srcset="" />
                </div>
            ))}
        </div>
    )
}
export default SavedPlaces