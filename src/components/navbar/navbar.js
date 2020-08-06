import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Logo from "../../assets/img/nettbureau-logo-hvit.svg";
import ShowDate from "./date";
import Clock from "./clock";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#235772",
  },
  paper: {
    padding: theme.spacing(1),
    fontSize: 40,
    textAlign: "center",
    boxShadow: "none",
    backgroundColor: "#235772",
  },
  gridItem: {
    alignSelf: "center",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid className={classes.gridContainer} container>
        <Grid item xs className={classes.gridItem}>
          <Paper className={classes.paper}>
            <Clock />
          </Paper>
        </Grid>
        <Grid item xs className={classes.paper}>
          <img
            src={Logo}
            style={{ height: 100, width: 300 }}
            alt="Nettbureau"
          />
        </Grid>
        <Grid item xs className={classes.gridItem}>
          <Paper className={classes.paper}>
            <ShowDate />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
