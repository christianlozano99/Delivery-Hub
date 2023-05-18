import {Flex} from '@chakra-ui/react'
import {useJsApiLoader, GoogleMap, Marker} from '@react-google-maps/api'
import {useState, useEffect} from 'react'
import Packages from './../Packages';

const center = {
    lat: 38.645836,
    lng: -95.331664
}

function loadPackages() {
    const packages_data = [
        {
            id: 1,
            packageItem: 'Iphone Protector',
            currentStatus: 'Out for delivery',
            expected: '12/25/2022',
            location: "FORT WORTH TX DISTRIBUTION CENTER",
            lat: 32.821838,
            lng: -97.460938
        },
        {
            id: 2,
            packageItem: 'Air Freshener',
            currentStatus: 'Delivered',
            expected: '12/01/2022',
            location: "Miami FL DISTRIBUTION CENTER",
            lat: 28.041290,
            lng: -81.987488
        },
        {
            id: 3,
            packageItem: 'Keurig',
            currentStatus: 'Shipped',
            expected: '11/30/2022',
            location: "Orlando FL DISTRIBUTION CENTER",
            lat: 28.642620,
            lng: -80.700340
        }
    ];
    
    return packages_data.map((data, i) => (
        <Marker key={i} position={{ lat: data.lat, lng: data.lng }} />
    ));
}

export default function Tracker() {
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places']
    });

    const [markers, setMarkers] = useState([]);
    const [selectedMarker, setSelectedMarker] = useState(null);


    
    const markerPlacer = () => {
        setMarkers(loadPackages());
    };

    useEffect(() => {
        markerPlacer();
    }, []);

    if (!isLoaded) {
        return (
            <h1>Loading Map</h1>
        );
    }

    return (
        <Flex position='flex' flexDirection='row' alignItems='left' h='93vh' w='100vw'>
            <GoogleMap 
                center={center}
                zoom={4.9}
                mapContainerStyle={{
                    width: '80%',
                    height: '100%'
                }}
                options={{
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false
                }}
            >
                {isLoaded && markers}
            </GoogleMap>
            <Packages markers={markers} selectedMarker={selectedMarker} setSelectedMarker={setSelectedMarker} />
        </Flex>
    );
}