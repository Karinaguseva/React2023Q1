import React from 'react';
import { useForm } from 'react-hook-form';
import './index.scss';
import InputText from '../Input/Text';
import { resolver } from './resolver';
import InputNumber from '../Input/Number';
import InputDate from '../Input/Date';
import InputRadio from '../Input/Radio';
import Select from '../Select';
import InputFile from '../Input/File';
import InputCheckbox from '../Input/Checkbox';
const FormData = ({ handleCard, cards }) => {
    const { register, handleSubmit, formState: { errors }, reset, } = useForm({ resolver, mode: 'onSubmit', reValidateMode: 'onSubmit' });
    const onSubmit = (data) => {
        handleCard({
            id: cards,
            ...data,
            image: URL.createObjectURL(data.image[0]),
        });
        reset();
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("form", { className: "forms", onSubmit: handleSubmit(onSubmit), noValidate: true },
            React.createElement(InputText, { register: {
                    ...register('name'),
                }, name: "name", label: "Name", errors: errors?.name?.message, placeholder: "Beast Name" }),
            React.createElement(InputText, { register: {
                    ...register('description'),
                }, name: "description", label: "Description", errors: errors?.description?.message, placeholder: "Beast Description" }),
            React.createElement(InputDate, { register: {
                    ...register('date'),
                }, name: "date", label: "Beast birth", errors: errors?.date?.message }),
            React.createElement(InputRadio, { register: {
                    ...register('ingredient'),
                }, label: "What gives your Beast", errors: errors?.ingredient?.message }),
            React.createElement(InputNumber, { register: {
                    ...register('cost'),
                }, name: "cost", label: "Ingredient cost", errors: errors?.cost?.message, placeholder: "1000" }),
            React.createElement(Select, { register: {
                    ...register('house'),
                }, name: "house", label: "Select native House", errors: errors?.house?.message }),
            React.createElement(InputFile, { register: {
                    ...register('image'),
                }, label: "Choose File", errors: errors?.image?.message }),
            React.createElement(InputCheckbox, { register: {
                    ...register('checkbox'),
                }, label: "I\u2019m sure i want to create the Beast", errors: errors?.checkbox?.message }),
            React.createElement("button", { className: "forms__button", type: "submit" }, "Submit"))));
};
export default FormData;
