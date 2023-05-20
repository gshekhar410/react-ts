import React from "react";

interface Props {
  className: string;
}
// Note: React.FC doesn't contain any props by default so you can't just mention React.FC and pass props to it.

// Note: Different properties on react component(Optional ones)
// propTypes
// contextTypes
// defaultProps
// displayName

/* @ts-expect-error */
export const Button: React.FC<Props> = (props) => {
  return {
    ohDear: "123",
  };
};

const Parent = () => {
  return (
    <>
      <Button className="my-class"></Button>
    </>
  );
};
