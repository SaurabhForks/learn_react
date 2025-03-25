import { useEffect, useState } from "react";

const useTimerHook = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [intervalId]);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      const newIntervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 100);
      setIntervalId(newIntervalId);
    }
  };
  const pauseTimer = () => {
    setIsRunning(false);
    clearTimeout(intervalId);
    setIntervalId(null);
  };
  const resetTimer = () => {
    pauseTimer();
    setTimer(0);
  };

  return {
    startTimer,
    pauseTimer,
    resetTimer,
    timer,
  };
};
export default useTimerHook;
