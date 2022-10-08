import * as React from 'react';
import './hotelprofile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashCan, faPencil } from "@fortawesome/free-solid-svg-icons";


function FacilitiesData(props) {

  const { facility } = props;

  const displayDetails = (props) => {

    if (facility.length > 0) {
      const id = localStorage.getItem("id");
      return (
        facility.map((facility, index) => {
          if (id == facility.id) {
            return (
              <>
                <div className='details-facility-container'>
                  <div className='d-flex flex-row justify-content-between'>
                    <h5 className='details-facility-name'>{facility.facility_name}</h5>
                    <div>
                      <FontAwesomeIcon icon={faTrashCan} className="rating-trash-icon" />
                      <FontAwesomeIcon icon={faPencil} className="rating-pencil-icon" />
                    </div>
                  </div>
                  {facility.description}
                </div>
              </>

            )
          }
        })
      )
    }
  }


  return (
    <>
      {displayDetails(props)}
    </>
  )

}

export default FacilitiesData;
