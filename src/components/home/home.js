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
import { Box } from "@material-ui/core";

const useStyles = makeStyles(() => ({
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
      <div className={classes.navbar}>
        <Navbar />
      </div>
      <Box p={3}>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <Grid container spacing={3} direction="column">
              <Grid item>
                <RuterService />
              </Grid>
              <Grid item>
                <Carousel />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <>
              <Box mb={3}>
                <Grid container spacing={3}>
                  <Grid item xs>
                    <Weather />
                  </Grid>
                  <Grid item xs>
                    <Citybike />
                  </Grid>
                </Grid>
              </Box>
              <News />
            </>
          </Grid>
        </Grid>
      </Box>
      <Link
        className={classes.linkBtn}
        to={"/scoreboard"}
        style={{ textDecoration: "none", textAlign: "center" }}
      >
        Go to Scoreboard
      </Link>
    </>
  );
}

export default Home;
