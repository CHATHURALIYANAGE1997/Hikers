import React from "react";
import { 
    GoogleMap,
    useJsApiLoader,
    Marker,
    Autocomplete,
    DirectionsRenderer,
    DirectionsService,

} from "@react-google-maps/api";
// import mapStyles from './mapStyles'
import './trav_map.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useState, useRef } from "react";

const google = window.google
// const libraries = ["places"]
const mapContainerStyle = {
    width : '50vw',
    height : '50vh',

}
const center = {
    lat : 7.481517,
    lng : 80.363533,

}
const options = {
    // style : mapStyles,
    disableDefaultUI :  true,
    // zoomControl: false,
    zoomControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,

}

export default function TravMap () {
    const {isLoaded, loadError} =   useJsApiLoader ({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries : ["places"],

    })
    const initialLocations = {
        start: "",
        destination: "",

    }
    const [map, setMap] = useState(/** @type google.maps.googleMap */ (null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
    const [start, setStart] = useState (initialLocations)

    const handle = (e) => {
        const newStart = { ...start }
        newStart[e.target.name] = e.target.value
        setStart(newStart)
        // console.log(newStart)
        console.log(e)
    
    }
    // const [markers, setMarkers] = useState ([])
    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destiantionRef = useRef()

    async function calculateRoute() {
        // console.log (originRef.current.value, destiantionRef.current.value)
        if (originRef.current.value === '' || destiantionRef.current.value === '') {
          return

        }
        
    
        // const directionsService = new google.maps.DirectionsService()
        // const directionsService = new window.google.maps.DirectionsService()
        // const directionsService = new google.maps.DirectionsService ()
        // const results = await directionsService.route({
        //     origin: originRef.current.value,
        //     destination: destiantionRef.current.value,
        //     // eslint-disable-next-line no-undef
        //     travelMode: google.maps.TravelMode.DRIVING,

        // })
        // setDirectionsResponse(results)
        // setDistance(results.routes[0].legs[0].distance.text)
        // setDuration(results.routes[0].legs[0].duration.text)
        // console.log ('calculate')
        setDirectionsResponse(null)
        setDistance('')
        setDuration('')
        originRef.current.value = ''
        destiantionRef.current.value = ''
        
    }

    function clearRoute() {
        setDirectionsResponse(null)
        setDistance('')
        setDuration('')
        originRef.current.value = ''
        destiantionRef.current.value = ''
      }

    if (loadError) return "Error loading map"
    if (!isLoaded) return "Loading map"

    

    return (
        <div>
            <div className="searchArea">
                
                <Autocomplete>
                    <InputGroup className="mb-3">
                    
                        <Form.Control
                        placeholder="Start"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        ref={originRef}
                        name="start"
                        // value={originRef}
                        onClick={handle}
                        />
                    </InputGroup>
                </Autocomplete>
                <Autocomplete>
                    <InputGroup className="mb-3">
                    
                        <Form.Control
                        placeholder="Destination"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        ref={destiantionRef}
                        name="destination"
                        // value={start.destination}
                        onClick={handle}
                        />
                    </InputGroup>
                </Autocomplete>
                <Button variant="primary" type='submit' onClick={calculateRoute}>Search</Button>{' '}
                <Button variant="warning" onClick={clearRoute}>Clear</Button>{' '}
                <h4>{distance}</h4>
                <h4>{duration}</h4>

            </div>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={8}
                center={center}
                options={options}
                // onClick={(event) => {
                //     setMarkers (current => [
                //         ...current,
                //         {
                //             lat: event.latLng.lat (),
                //             lng: event.latLng.lng (),
                //             time: new Date (),

                //         },
                //     ])
                //     console.log (event)

                // }}
            >
                <Marker position={center} />
                    {directionsResponse && (
                        <DirectionsRenderer directions={directionsResponse} />
                    )}
            </GoogleMap>
        </div>
    )
}