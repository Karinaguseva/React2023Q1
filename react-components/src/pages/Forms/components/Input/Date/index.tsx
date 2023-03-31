import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form/dist/types/form';

interface InputDateProps {
  register: UseFormRegisterReturn;
  name: string;
  label: string;
  errors?: string;
}

const InputDate = ({ register, name, label, errors }: InputDateProps) => {
  return (
    <div className="input__wrapper">
      <div className="input__label-wrapper">
        <label className="forms__label" htmlFor={name}>
          {label}
        </label>
        {errors && <div className="input__error">{errors}</div>}
      </div>
      <input {...register} type="date" className={`forms__input ${name}`} id={name}></input>
    </div>
  );
};

export default InputDate;
