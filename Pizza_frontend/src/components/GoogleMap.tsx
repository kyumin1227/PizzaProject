import React, { useRef, useEffect } from "react";

const GoogleMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const googleMap = new window.google.maps.Map(mapRef.current, {
      center: { lat: 37.5665, lng: 126.978 },
      zoom: 8,
    });
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
};

export default GoogleMap;
