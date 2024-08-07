"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "400px"
};

const center = {
  lat: 44.8186, // Latitude of Obilićev Venac
  lng: 20.4571 // Longitude of Obilićev Venac
};

const GoogleMapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [loading, setLoading] = useState(true);

  const handleMarkerClick = useCallback(() => {
    if (map) {
      map.setCenter(center);
    }
  }, [map]);

  useEffect(() => {
    const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

    const loadGoogleMapsScript = () => {
      return new Promise((resolve, reject) => {
        if (document.getElementById("google-maps-script")) {
          resolve(window.google);
          return;
        }

        const script = document.createElement("script");
        script.id = "google-maps-script";
        script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}`;
        script.async = true;
        script.defer = true;
        script.onload = () => resolve(window.google);
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    loadGoogleMapsScript()
      .then(() => {
        if (mapRef.current && window.google) {
          const newMap = new window.google.maps.Map(mapRef.current, {
            center,
            zoom: 15
          });
          setMap(newMap);
        }
      })
      .catch((error) => {
        console.error("Failed to load Google Maps script:", error);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      // Clean up the script tag if necessary
      const script = document.getElementById("google-maps-script");
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <div>
      {loading ? <p>Loading map...</p> : null}
      <div ref={mapRef} style={containerStyle}></div>
    </div>
  );
};

export default GoogleMapComponent;
