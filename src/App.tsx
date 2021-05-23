import React from 'react';
import PomodoroTimer from './Components/PomodoroTimer';

const App = (): JSX.Element => {
  return (
    <div className="container">
      <PomodoroTimer
        pomodoroTimer={2}
        shortRestTimer={3}
        longRestTimer={4}
        cycles={4}
      />
    </div>
  );
};

export default App;
