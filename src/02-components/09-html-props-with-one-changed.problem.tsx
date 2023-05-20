import { ComponentProps } from "react";
import { Equal, Expect } from "../helpers/type-utils";

// Problem statement
// We are overriding the onChange handler type definition in Custom Input component comprising of native input element
// however when using the Custom button by providing the expected onChange handler with the overridden type definition we see a error from ts.

// Reason: it is happening because ts is prioritising the onChange type definition of ComponentProps<"input">

// Solution: We should remove the onChange type definition from the ComponentProps<"input">

// TS utility Omit helps with it.

// Sol 1
type InputProps = Omit<ComponentProps<"input">, "onChange" | "name"> & { onChange: (value: string) => void, name: number }

// Sol 2
interface InputProps2 extends Omit<ComponentProps<"input">, "onChange"> {
  onChange: (value: string) => void;
}

// Sol 3: Create a reusable type helper - OverrideProps
type OverrideProps<T, TOverridden> = Omit<T, keyof TOverridden> & TOverridden
type InputProps3 = OverrideProps<ComponentProps<"input">, { onChange: (value: string) => void, name: number }>

export const Input = (props: InputProps3) => {
  return (
    <input
      {...props}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
      name={String(props.name)}
    ></input>
  );
};

const Parent = () => {
  return (
    <Input
      onChange={(e) => {
        console.log(e);

        type test = Expect<Equal<typeof e, string>>;
      }}
      name={1}
    ></Input>
  );
};

// Omit Utility tips
// TS tip: & operator in type definitions helps in adding the given extra type to existing type collection
// TS tip: Omit multiple type keys with separating them by pipe | 
// Eg. type InputProps = Omit<ComponentProps<"input">, "onChange" | "name"> & { onChange: (value: string) => void, name: number }
