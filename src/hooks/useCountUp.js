import React from 'react';

export function useCountUp({ start = 0, end, duration = 2 }) {
  const [count, setCount] = React.useState(start);
  const [triggered, setTriggered] = React.useState(false);

  React.useEffect(() => {
    if (triggered) return;

    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (end - start) * easeOut);
      setCount(current);
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setTriggered(true);
      }
    };

    requestAnimationFrame(updateCount);
  }, [triggered, start, end, duration]);

  return { count, triggered, setTriggered };
}