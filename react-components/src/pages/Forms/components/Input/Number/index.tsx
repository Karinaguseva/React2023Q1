import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form/dist/types/form';

interface InputNumberProps {
  register: UseFormRegisterReturn;
  name: string;
  label: string;
  errors?: string;
  placeholder?: string;
}

const InputNumber = ({ register, name, label, errors, placeholder }: InputNumberProps) => {
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
        type="number"
        placeholder={placeholder}
        className={`forms__input ${name}`}
        id={name}
      ></input>
    </div>
  );
};

export default InputNumber;
