import React from 'react';
import { useForm } from 'react-hook-form';
import './index.scss';
import InputText from '../InputText';
import { resolver } from './resolver';
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
    const ingredients = ['Fur', 'Feather', 'Horn', 'Hair'];
    return (React.createElement(React.Fragment, null,
        React.createElement("form", { className: "forms", onSubmit: handleSubmit(onSubmit), noValidate: true },
            React.createElement(InputText, { register: {
                    ...register('name'),
                }, name: "name", label: "Name", errors: errors?.name?.message, placeholder: "Beast Name" }),
            React.createElement(InputText, { register: {
                    ...register('description'),
                }, name: "description", label: "Description", errors: errors?.description?.message, placeholder: "Beast Description" }),
            React.createElement("div", { className: "input__wrapper" },
                React.createElement("div", { className: "input__label-wrapper" },
                    React.createElement("label", { className: "forms__label", htmlFor: "date" }, "Beast date"),
                    errors && React.createElement("div", { className: "input__error" }, errors.date?.message)),
                React.createElement("input", { ...register('date'), type: "date", className: 'forms__input date', id: "date" })),
            React.createElement("div", { className: "input__wrapper" },
                React.createElement("div", { className: "input__label-wrapper" },
                    React.createElement("label", { className: "forms__label" }, "What gives your Beast"),
                    errors.ingredient && React.createElement("p", { className: "input__error" }, errors.ingredient?.message)),
                React.createElement("div", null, ingredients.map((ingredient) => {
                    return (React.createElement("label", { className: "radio__label", key: ingredient },
                        React.createElement("input", { ...register('ingredient'), type: "radio", value: ingredient }),
                        ingredient));
                }))),
            React.createElement("div", { className: "input__wrapper" },
                React.createElement("div", { className: "input__label-wrapper" },
                    React.createElement("label", { className: "forms__label", htmlFor: "cost" }, "Ingredient cost"),
                    errors && React.createElement("div", { className: "input__error" }, errors.cost?.message)),
                React.createElement("input", { ...register('cost'), type: "number", placeholder: "1000", className: "forms__input cost", id: "cost" })),
            React.createElement("div", { className: "input__wrapper" },
                React.createElement("div", { className: "input__label-wrapper" },
                    React.createElement("label", { className: "forms__label" }, "Select native House"),
                    errors.house && React.createElement("p", { className: "input__error" }, errors.house?.message)),
                React.createElement("select", { ...register('house'), className: "forms__input house" },
                    React.createElement("option", { hidden: true, value: "" }, "Choose the house"),
                    React.createElement("option", null, "Gryffindor"),
                    React.createElement("option", null, "Ravenclaw"),
                    React.createElement("option", null, "Hufflepuff"),
                    React.createElement("option", null, "Slytherin"))),
            React.createElement("div", { className: "input__wrapper" },
                React.createElement("div", { className: "input__label-wrapper" },
                    React.createElement("label", { className: "input__file" },
                        React.createElement("input", { ...register('image'), type: "file", accept: "image/jpeg,image/png,image/gif" }),
                        React.createElement("span", null, "Choose File")),
                    errors.image && React.createElement("p", { className: "input__error" }, errors.image?.message))),
            React.createElement("div", { className: "input__wrapper" },
                React.createElement("div", { className: "input__label-wrapper" },
                    React.createElement("label", { className: "forms__label" },
                        React.createElement("input", { ...register('checkbox'), type: "checkbox" }),
                        "I\u2019m sure i want to create the Beast"),
                    errors.checkbox && React.createElement("p", { className: "input__error" }, errors.checkbox?.message))),
            React.createElement("button", { className: "forms__button", type: "submit" }, "Submit"))));
};
export default FormData;
