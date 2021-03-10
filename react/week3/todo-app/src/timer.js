import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });

  return <p>You have used {time} seconds on this website</p>;
}

export default Timer;
