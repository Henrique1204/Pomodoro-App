import React from 'react';

const useInterval = <C extends CallableFunction>(
  callback: C,
  delay: number | null
): void => {
  const savedCallback = React.useRef<C>();

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  });

  // Set up the interval.
  React.useEffect(() => {
    const tick = () => {
      if (savedCallback.current) savedCallback.current();
    };

    if (delay !== null) {
      const id = setInterval(tick, delay) as unknown as number;

      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
