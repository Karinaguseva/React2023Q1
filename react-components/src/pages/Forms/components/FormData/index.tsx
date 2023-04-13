import React from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { BeastCard, BeastCardForm } from '../../../../types/beastCard';
import './index.scss';
import InputText from '../Input/Text';
import { resolver } from './resolver';
import InputNumber from '../Input/Number';
import InputDate from '../Input/Date';
import InputRadio from '../Input/Radio';
import Select from '../Select';
import InputFile from '../Input/File';
import InputCheckbox from '../Input/Checkbox';

interface FormDataProps {
  handleCard: (card: BeastCard) => void;
  cards: number;
}

const FormData = ({ handleCard, cards }: FormDataProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver, mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const onSubmit: SubmitHandler<BeastCardForm> = (data) => {
    handleCard({
      ...data,
      id: cards,
      image: URL.createObjectURL(data.image[0]),
    });
    reset();
  };

  return (
    <>
      <form className="forms" onSubmit={handleSubmit(onSubmit)} noValidate>
        <InputText
          register={{
            ...register('name'),
          }}
          name="name"
          label="Name"
          errors={errors?.name?.message}
          placeholder="Beast Name"
        />
        <InputText
          register={{
            ...register('description'),
          }}
          name="description"
          label="Description"
          errors={errors?.description?.message}
          placeholder="Beast Description"
        />
        <InputDate
          register={{
            ...register('date'),
          }}
          name="date"
          label="Beast birth"
          errors={errors?.date?.message}
        />
        <InputRadio
          register={{
            ...register('ingredient'),
          }}
          label="What gives your Beast"
          errors={errors?.ingredient?.message}
        />
        <InputNumber
          register={{
            ...register('cost'),
          }}
          name="cost"
          label="Ingredient cost"
          errors={errors?.cost?.message}
          placeholder="1000"
        />
        <Select
          register={{
            ...register('house'),
          }}
          name="house"
          label="Select native House"
          errors={errors?.house?.message}
        />
        <InputFile
          register={{
            ...register('image'),
          }}
          label="Choose File"
          errors={errors?.image?.message}
        />
        <InputCheckbox
          register={{
            ...register('checkbox'),
          }}
          label="I&rsquo;m sure i want to create the Beast"
          errors={errors?.checkbox?.message}
        />
        <button className="forms__button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default FormData;
