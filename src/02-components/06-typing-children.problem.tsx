import React from "react";

export const Button = (props: { children: React.ReactNode }) => {
  return <button>{props.children}</button>;
};

// React.ReactNode covers all different cases where you can pass children to React components
// Cntl + click ReactNode to view all possible children

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button></Button>
      <Button>Hello world!</Button>
    </>
  );
};
