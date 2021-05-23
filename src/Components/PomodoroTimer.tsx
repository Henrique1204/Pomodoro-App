import React from 'react';
import useInterval from '../hooks/useInterval';
import Button from './Button';
import Timer from './Timer';

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

  useInterval(
    () => {
      setMainTime((valueState) => valueState - 1);
    },
    timeCouting ? 1000 : null
  );

  const configureWorking = () => {
    setTimeCouting(true);
    setWorking(true);
    setResting(false);

    setMainTime(props.pomodoroTimer);
  };

  const configureResting = (long: boolean) => {
    setTimeCouting(true);
    setResting(true);
    setWorking(false);

    if (long) setMainTime(props.longRestTimer);
    else setMainTime(props.shortRestTimer);
  };

  React.useEffect(() => {
    if (working) document.body.classList.add('working');
    if (resting) document.body.classList.remove('working');
  }, [working]);

  return (
    <div className="pomodoro">
      <h2>You are: Working</h2>
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
        <p>edeijde[e</p>
        <p>edeijde[e</p>
        <p>edeijde[e</p>
        <p>edeijde[e</p>
      </div>
    </div>
  );
};

export default pomodoroTimer;
