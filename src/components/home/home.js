import React from "react";
import Weather from "../weather/weather-service";
import Citybike from "../citybike/citybike";
import Navbar from "../navbar/navbar";
import Grid from "@material-ui/core/Grid";
import News from "../news/news";
import Carousel from "../carousel/carousel";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import RuterService from "../../services/ruter-service";

const useStyles = makeStyles(() => ({
  navbar: {
    paddingBottom: 60,
  },
  gridContainer: {
    justifyContent: "space-evenly",
  },
  linkBtn: {
    fontSize: "0.6em",
    padding: "15px",
    backgroundColor: "#235772",
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
        <div className={classes.navbar}>
          <Navbar />
        </div>
        <Grid className={classes.gridContainer} container spacing={6}>
          <Grid item xs={5}>
            <RuterService />
          </Grid>
          <Grid item xs={3}>
            <Grid container direction="column" spacing={6}>
              <Grid item>
                <Weather />
              </Grid>
              <Grid item>
                <Citybike />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.gridContainer} container spacing={6}>
          <Grid item xs={5}>
            <Carousel />
          </Grid>
          <Grid item xs={3}>
            <News />
          </Grid>
        </Grid>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link
            className={classes.linkBtn}
            to={"/scoreboard"}
            style={{ textDecoration: "none", textAlign: "center" }}
          >
            Go to Scoreboard
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
