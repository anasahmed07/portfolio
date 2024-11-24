import React, { useEffect, useState } from "react";

function LocalClock (){
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
        timeZone: "Asia/Karachi", // Change this to your timezone
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateClock(); // Initial call to display time immediately
    const timerId = setInterval(updateClock, 1000);

    return () => clearInterval(timerId);
  }, []);

  return <div>{time}</div>;
};

export default LocalClock;
