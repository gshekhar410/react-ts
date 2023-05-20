import { useEffect, useRef } from "react";

export const Component = () => {
  const id = useRef<string>(); // useRef creates a mutable ref object

  useEffect(() => {
    id.current = "Random value!";
  }, []);

  return <div></div>;
};
