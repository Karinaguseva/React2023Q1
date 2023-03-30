import React from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { BeastCard, BeastCardForm } from '../../../../types/beastCard';
import './index.scss';
import InputText from '../InputText';
import { resolver } from './resolver';

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
      id: cards,
      ...data,
      image: URL.createObjectURL(data.image[0]),
    });
    reset();
  };

  const ingredients = ['Fur', 'Feather', 'Horn', 'Hair'];

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
        <div className="input__wrapper">
          <div className="input__label-wrapper">
            <label className="forms__label" htmlFor="date">
              Beast date
            </label>
            {errors && <div className="input__error">{errors.date?.message}</div>}
          </div>
          <input
            {...register('date')}
            type="date"
            className={'forms__input date'}
            id="date"
          ></input>
        </div>
        <div className="input__wrapper">
          <div className="input__label-wrapper">
            <label className="forms__label">What gives your Beast</label>
            {errors.ingredient && <p className="input__error">{errors.ingredient?.message}</p>}
          </div>
          <div>
            {ingredients.map((ingredient) => {
              return (
                <label className="radio__label" key={ingredient}>
                  <input {...register('ingredient')} type="radio" value={ingredient} />
                  {ingredient}
                </label>
              );
            })}
          </div>
        </div>
        <div className="input__wrapper">
          <div className="input__label-wrapper">
            <label className="forms__label" htmlFor="cost">
              Ingredient cost
            </label>
            {errors && <div className="input__error">{errors.cost?.message}</div>}
          </div>
          <input
            {...register('cost')}
            type="number"
            placeholder="1000"
            className="forms__input cost"
            id="cost"
          ></input>
        </div>
        <div className="input__wrapper">
          <div className="input__label-wrapper">
            <label className="forms__label">Select native House</label>
            {errors.house && <p className="input__error">{errors.house?.message}</p>}
          </div>
          <select {...register('house')} className="forms__input house">
            <option hidden value="">
              Choose the house
            </option>
            <option>Gryffindor</option>
            <option>Ravenclaw</option>
            <option>Hufflepuff</option>
            <option>Slytherin</option>
          </select>
        </div>
        <div className="input__wrapper">
          <div className="input__label-wrapper">
            <label className="input__file">
              <input
                {...register('image')}
                type="file"
                accept="image/jpeg,image/png,image/gif"
              ></input>
              <span>Choose File</span>
            </label>
            {errors.image && <p className="input__error">{errors.image?.message}</p>}
          </div>
        </div>
        <div className="input__wrapper">
          <div className="input__label-wrapper">
            <label className="forms__label">
              <input {...register('checkbox')} type="checkbox"></input>
              I&rsquo;m sure i want to create the Beast
            </label>
            {errors.checkbox && <p className="input__error">{errors.checkbox?.message}</p>}
          </div>
        </div>
        <button className="forms__button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default FormData;
