import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(900);
  const [timerOn, toggleTimer] = useState(false);

  useEffect(() => {
    let countDown = null
    if (timerOn && time > 0) {
      countDown = setInterval(() => setTime(time - 1), 1000);
    }
    if (time === 0) {
      clearInterval(countDown);
    }
    return () => clearInterval(countDown);
  }, [timerOn, time])

  const resetTimer = () => {
    toggleTimer(false);
    setTime(900)
  }

  return (
    <div>
      <div className="timer">{`${Math.floor(time / 60) < 10 ? '0' + Math.floor(time / 60) : Math.floor(time / 60)}:${time % 60 < 10 ? '0' + time % 60 : time % 60}`}</div>
      <button onClick={() => toggleTimer(!timerOn)}>{timerOn ? 'Pause' : 'Start'}</button>
      <button onClick={() => resetTimer()}>Reset</button>
    </div>
  )
}

export default Timer;