import React from "react";

const SavedPlaces = ({data_1, placeInd}) => {
    return (
        <div>
            {data_1 [placeInd].map (item => (
                <div
                    style={{backgroundImage: `url(${item.path})`}}
                    
                >

                </div>
            ))}
        </div>
    )
}
export default SavedPlaces