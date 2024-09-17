import {useRef, useState} from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({title,targetTime}){
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  let timer = useRef(null);
  let dialog = useRef(null);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if(timeRemaining <= 0){
    clearInterval(timer.current);
    dialog.current.open();
  }

  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  }

  const handleStartTimer = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10)
    }, 10)
  }

  const handleStopTimer = () => {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStopTimer : handleStartTimer}>
            {timerIsActive ? 'Stop Challenge' : 'Start Challenge'}
          </button>
        </p>
        <p className={timerIsActive ? 'active' : undefined}>
          {timerIsActive ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}