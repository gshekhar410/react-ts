import { useRef } from "react";

export const Component = () => {
  const ref = useRef<HTMLDivElement>(null);

  return <div ref={ref} />;
};

// For typing useRef, get the type of HTML element you going to use the ref with
//If you assign null as initial value it becomes an Immutable read only where you cannot assign any value to ref.current
