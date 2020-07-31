import React from "react";
import moment from "moment";
import { useState, useEffect } from "react";

export default function ShowDate() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timerID = setInterval(() => tick(), 3600000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }
  return <div>{moment(date).format("dddd DD MMM")}</div>;
}
