import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

//  constant
const mapContainerStyle = {
  width: '770px',
  height: '441.44px',
};

const libraries = ["places"];
const center = {
  lat: 7.2905715, // default latitude
  lng: 80.6337262, // default longitude
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }
  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={10} center={center}>
      <Marker position={center} />
    </GoogleMap>
  );
};

export default Map;
