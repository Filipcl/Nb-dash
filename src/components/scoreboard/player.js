import React, { forwardRef } from "react";
import Counter from "./counter";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  player: {
    display: "flex",
    fontSize: "1.2em",
    borderBottom: "solid 2px #444",
    letterSpacing: "2px",
  },
  removePlayer: {
    visibility: "hidden",
    marginRight: "10px",
    color: "#e57373",
    cursor: "pointer",
    textDecoration: "none",
  },
  playerName: {
    flexGrow: "1",
    color: "#FFF",
    padding: "20px 10px 10px 10px",
    "&:hover": {
      "& $removePlayer": {
        visibility: "visible",
        background: "none",
        border: "none",
      },
    },
  },

  playerScore: {
    width: "190px",
    backgroundColor: "blue",
  },
}));

function Player(props, ref) {
  const styles = useStyles();
  return (
    <div ref={ref} className={styles.player}>
      <div className={styles.playerName}>
        <button className={styles.removePlayer} onClick={props.onRemove}>
          ✖
        </button>
        {props.name}
      </div>
      <div className={styles.playerScore}>
        <Counter score={props.score} onChange={props.onScoreChange} />
      </div>
    </div>
  );
}
export default forwardRef(Player);
