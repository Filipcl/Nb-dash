import * as React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import createEnturService from "@entur/sdk";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import useInterval from "../hooks/useInterval";
import { uuid } from "uuidv4";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  grid: {
    margin: 20,
  },
});

function createData(direction, time, number, id) {
  return { direction, time, number, id };
}

async function getDepartures() {
  const service = createEnturService({
    clientName: "Nettbureau-reiseplanlegger",
  });

  let data = await service.getDeparturesFromStopPlaces(
    ["NSR:StopPlace:59675", "NSR:StopPlace:58253", "NSR:StopPlace:6488"],
    {
      limit: 15,
      includeCancelledTrips: false,
      includeNonBoarding: false,
    }
  );

  console.log(data);

  let all = data.map(function (places) {
    const departures = places.departures.map(function (departure) {
      let direction = departure.destinationDisplay.frontText;
      let time = departure.expectedDepartureTime.substr(11, 5);
      let number = departure.serviceJourney.journeyPattern.line.publicCode;
      let id = uuid();
      return createData(direction, time, number, id);
    });
    return {
      id: places.id,
      name: places.departures?.[0]?.quay?.name ?? places.id,
      departures,
    };
  });
  return all;
}

function RuterService() {
  const classes = useStyles();

  const [stops, setStops] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useInterval(async () => {
    try {
      const stops = await getDepartures();
      setStops(stops);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage("Failed to fetch ruter-departures.");
    }
  }, 1000 * 40);

  if (errorMessage) {
    return <TableContainer component={Paper}>{errorMessage}</TableContainer>;
  }

  return (
    <Grid className={classes.grid} container spacing={2} direction="coloumn">
      {stops.map((stop) => (
        <Grid item xs={4} key={stop.id}>
          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>{stop.name}</TableCell>
                  <TableCell align="left">Tid</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {stop.departures.map((d) => (
                  <TableRow key={d.id}>
                    <TableCell component="th" scope="row">
                      {d.number} {d.direction}
                    </TableCell>
                    <TableCell align="left">{d.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      ))}
    </Grid>
  );
}

export default RuterService;
