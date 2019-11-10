import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Timer = ({ usersTime }) => {
  let timeForTest = usersTime * 60;
  const [time, setTime] = useState(timeForTest);
  let history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        history.push("/result");
      }
    }, 1000);
  }, [time, history]);

  return <div className="result">Время: {time}</div>;
};

export default Timer;
