import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import FlipMove from "react-flip-move";
import PlayerForm from "./player-form";
import Player from "./player";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  scoreboard: {
    backgroundColor: "#333",
    width: "700px",
    margin: "70px auto",
    borderRadius: "15px",
    textTransform: "uppercase",
  },

  header: {
    padding: "5px 10px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#222",
    borderRadius: "15px 15px 0 0",
    borderBottom: "solid 2px #444",
  },

  title: {
    flexGrow: "1",
    fontSize: "1.5em",
    letterSpacing: "3px",
    fontWeight: "normal",
  },
}));

const LOCAL_STORAGE_KEY = "Nb-leaderboard";

function Scoreboard() {
  const styles = useStyles();
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const storagePlayers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storagePlayers) {
      setPlayers(storagePlayers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(players));
  }, [players]);

  const onScoreChange = (index, delta) => {
    let updatedPlayers = [...players];
    updatedPlayers[index].score += delta;
    updatedPlayers.sort((a, b) => b.score - a.score);
    setPlayers(updatedPlayers);
  };

  const onPlayerAdd = (name) => {
    const updatedPlayers = players.concat({
      name: name,
      score: 0,
      id: uuid(),
    });
    setPlayers(updatedPlayers);
  };

  const onRemovePlayer = (indexToRemove) => {
    const updatedPlayers = players.filter((_, index) => {
      return index !== indexToRemove;
    });
    setPlayers(updatedPlayers);
  };

  return (
    <>
      <div className={styles.scoreboard}>
        <div className={styles.header}>
          <h1 className={styles.title}>Scoreboard</h1>
        </div>
        <div className="players">
          <FlipMove>
            {players.map((player, index) => {
              return (
                <Player
                  onScoreChange={(delta) => {
                    onScoreChange(index, delta);
                  }}
                  onRemove={() => {
                    onRemovePlayer(index);
                  }}
                  name={player.name}
                  score={player.score}
                  key={player.id}
                />
              );
            })}
          </FlipMove>
        </div>
        <PlayerForm onAdd={onPlayerAdd} />
      </div>
    </>
  );
}

export default Scoreboard;
