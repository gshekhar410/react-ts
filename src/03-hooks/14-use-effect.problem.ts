import { useEffect } from "react";

// directly returining setTimeout is not same as returning void | Destructor. That's why use the { } for function body 
// and either not return anything or a cleanUp function
export const useTimeout = (timerMs: number) => {
  useEffect(
    () => {
      const timeout = setTimeout(() => {
        console.log("Done!");
      }, timerMs);
      return () => {
        clearTimeout(timeout)
      }
    },
    [timerMs],
  );
};
