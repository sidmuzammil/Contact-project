import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Leaflet.css";
import L from "leaflet";
import axios from "axios";
import PopupContent from "./PopupContent";

const Leafletmap = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get("https://disease.sh/v3/covid-19/countries")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="covid-map">
      <MapContainer center={[48.8566, 2.3522]} zoom={2}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {!loading &&
          data.map((country) => (
            <Marker
              key={country.country}
              position={[country.countryInfo.lat, country.countryInfo.long]}
              icon={L.divIcon({
                className: "flag icon",
                html: `
                  <div>
                  <img src="${country.countryInfo.flag}" alt="${country.country} Flag" width="30" height="20">
                  <div>${country.country}</div>
                  </div>
                `,
              })}
            >
              <Popup>
                <PopupContent country={country} />
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

export default Leafletmap;
