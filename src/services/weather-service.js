import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import moment from "moment";
import { WeatherSymbol } from "@yr/weather-symbols";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "#21374a",
    padding: 50,
  },
  media: {
    marginLeft: "auto",
    height: 70,
    width: 70,
    marginTop: "30",
  },
  iconGrid: {
    justifyContent: "center",
  },
  divider: {
    color: "#FFF",
  },
});

const icons = {
  clearsky_day: "01d",
  clearsky_night: "01n",
  clearsky_morning: "01m",
  fair_day: "02d",
  fair_night: "02n",
  fair_morning: "02m",
  partlycloudy_day: "03d",
  partlycloudy_night: "03n",
  partlycloudy_morning: "03m",
  cloudy: "04",
  lightrainshowers_day: "40d",
  lightrainshowers_night: "40n",
  lightrainshowers_morning: "40m",
  rainshowers_day: "05d",
  rainshowers_night: "05n",
  rainshowers_morning: "05m",
  heavyrainshowers_day: "41d",
  heavyrainshowers_night: "41n",
  heavyrainshowers_morning: "41m",
  lightrainshowersandthunder_day: "42d",
  lightrainshowersandthunder_night: "42n",
  lightrainshowersandthunder_morning: "42m",
  rainshowersandthunder_day: "06d",
  rainshowersandthunder_night: "06n",
  rainshowersandthunder_morning: "06m",
  heavyrainshowersandthunder_day: "25d",
  heavyrainshowersandthunder_night: "25n",
  heavyrainshowersandthunder_morning: "25m",
  lightsleetshowers_day: "42d",
  lightsleetshowers_night: "42n",
  lightsleetshowers_morning: "42m",
  sleetshowers_day: "07d",
  sleetshowers_night: "07n",
  sleetshowers_morning: "07m",
  heavysleetshowers_day: "43d",
  heavysleetshowers_night: "43n",
  heavysleetshowers_morning: "43m",
  lightssleetshowersandthunder_day: "26d",
  lightssleetshowersandthunder_night: "26n",
  lightssleetshowersandthunder_morning: "26m",
  sleetshowersandthunder_day: "20d",
  sleetshowersandthunder_night: "20n",
  sleetshowersandthunder_morning: "20m",
  heavysleetshowersandthunder_day: "27d",
  heavysleetshowersandthunder_night: "27n",
  heavysleetshowersandthunder_morning: "27m",
  lightsnowshowers_day: "44d",
  lightsnowshowers_night: "44n",
  lightsnowshowers_morning: "44m",
  snowshowers_day: "08d",
  snowshowers_night: "08n",
  snowshowers_morning: "08m",
  heavysnowshowers_day: "45d",
  heavysnowshowers_night: "45n",
  heavysnowshowers_morning: "45m",
  lightssnowshowersandthunder_day: "28d",
  lightssnowshowersandthunder_night: "28n",
  lightssnowshowersandthunder_morning: "28m",
  snowshowersandthunder_day: "21d",
  snowshowersandthunder_night: "21n",
  snowshowersandthunder_morning: "21m",
  heavysnowandthunder_day: "29d",
  heavysnowandthunder_night: "29n",
  heavysnowandthunder_morning: "29m",
  lightrain: "46",
  rain: "09",
  heavyrain: "10",
  lightrainandthunder: "30",
  rainandthunder: "22",
  heavyrainandthunder: "11",
  lightsleet: "47",
  sleet: "12",
  heavysleet: "48",
  lightsleetandthunder: "31",
  sleetandthunder: "23",
  heavysleetandthunder: "32",
  lightsnow: "49",
  snow: "13",
  heavysnow: "50",
  lightsnowandthunder: "33",
  snowandthunder: "14",
  heavysnowandthunder: "34",
  fog: "15",
};

const keys = Object.keys(icons);
const values = Object.values(icons);

console.log(keys);
console.log(values);

function Weather() {
  const classes = useStyles();

  const [data, setData] = useState(null);
  const lat = "59.919159";
  const lon = "10.764486";
  const url = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`;
  const src =
    "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png";

  const newdate = moment().startOf("hour");

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, []);

  if (!data) {
    return "loading...";
  }

  const weather = data.properties.timeseries.find((item) => {
    return moment(item.time).isSame(newdate);
  });
  const icon2 = weather?.data?.next_1_hours?.summary?.symbol_code;
  const icon = "02d";
  const test = () => {
    keys.find(icon2);
    console.log(test.values);
  };

  return (
    <Grid className={classes.root}>
      <Grid item xs>
        <Grid item container direction="row" className={classes.iconGrid}>
          <Grid item>
            <WeatherSymbol id={icon} type="img" rootImagePath="/png/48/" />
          </Grid>
          <Grid item>
            <Typography variant="h3">
              {weather?.data?.instant?.details?.air_temperature + "°" ?? "-"}
            </Typography>
          </Grid>
        </Grid>

        <Grid item>
          <Divider classes={{ root: "divider" }} variant="inset" />
          <Typography>
            {weather?.data?.next_1_hours?.details?.precipitation_amount +
              " mm" ?? "-"}
          </Typography>
          <Typography>
            {weather?.data?.instant?.details?.wind_speed + " m/s" ?? "-"}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Weather;
