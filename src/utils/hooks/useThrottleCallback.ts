import { useRef } from "react";

function useThrottleCallback<T extends unknown[]>(
  callback: (...args: T) => void,
  delay: number
) {
  const timerRef = useRef<NodeJS.Timeout>();
  const argsRef = useRef<T>();

  const timeoutCallback = () => {
    if (argsRef.current) {
      callback(...argsRef.current);
      argsRef.current = undefined; // Reset argsRef after calling
    }
    if (timerRef.current) {
      timerRef.current = undefined;
    }
  };

  return (...args: T): void => {
    argsRef.current = args;

    if (timerRef.current) return;

    callback(...args);
    timerRef.current = setTimeout(timeoutCallback, delay);
  };
}

export default useThrottleCallback;
