import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form/dist/types/form';

interface SelectProps {
  register: UseFormRegisterReturn;
  name: string;
  label: string;
  errors?: string;
}

const Select = ({ register, name, label, errors }: SelectProps) => {
  return (
    <div className="input__wrapper">
      <div className="input__label-wrapper">
        <label className="forms__label">{label}</label>
        {errors && <p className="input__error">{errors}</p>}
      </div>
      <select {...register} className={`forms__input ${name}`}>
        <option hidden value="">
          Choose the house
        </option>
        <option>Gryffindor</option>
        <option>Ravenclaw</option>
        <option>Hufflepuff</option>
        <option>Slytherin</option>
      </select>
    </div>
  );
};

export default Select;
