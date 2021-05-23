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

  useInterval(() => {
    setMainTime((valueState) => valueState - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>You are: Working</h2>
      <Timer mainTime={mainTime} />

      <div className="controls">
        <Button text="teste" onClick={() => console.log('Oi')} />
        <Button text="teste" onClick={() => console.log('Oi')} />
        <Button text="teste" onClick={() => console.log('Oi')} />
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
