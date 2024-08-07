"use client";

import React, { useCallback, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px"
};

const center = {
  lat: 44.8186, // Latitude of Obilićev Venac
  lng: 20.4571 // Longitude of Obilićev Venac
};

interface MapProps {
  apiKey: string;
}

const GoogleMapComponent = () => {
  const [selectedPlace, setSelectedPlace] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const handleMarkerClick = useCallback(() => {
    setSelectedPlace(center);
  }, []);

  const handleInfoWindowCloseClick = useCallback(() => {
    setSelectedPlace(null);
  }, []);

  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker
          position={center}
          title="Obilićev Venac, Belgrade, Serbia"
          onClick={handleMarkerClick}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;

// const Map: React.FC<MapProps> = ({ apiKey }) => {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: apiKey
//   });

// const [selectedPlace, setSelectedPlace] = useState<{
//   lat: number;
//   lng: number;
// } | null>(null);

// const handleMarkerClick = useCallback(() => {
//   setSelectedPlace(center);
// }, []);

// const handleInfoWindowCloseClick = useCallback(() => {
//   setSelectedPlace(null);
// }, []);

// if (loadError) return <div>Error loading maps</div>;
// if (!isLoaded) return <div>Loading...</div>;
//   return (
//     <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
//       <Marker
//         position={center}
//         title="Obilićev Venac, Belgrade, Serbia"
//         onClick={handleMarkerClick}
//       />
//       {selectedPlace && (
//         <InfoWindow
//           position={selectedPlace}
//           onCloseClick={handleInfoWindowCloseClick}
//         >
//           <div>
//             <h2>Obilićev Venac</h2>
//             <p>Belgrade, Serbia</p>
//           </div>
//         </InfoWindow>
//       )}
//     </GoogleMap>
//   );
// };

// export default Map;
