import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff",
    padding: 40,
    border: "1px solid rgba(0, 0, 0, 0.12)",
  },
  iconGrid: {
    justifyContent: "center",
  },
  stationName: {
    paddingBottom: "10px",
  },
  bikeIcon: {
    paddingRight: "10px",
  },
});
function Citybike() {
  const classes = useStyles();

  const [data, setData] = useState(null);
  const stationId = "507";
  const url = `https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json`;
  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data.data);
    });
  }, []);

  if (!data) {
    return "loading...";
  }

  const station = data.stations.find((item) => {
    return item.station_id === stationId;
  });

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5">Jens Bjelkes gate</Typography>
        <Grid item container direction="row" className={classes.iconGrid}>
          <DirectionsBikeIcon className={classes.bikeIcon} color="primary" />
          <Grid item>
            <Typography variant="h6" className={classes.staionInfo}>
              {station.num_bikes_available +
                "/" +
                (station.num_docks_available + station.num_bikes_available)}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Citybike;
