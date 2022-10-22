import * as React from 'react';
import './hotelprofile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashCan, faPencil } from "@fortawesome/free-solid-svg-icons";
import ChangeFacility from './ChangeFacility';
import { useState } from 'react';


function FacilitiesData(props) {

  const [facid, setFacid] = useState('');

  const handleClick = (e) => {
    setFacid(e);
  }

  const { facility } = props;

  const [changeFacility, setChangeFacility] = React.useState(false);

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
                    <div className='facility-data-icons'>
                      <FontAwesomeIcon onClick={() => {setChangeFacility(true); handleClick(facility);}} icon={faPencil} className="rating-pencil-icon" />
                      <ChangeFacility
                        show={changeFacility}
                        onHide={() => setChangeFacility(false)}
                        // changingFacility={facility}
                        facId={facid}
                      />
                      <FontAwesomeIcon icon={faTrashCan} className="rating-trash-icon" />
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
