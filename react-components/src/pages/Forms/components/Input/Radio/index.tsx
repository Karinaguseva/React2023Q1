import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form/dist/types/form';

interface InputRadioProps {
  register: UseFormRegisterReturn;
  label: string;
  errors?: string;
}

const InputRadio = ({ register, label, errors }: InputRadioProps) => {
  const ingredients = ['Fur', 'Feather', 'Horn', 'Hair'];
  return (
    <div className="input__wrapper">
      <div className="input__label-wrapper">
        <label className="forms__label">{label}</label>
        {errors && <p className="input__error">{errors}</p>}
      </div>
      <div>
        {ingredients.map((ingredient) => {
          return (
            <label className="radio__label" key={ingredient}>
              <input {...register} type="radio" value={ingredient} />
              {ingredient}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default InputRadio;
