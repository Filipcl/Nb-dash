import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  counter: {
    display: "flex",
  },

  counterAction: {
    border: "none",
    fontWeight: "bold",
    color: "#fafafa",
    display: "block",
    padding: "20px 20p",
    cursor: "pointer",
    userSelect: "none",
  },

  increment: {
    border: "none",
    fontWeight: "bold",
    color: "#fafafa",
    display: "block",
    padding: "20px 20px",
    cursor: "pointer",
    userSelect: "none",
    background: "#66bb6a",
    "&:hover": {
      background: "#549d59",
      cursor: "pointer",
    },
  },

  decrement: {
    border: "none",
    fontWeight: "bold",
    color: "#fafafa",
    display: "block",
    padding: "20px 20px",
    cursor: "pointer",
    userSelect: "none",
    backgroundColor: "#ef5350",
    "&:hover": {
      backgroundColor: "#c44442",
      cursor: "pointer",
    },
  },

  counterScore: {
    flexGrow: "1",
    backgroundColor: "#2b2b2b",
    color: "#fafafa",
    textAlign: "center",
    fontFamily: "monospace",
    padding: "10px",
    fontSize: "2em",
  },
}));

export default function Counter(props) {
  const styles = useStyles();
  return (
    <div className={styles.counter}>
      <button
        className={styles.decrement}
        onClick={() => {
          props.onChange(-1);
        }}
      >
        {" - "}
      </button>
      <div className={styles.counterScore}> {props.score} </div>
      <button
        className={styles.increment}
        onClick={() => {
          props.onChange(1);
        }}
      >
        {" + "}
      </button>
    </div>
  );
}
