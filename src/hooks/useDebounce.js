import debounce from "lodash.debounce";
import { useEffect, useCallback, useRef } from "react";

function useIsMounted() {
  const isMountedRef = useRef(true);
  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  return () => isMountedRef.current;
}

function useDebounce(cb, delay) {
  const options = {
    leading: false,
    trailing: true,
  };

  const isMounted = useIsMounted();
  const inputsRef = useRef(cb); // mutable ref like with useThrottle
  useEffect(() => {
    inputsRef.current = { cb, delay };
  }); //also track cur. delay
  return useCallback(
    debounce(
      (...args) => {
        // Debounce is an async callback. Cancel it, if in the meanwhile
        // (1) component has been unmounted (see isMounted in snippet)
        // (2) delay has changed
        if (inputsRef.current.delay === delay && isMounted())
          inputsRef.current.cb(...args);
      },
      delay,
      options
    ),
    [delay, debounce]
  );
}

export default useDebounce;
