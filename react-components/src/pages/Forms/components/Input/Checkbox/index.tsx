import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form/dist/types/form';

interface InputCheckboxProps {
  register: UseFormRegisterReturn;
  label: string;
  errors?: string;
}

const InputCheckbox = ({ register, label, errors }: InputCheckboxProps) => {
  return (
    <div className="input__wrapper">
      <div className="input__label-wrapper">
        <label className="forms__label">
          <input {...register} type="checkbox"></input>
          {label}
        </label>
        {errors && <p className="input__error">{errors}</p>}
      </div>
    </div>
  );
};

export default InputCheckbox;
