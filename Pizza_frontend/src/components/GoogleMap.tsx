import React, { useEffect, useRef } from "react";

function GoogleMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    // 현재 위치 정보 가져오기
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // 구글 맵 초기화
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: latitude, lng: longitude },
          zoom: 15,
        });

        // 마커 추가
        new window.google.maps.Marker({
          position: { lat: latitude, lng: longitude },
          map,
          title: "현재 위치",
        });
      },
      (error) => {
        console.error("Error getting geolocation:", error);
      }
    );
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
}

export default GoogleMap;
