import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Logo from "../../assets/img/nettbureau-logo-navn.svg";

import Clock from "./clock";
import ShowDate from "./date";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    fontSize: 40,
    textAlign: "center",
    boxShadow: "none",
    color: "#FFFFFF",
    backgroundColor: "#1d4a62",
  },
  gridContainer: {
    padding: 0,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid className={classes.gridContainer} container>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Clock />
          </Paper>
        </Grid>
        <Grid item xs>
          <img
            src={Logo}
            style={{ height: 100, width: 350 }}
            alt="Nettbureau"
          />
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <ShowDate />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
