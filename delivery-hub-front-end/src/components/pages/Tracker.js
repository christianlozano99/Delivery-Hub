import {Flex} from '@chakra-ui/react'

import {useJsApiLoader, GoogleMap, Marker, DirectionsRenderer} from '@react-google-maps/api'
import {useRef, useState} from 'react'

import Packages from './../Packages';

const center = {
    lat: 48.8584,
    lng: 2.2945
}

function Tracker() {
    const {isLoaded} = useJsApiLoader({googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, libraries: ['places']})

    const [map, setMap] = useState( /** @type google.maps.Map */
            (null))
    const [directionsResponse, setDirectionsResponse] = useState(null)


    if (!isLoaded) {
        return (
            <h1>Loading Map</h1>
        );
    }

    return (
        <Flex position='flex' flexDirection='row' alignItems='left' h='93vh' w='100vw'>

            {/* Google Map Box */}
            <GoogleMap center={center}
                zoom={15}
                mapContainerStyle={
                    {
                        width: '80%',
                        height: '100%'
                    }
                }
                options={
                    {
                        zoomControl: false,
                        streetViewControl: false,
                        mapTypeControl: false,
                        fullscreenControl: false
                    }
                }
                onLoad={
                    map => setMap(map)
            }>
                <Marker position={center}/> {
                directionsResponse && (
                    <DirectionsRenderer directions={directionsResponse}/>
                )
            } </GoogleMap>
            <Packages></Packages>

        </Flex>


    )
}

export default Tracker
