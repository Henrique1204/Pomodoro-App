import React from 'react';
import { secondsToTime } from '../utils/secondsToTime';

interface Props {
  mainTime: number;
}

const Timer = (props: Props): JSX.Element => {
  return <div className="timer">{secondsToTime(props.mainTime)}</div>;
};

export default Timer;
