import { Resolver } from 'react-hook-form';
import { BeastCardForm } from '../../../../types/beastCard';

export type FormErrors = {
  [PropertyKey in keyof BeastCardForm]: {
    type: string;
    message: string;
  };
};

export const resolver: Resolver<BeastCardForm> = async (values) => {
  const hanldeValues = (values: BeastCardForm) => {
    if (Object.values(values).some((value) => !value)) return {};
    return values;
  };
  const error = 'Required field';
  const curent = new Date().toISOString().slice(0, 10);
  const handleErrors = (values: BeastCardForm) => {
    const errors = {} as FormErrors;
    //Name Validation
    if (!values.name)
      errors.name = {
        type: 'required',
        message: error,
      };
    else if (!/^[A-ZА-Я]{1}.*$/.test(values.name))
      errors.name = {
        type: 'required',
        message: 'Should starts with uppercased letter',
      };
    //Description Validation
    if (!values.description)
      errors.description = {
        type: 'required',
        message: error,
      };
    else if (values.description.trim().split(' ').length < 3)
      errors.description = {
        type: 'required',
        message: 'Should contains 3 words',
      };
    //Date Validation
    if (!values.date)
      errors.date = {
        type: 'required',
        message: error,
      };
    else if (Date.parse(values.date!) >= Date.parse(curent))
      errors.date = {
        type: 'required',
        message: `Date should be earlier than ${curent.replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)}`,
      };
    //Ingredient Validation
    if (!values.ingredient)
      errors.ingredient = {
        type: 'required',
        message: error,
      };
    //Cost Validation
    if (!values.cost)
      errors.cost = {
        type: 'required',
        message: error,
      };
    else if (parseInt(values.cost) <= 0)
      errors.cost = {
        type: 'required',
        message: 'Should be greater than 0',
      };
    //House Validation
    if (!values.house)
      errors.house = {
        type: 'required',
        message: error,
      };
    //Image Validation
    if (!values.image.length)
      errors.image = {
        type: 'required',
        message: error,
      };
    else if (!['image/jpeg', 'image/png', 'image/gif'].includes(values.image[0]?.type))
      errors.image = {
        type: 'required',
        message: 'Selected file is not an image',
      };
    //Checkbox Validation
    if (!values.checkbox)
      errors.checkbox = {
        type: 'required',
        message: error,
      };

    return errors;
  };

  return {
    values: hanldeValues(values),
    errors: handleErrors(values),
  };
};
