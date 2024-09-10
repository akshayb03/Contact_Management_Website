import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import axios from "axios";
import { Country } from "../utils/utils";
import { useQuery } from "@tanstack/react-query";

import L from "leaflet";
import { ErrorMessage } from "./ErrorMessage";
import { Loader } from "./Loader";

const customIcon = L.icon({
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  shadowSize: [41, 41],
});

const fetchData = async () => {
  const result = await axios("https://disease.sh/v3/covid-19/countries");
  return result.data;
};

export const Map = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["map"],
    queryFn: fetchData,
  });
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    if (data) {
      setCountries(data);
    }
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage msg={error.message} />;
  }

  return (
    <MapContainer center={[20, 30]} zoom={3}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {countries.map((country) => (
        <Marker
          key={country.country}
          position={[country.countryInfo.lat, country.countryInfo.long]}
          icon={customIcon}
          eventHandlers={{
            mouseover: (e) => {
              const marker = e.target;
              marker.openPopup();
            },
            mouseout: (e) => {
              const marker = e.target;
              marker.closePopup();
            },
          }}
        >
          <Popup>
            <strong>{country.country}</strong>
            <br />
            Active Cases: {country.active}
            <br />
            Recovered Cases: {country.recovered}
            <br />
            Deaths: {country.deaths}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
