import React from "react";
import "./App.css";
import Weather from "./services/weather-service";
import ProbabilityForcast from "./services/Probabilityforecast-service";
import Navbar from "./components/navbar/navbar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import News from "./components/news";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    flexGrow: 1,
    backgroundColor: "#1d4a62",
    boxShadow: "none",
  },
  test: {
    justifyContent: "center",
    margin: 15,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Navbar />
      <Grid className={classes.test} container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Weather />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <ProbabilityForcast />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <iframe
              width="723.7196765498652"
              height="445.5"
              seamless
              frameborder="0"
              scrolling="no"
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQerZOGkM4-4slIOiDVLD4fJbtU_13a4O0A75ZBPXlWLbPMjhtMkVCNfQCjU5jO3dE_secXVU4bSG6q/pubchart?oid=809200848&amp;format=interactive"
            ></iframe>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <News />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
