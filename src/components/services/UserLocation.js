import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import osm from "./osm-providers";
import "leaflet/dist/leaflet.css";
import { FaGlobeAmericas } from "react-icons/fa";
import useGeoLocation from "./useGeoLocation";
import L from "leaflet";
import cities from "./cities.json";

function UserLocation() {
  const navigate = useNavigate();
  const [center, ] = useState({ lat: 13.084622, lng: 80.248357 });
  const Z00M_LEVEL = 8;
  const mapRef = useRef();

  const handleContinue = () => {
    navigate("/packages/subscribe/payment");
  };

  const markerIcon = new L.Icon({
    iconUrl: require("../../assets/markerLoc.png"),
    iconSize: [35, 45],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
  });


  const hosptialMarkIcon = new L.Icon({
    iconUrl: require("../../assets/hospital.png"),
    iconSize: [25, 25],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
  });

  const location = useGeoLocation();

  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      mapRef.current.flyTo(
        [location.coordinates.lat, location.coordinates.lng],
        Z00M_LEVEL,
        { animate: true }
      );
    } else {
      alert(location.error.message);
    }
  };

  return (
    <div>
      <div className="my-6 text-2xl ml-3 text-gray-500 font-bold">
        Select Desired Hosptial Icon to continue furtur process...
      </div>
      <div>
        <MapContainer
          center={center}
          zoom={Z00M_LEVEL}
          ref={mapRef}
        >
          <TileLayer
            url={osm.maptiler.url}
            attribution={osm.maptiler.attribution}
          />
          {/* Your Loaction Marker */}
          {location.loaded && !location.error && (
            <Marker
              icon={markerIcon}
              position={[location.coordinates.lat, location.coordinates.lng]}
            ></Marker>
          )}
          {/* Hospital Loaction Marker */}
          {cities.map((city,idx)=>
            <Marker icon={hosptialMarkIcon} position={[city.lat, city.lng]} className="bg-sky-700">
              <Popup>
                <b onClick={handleContinue} className="cursor-pointer">{city.city}, {city.country}, (click to BOOK)</b>
              </Popup>
            </Marker>
            )}
        </MapContainer>
      </div>
      <div
        className="flex items-center justify-center fixed bottom-0 bg-sky-800 text-white uppercase w-full font-bold text-2xl hover:bg-sky-300 cursor-pointer"
        onClick={showMyLocation}
      >
        <div>Locate Me</div>
        <FaGlobeAmericas className="m-6" />
      </div>
    </div>
  );
}

export default UserLocation;
