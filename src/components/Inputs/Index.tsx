import { InputHTMLAttributes, forwardRef } from "react";
import { InputDiv, InputStyled } from "./styles";
import { FieldError } from "react-hook-form";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  errors?: FieldError;
  isregister: boolean;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ isregister, errors, ...rest }, ref) => {
    return (
      <InputDiv isregister={isregister}>
        <InputStyled {...rest} ref={ref} />
        {errors ? <p>{errors.message}</p> : null}
      </InputDiv>
    );
  }
);
