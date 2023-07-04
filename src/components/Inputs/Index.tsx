import { InputHTMLAttributes } from "react";
import { InputStyled } from "./styles";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
}

export const Input = ({ type, placeholder }: IInputProps) => {
  return <InputStyled type={type} placeholder={placeholder} />;
};
