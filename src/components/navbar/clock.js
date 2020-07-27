import React from "react";
import { useState, useEffect } from "react";
import Moment from "react-moment";

export default function Clock() {
  const [time, setDate] = useState(new Date());

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return <Moment format="HH:mm">{time.getTime()}</Moment>;
}
