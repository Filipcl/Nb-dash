import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import { WeatherSymbol } from "@yr/weather-symbols";

import iconList from "./iconList.json";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#21374a",
    padding: 40,
  },
  iconGrid: {
    justifyContent: "center",
  },
});

function Weather() {
  const classes = useStyles();

  const [data, setData] = useState(null);
  const lat = "59.919159";
  const lon = "10.764486";
  const url = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`;

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

  const icon = weather?.data?.next_1_hours?.summary?.symbol_code;
  const icons = iconList;
  const values = Object.values(icons);
  const keys = Object.keys(icons);

  function getIcon() {
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === icon) {
        return values[i];
      }
    }
  }

  return (
    <Grid className={classes.root}>
      <Grid item xs>
        <Grid item container direction="row" className={classes.iconGrid}>
          <Grid item>
            <WeatherSymbol id={getIcon()} type="img" rootImagePath="/png/48/" />
          </Grid>
          <Grid item>
            <Typography variant="h3">
              {weather?.data?.instant?.details?.air_temperature + "°" ?? "-"}
            </Typography>
          </Grid>
        </Grid>

        <Grid item>
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
