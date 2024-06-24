import { InputHTMLAttributes, Ref, forwardRef } from "react";

export interface InputProps {}
const Input = forwardRef(
  (
    { ...rest }: InputProps & InputHTMLAttributes<HTMLInputElement>,
    ref: Ref<HTMLInputElement>
  ) => {
    return <input type="text" {...rest} ref={ref} />;
  }
);
export default Input;
