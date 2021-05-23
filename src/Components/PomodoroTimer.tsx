import React from 'react';
import useInterval from '../hooks/useInterval';
import Button from './Button';
import Timer from './Timer';

// Importando Arquivos de audio.
import bellStart from '../sounds/bell-start.mp3';
import bellFinish from '../sounds/bell-finish.mp3';
import { secondsToTime } from '../utils/secondsToTime';

const audioStartWorking = new Audio(bellStart);
const audioStopWorking = new Audio(bellFinish);

interface Props {
  pomodoroTimer: number;
  shortRestTimer: number;
  longRestTimer: number;
  cycles: number;
}

const pomodoroTimer = (props: Props): JSX.Element => {
  const [mainTime, setMainTime] = React.useState(props.pomodoroTimer);
  const [timeCouting, setTimeCouting] = React.useState(false);
  const [working, setWorking] = React.useState(false);
  const [resting, setResting] = React.useState(false);
  const [cyclesQtdManager, setCyclesQtdManager] = React.useState(
    new Array(props.cycles - 1).fill(true)
  );

  const [completedCycles, setCompletedCycles] = React.useState(0);
  const [fullWorkingTime, setFullWorkingTime] = React.useState(0);
  const [numberOfPomodoros, setNumberOfPomodoros] = React.useState(0);

  useInterval(
    () => {
      setMainTime((valueState) => valueState - 1);

      if (working) setFullWorkingTime((valueState) => ++valueState);
    },
    timeCouting ? 1000 : null
  );

  const configureWorking = () => {
    setTimeCouting(true);
    setWorking(true);
    setResting(false);

    setMainTime(props.pomodoroTimer);
    audioStartWorking.play();
  };

  const configureResting = (long: boolean) => {
    setTimeCouting(true);
    setResting(true);
    setWorking(false);

    if (long) setMainTime(props.longRestTimer);
    else setMainTime(props.shortRestTimer);

    audioStopWorking.play();
  };

  React.useEffect(() => {
    if (working) document.body.classList.add('working');
    if (resting) document.body.classList.remove('working');

    if (mainTime > 0) return;

    if (working && cyclesQtdManager.length > 0) {
      configureResting(false);
      cyclesQtdManager.pop();
    } else if (working && cyclesQtdManager.length <= 0) {
      configureResting(true);
      setCyclesQtdManager(new Array(props.cycles - 1).fill(true));
      setCompletedCycles((valueState) => ++valueState);
    }

    if (working) setNumberOfPomodoros((valueState) => ++valueState);
    if (resting) configureWorking();
  }, [
    working,
    resting,
    mainTime,
    cyclesQtdManager,
    configureResting,
    configureWorking,
    props.cycles,
  ]);

  return (
    <div className="pomodoro">
      <h2>Você está {working ? 'Trabalhando' : 'Descansando'}</h2>
      <Timer mainTime={mainTime} />

      <div className="controls">
        <Button text="Work" onClick={configureWorking} />

        <Button text="Rest" onClick={() => configureResting(false)} />

        <Button
          className={!working && !resting ? 'hidden' : ''}
          text={timeCouting ? 'Pause' : 'Play'}
          onClick={() => setTimeCouting((valueState) => !valueState)}
        />
      </div>

      <div className="details">
        <p>Ciclos concluídos: {completedCycles}</p>
        <p>Horas Trabalhadas: {secondsToTime(fullWorkingTime)}</p>
        <p>Pomodoros concluídos: {numberOfPomodoros}</p>
      </div>
    </div>
  );
};

export default pomodoroTimer;
