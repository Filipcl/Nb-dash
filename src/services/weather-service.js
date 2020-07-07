import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./weather.css";

function Weather() {
  const [data, setData] = useState(null);
  const lat = "59.919159";
  const lon = "10.764486";
  const url = `https://api.met.no/weatherapi/locationforecast/2.0/?lat=${lat}&lon=${lon}`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, []);

  if (!data) {
    return "loading...";
  }
  return (
    <div className="container">
      <h1>API-info</h1>
      <p>{data.type}</p>
      <p>
        {data.properties.timeseries.map((item) => {
          return <div>{item.time}</div>;
        })}
      </p>
    </div>
  );
}

export default Weather;
