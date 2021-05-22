import React from 'react';
import useInterval from '../hooks/useInterval';
import { secondsToTime } from '../utils/secondsToTime';

interface Props {
  defaultPomodoroTimer: number;
}

const pomodoroTimer = (props: Props): JSX.Element => {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTimer);

  useInterval(() => {
    setMainTime((valueState) => valueState - 1);
  }, 1000);

  return <h1>Olá mundo, {secondsToTime(mainTime)}</h1>;
};

export default pomodoroTimer;
