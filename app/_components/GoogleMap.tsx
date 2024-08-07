"use client";
import React, { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    initMap?: () => void;
  }
}

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

    window.initMap = () => {
      if (mapRef.current && window.google && window.google.maps) {
        new window.google.maps.Map(mapRef.current, {
          center,
          zoom: 15
        });
        setLoading(false);
      }
    };

    const loadGoogleMapsScript = () => {
      if (document.getElementById("google-maps-script")) {
        if (typeof window.google !== "undefined" && window.google.maps) {
          if (window.initMap) {
            window.initMap();
          }
        }
        return;
      }

      const script = document.createElement("script");
      script.id = "google-maps-script";
      script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap&loading=async`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    loadGoogleMapsScript();

    return () => {
      if (window.initMap) {
        delete window.initMap;
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
