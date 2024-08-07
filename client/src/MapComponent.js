import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';

const MapComponent = () => {
    const [addresses, setAddresses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/addresses')
            .then(response => setAddresses(response.data))
            .catch(error => console.error('Error fetching addresses:', error));
    }, []);

    return (
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
                mapContainerStyle={{ width: '100%', height: '400px' }}
                center={{ lat: 39.8283, lng: -98.5795 }}
                zoom={4}
            >
                {addresses.map((address, index) => (
                    <Marker
                        key={index}
                        position={{ lat: address.latitude, lng: address.longitude }}
                    />
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
