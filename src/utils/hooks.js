import { useContext, useRef, useEffect, useState } from "react";
import { TimerContext } from "../TimerProvider";

export const useTimerStarter = () => {
  const [delay, setDelay] = useState(1000);
  const { isRunning, setIsRunning } = useContext(TimerContext);
  const { time, setTime } = useContext(TimerContext);

  useInterval(
    () => {
      // Your custom logic here
      setTime(time + 1);
    },
    isRunning ? delay : null
  );

  //   function handleDelayChange(e) {
  //     setDelay(Number(e.target.value));
  //   }

  //   function handleIsRunningChange(e) {
  //     setIsRunning(e.target.checked);
  //   }

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }
};
