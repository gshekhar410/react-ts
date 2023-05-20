import { useRef } from "react";

export const Component = () => {
  const ref = useRef<string>();

  // Why is this not allowed?
  // It is an Immutable ref object i.e. the current property is just read only
  ref.current = "Hello";

  return null;
};
