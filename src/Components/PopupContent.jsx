import React from "react";

const PopupContent = ({ country }) => {
  const flagUrl = country.countryInfo.flag;
  return (
    <div>
      <h3>{country.country}</h3>
      <img src={flagUrl} alt={`${country.country} Flag`} width={50} height={30} /> 
      <p>Total Active Cases: {country.active}</p>
      <p>Total Recovered Cases: {country.recovered}</p>
      <p>Total Deaths: {country.deaths}</p>
    </div>
  );
};

export default PopupContent;
