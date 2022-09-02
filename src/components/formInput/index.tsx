import { ReactNode } from "react";
import {
  DeepMap,
  FieldValues,
  Message,
  MultipleFieldErrors,
  Ref,
  UseFormRegister,
} from "react-hook-form";
import InputStyle from "./styles";

interface IErrors {
  type: string;
  ref?: Ref;
  types?: MultipleFieldErrors;
  message?: Message;
}

type TFieldErrors<TFieldValues extends FieldValues = FieldValues> = DeepMap<
  TFieldValues,
  IErrors
>;

interface IFormInputProps {
  id: string;
  type: string;
  label: string;
  register: UseFormRegister<any>;
  errors: TFieldErrors;
  children: ReactNode;
}

const FormInput = ({
  id,
  type,
  label,
  register,
  errors,
  children,
}: IFormInputProps) => {
  return (
    <InputStyle className="fieldContainer">
      <label className="fieldContainer__label" htmlFor={id}>
        {label}
      </label>
      <div className="fieldContainer__input inputContainer">
        <input
          className="inputContainer__input"
          id={id}
          type={type}
          {...register(id)}
        />
        {children}
      </div>
      {errors[id] && (
        <span className="fieldContainer__error">{errors[id].message}</span>
      )}
    </InputStyle>
  );
};

export default FormInput;
