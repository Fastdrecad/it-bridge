"use client";
import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

interface GoogleMapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
}

export default function GoogleMap({
  center = { lat: 44.8169, lng: 20.4568 },
  zoom = 15
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
        version: "weekly",
        libraries: ["marker"]
      });

      await loader.load();
      const { Map } = await google.maps;
      const { AdvancedMarkerElement } = await loader.importLibrary("marker");

      const map = new Map(mapRef.current!, {
        center,
        zoom,
        mapId: "IT_BRIDGE_MAP"
      });

      new AdvancedMarkerElement({
        map,
        position: center,
        title: "IT Bridge - Obilićev venac 18"
      });
    };

    initMap();
  }, [center, zoom]);

  return (
    <div ref={mapRef} className="w-full h-auto min-h-[400px] rounded-lg" />
  );
}
