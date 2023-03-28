import React from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { BeastCard } from '../../../../types/beastCard';
import './index.scss';

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
    watch,
  } = useForm<BeastCard>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const onSubmit: SubmitHandler<BeastCard> = (data) => {
    const files = data.image;
    const file = files ? files[0] : null;
    console.log(watch('image'));
    const picture = file ? URL.createObjectURL(file) : '';

    handleCard({
      id: cards,
      image: picture,
      title: data.title || '',
      birth: data.birth || '',
      description: data.description || '',
      ingredient: data.ingredient || '',
      cost: data.cost || '',
      house: data.house || '',
      checkbox: data.checkbox,
    });
    reset();
  };

  const ingredients = ['Fur', 'Feather', 'Horn', 'Hair'];
  const error = 'Required field';
  const curent = new Date().toISOString().slice(0, 10);
  return (
    <form className="forms" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="input__wrapper">
        <div className="input__label-wrapper">
          <label className="forms__label" htmlFor="name">
            Name
          </label>
          {errors.title && <p className="input__error">{errors.title?.message}</p>}
        </div>
        <input
          {...register('title', {
            required: error,
            pattern: { value: /^[A-ZА-Я]{1}.*$/, message: 'Should starts with uppercased letter' },
          })}
          type="text"
          placeholder="Beast Name"
          className="forms__input name"
          id="name"
        ></input>
      </div>
      <div className="input__wrapper">
        <div className="input__label-wrapper">
          <label className="forms__label" htmlFor="description">
            Description
          </label>
          {errors.description && <p className="input__error">{errors.description?.message}</p>}
        </div>
        <input
          {...register('description', {
            required: error,
            validate: (value) => value.split(' ').length >= 3 || 'Should contains 3 words',
          })}
          type="text"
          placeholder="Beast Description"
          className="forms__input description"
          id="description"
        ></input>
      </div>
      <div className="input__wrapper">
        <div className="input__label-wrapper">
          <label className="forms__label" htmlFor="date">
            Beast birth
          </label>
          {errors.birth && <p className="input__error">{errors.birth?.message}</p>}
        </div>
        <input
          {...register('birth', {
            required: error,
            validate: (value) =>
              Date.parse(value!) <= Date.parse(curent) ||
              `Date should be earlier than ${curent.replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)}`,
          })}
          type="date"
          className="forms__input date"
          id="date"
        ></input>
      </div>
      <div className="input__wrapper">
        <div className="input__label-wrapper">
          <label className="forms__label">What gives your Beast</label>
          {errors.ingredient && <p className="input__error">{errors.ingredient?.message}</p>}
        </div>
        <div>
          {ingredients.map((ingredient, index) => {
            return (
              <label className="radio__label" key={index}>
                <input
                  {...register('ingredient', { required: error })}
                  type="radio"
                  value={ingredient}
                />
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
          {errors.cost && <p className="input__error">{errors.cost?.message}</p>}
        </div>
        <input
          {...register('cost', {
            required: error,
            validate: {
              positive: (value) => parseInt(value) > 0 || 'Should be greater than 0',
            },
          })}
          type="number"
          className="forms__input cost"
          id="cost"
          placeholder="1000"
        ></input>
      </div>
      <div className="input__wrapper">
        <div className="input__label-wrapper">
          <label className="forms__label">Select native House</label>
          {errors.house && <p className="input__error">{errors.house?.message}</p>}
        </div>
        <select {...register('house', { required: error })} className="forms__input house">
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
              {...register('image', { required: error })}
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
            <input {...register('checkbox', { required: error })} type="checkbox"></input>
            I&rsquo;m sure i want to create the Beast
          </label>
          {errors.checkbox && <p className="input__error">{errors.checkbox?.message}</p>}
        </div>
      </div>
      <button className="forms__button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormData;
