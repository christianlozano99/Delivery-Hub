import {Flex} from '@chakra-ui/react'
import Geocode from "react-geocode";

import {useJsApiLoader, GoogleMap, Marker, google} from '@react-google-maps/api'
import {useState} from 'react'

import Packages from './../Packages';

const center = {
    lat: 38.645836,
    lng: -95.331664
}

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
Geocode.setLanguage("en");
Geocode.setLocationType("ROOFTOP");


// var Markers = [[]];

function mapItems(map) {
    setTimeout(function () {
        var location = document.getElementsByClassName("location");


        for (var i = 0; i < location.length; i++) {
            var thisLocation = location[i].innerHTML.split("Location: ");
            console.log(thisLocation[1]);

            Geocode.fromAddress(thisLocation[1]).then((response) => {
                const {lat, lng} = response.results[0].geometry.location;
                var markerPosition = {
                    lat: lat,
                    lng: lng
                }
                new Marker();

                console.log(markerPosition);
            }, (error) => {
                console.error(error);
            });
        }
    }, 1);
}


function Tracker() {
    const {isLoaded} = useJsApiLoader({googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, libraries: ['places']})

    const [map, setMap] = useState( /** @type google.maps.Map */
            (null))


    if (!isLoaded) {
        return (
            <h1>Loading Map</h1>
        );
    }
    mapItems(map);
    return (
        <Flex position='flex' flexDirection='row' alignItems='left' h='93vh' w='100vw'>

            {/* Google Map Box */}
            <GoogleMap center={center}
                zoom={4.9}
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
            }></GoogleMap>
            <Packages></Packages>
        </Flex>
    )
}

export default Tracker
