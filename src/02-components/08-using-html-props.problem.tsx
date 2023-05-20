import React, { ComponentProps } from "react";

// Sol 1
// Hover over the native button element and get the type | Very verbose
type HTMLBtnProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

// Sol 2
// ComponentProps - Recommended
type HTMLbtnprops = ComponentProps<"button">

export const Button = ({ className, ...rest }: HTMLbtnprops) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button onClick={() => {}} type="button"></Button>;
};
