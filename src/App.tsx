import React from 'react';
import PomodoroTimer from './Components/PomodoroTimer';

const App = (): JSX.Element => {
  return <PomodoroTimer defaultPomodoroTimer={1500} />;
};

export default App;
