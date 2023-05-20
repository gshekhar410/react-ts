import React from "react";

type BtnProps = {
  className: string;
}

export const Button = (props: BtnProps) => {
  return <button className={props.className}></button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button></Button>

      <Button className="my-class"></Button>
    </>
  );
};
