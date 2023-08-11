import { useState, useEffect } from "react";

function Time() {
  const [currentTime, setCurrentTime] = useState(5);
  useEffect(() => {
    if (currentTime === 0) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentTime(currentTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [currentTime]);

  return <div style={{ color: "white" }}>{`${currentTime}`} s</div>;
}

export default Time;
