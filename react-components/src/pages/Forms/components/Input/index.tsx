import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form/dist/types/form';

interface InputProps {
  register: UseFormRegisterReturn;
  name: string;
  label: string;
  errors?: string;
  type: string;
  placeholder?: string;
}

const Input = ({ register, name, label, errors, type, placeholder }: InputProps) => {
  return (
    <div className="input__wrapper">
      <div className="input__label-wrapper">
        <label className="forms__label" htmlFor={name}>
          {label}
        </label>
        {errors && <div className="input__error">{errors}</div>}
      </div>
      <input
        {...register}
        type={type}
        placeholder={placeholder}
        className={`forms__input ${name}`}
        id={name}
      ></input>
    </div>
  );
};

export default Input;
