import React from "react";
import useTimerHook from "../../utils/hooks/useTimerHook";

const Contact = () => {
  const { timer, startTimer, pauseTimer, resetTimer } = useTimerHook();
  return (
    <div>
      Contact
      <p>{timer}</p>
      <button onClick={() => startTimer()}>start</button>
      <button onClick={() => resetTimer()}>reset</button>
      <button onClick={() => pauseTimer()}>pause</button>
    </div>
  );
};

export default Contact;
