import React from "react";
import Weather from "../weather/weather-service";
import ProbabilityForcast from "../Probabilityforecast-service";
import Navbar from "../navbar/navbar";
import Grid from "@material-ui/core/Grid";
import News from "../news/news";
import Carousel from "../carousel/carousel";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    justifyContent: "space-evenly",
    margin: 15,
  },
  linkBtn: {
    fontSize: "0.6em",
    padding: "15px",
    backgroundColor: "#21374a",
    borderRadius: "5px",
    border: "none",
    color: "#FFF",
    letterSpacing: "2px",
    fontWeight: "bold",
    textShadow: "none",
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: "#4b71b5",
      cursor: "pointer",
    },
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <>
      <div className="App">
        <Navbar />
        <Grid className={classes.gridContainer} container spacing={3}>
          <Grid item xs={6} zeroMinWidth>
            <ProbabilityForcast />
          </Grid>
          <Grid item xs={3} zeroMinWidth>
            <Weather />
          </Grid>
        </Grid>

        <Grid className={classes.gridContainer} container spacing={3}>
          <Grid item xs={6} zeroMinWidth>
            <Carousel />
          </Grid>
          <Grid item xs={3} zeroMinWidth>
            <News />
          </Grid>
        </Grid>
        <Link
          className={classes.linkBtn}
          to={"/scoreboard"}
          style={{ textDecoration: "none" }}
        >
          Go to Scoreboard
        </Link>
      </div>
    </>
  );
}

export default Home;
