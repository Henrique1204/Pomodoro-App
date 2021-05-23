import React from 'react';
import PomodoroTimer from './Components/PomodoroTimer';

const App = (): JSX.Element => {
  return (
    <div className="container">
      <PomodoroTimer
        pomodoroTimer={1500}
        shortRestTimer={300}
        longRestTimer={900}
        cycles={4}
      />
    </div>
  );
};

export default App;
