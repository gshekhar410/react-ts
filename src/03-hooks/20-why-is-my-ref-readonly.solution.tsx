import { useRef } from "react";

export const Component = () => {
  const firstOverload = useRef<string>("124123123"); // Type 1 useRef - Mutable Ref object

  firstOverload.current = "123j12jhb123jhb";

  const secondOverload = useRef<string>(null); // Type 2 useRef - Immutable Ref object

  //@ts-expect-error
  secondOverload.current = "Hello";

  const thirdOverload = useRef<string>(); // Type 3 useRef - Mutable Ref object

  return null;
};
