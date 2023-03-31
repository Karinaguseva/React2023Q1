import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form/dist/types/form';

interface InputFileProps {
  register: UseFormRegisterReturn;
  label: string;
  errors?: string;
}

const InputFile = ({ register, label, errors }: InputFileProps) => {
  return (
    <div className="input__wrapper">
      <div className="input__label-wrapper">
        <label className="input__file">
          <input {...register} type="file" accept="image/jpeg,image/png,image/gif"></input>
          <span>{label}</span>
        </label>
        {errors && <p className="input__error">{errors}</p>}
      </div>
    </div>
  );
};

export default InputFile;
