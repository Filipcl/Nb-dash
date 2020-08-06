import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  addPlayerForm: {
    display: "flex",
    backgroundColor: "#222",
    borderRadius: "0 0 20px 20px",
  },

  nameInput: {
    flexGrow: "1",
    borderWidth: "0 0 1px 0",
    margin: "15px 10px 15px 15px",
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "#333",
    borderStyle: "none",
    textShadow: "none",
    textTransform: "uppercase",
    color: "#999",
    letterSpacing: "2px",
    outline: "none",
    "&:focus": {
      backgroundColor: "#444",
      letterSpacing: "2px",
    },
  },

  submitBtn: {
    display: "block",
    fontSize: "0.6em",
    margin: "15px 15px 15px 0",
    padding: "10px",
    backgroundColor: "#333",
    borderRadius: "5px",
    border: "none",
    color: "#999",
    letterSpacing: "2px",
    fontWeight: "bold",
    textShadow: "none",
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: "#4b71b5",
      color: "#fafafa",
      cursor: "pointer",
    },
  },
}));

export default function PlayerForm(props) {
  const styles = useStyles();
  const [name, setName] = useState("");

  function onNameChange(e) {
    setName(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    props.onAdd(name);
    setName("");
  }

  return (
    <div>
      <form className={styles.addPlayerForm} onSubmit={onSubmit}>
        <input
          className={styles.nameInput}
          type="text"
          placeholder="name"
          value={name}
          onChange={onNameChange}
        />
        <input className={styles.submitBtn} type="submit" value="Add Player" />
        <Link
          className={styles.submitBtn}
          style={{ textDecoration: "none" }}
          to={"/"}
        >
          Back to dashboard
        </Link>
      </form>
    </div>
  );
}
