import React from 'react';
const InputRadio = ({ register, label, errors }) => {
    const ingredients = ['Fur', 'Feather', 'Horn', 'Hair'];
    return (React.createElement("div", { className: "input__wrapper" },
        React.createElement("div", { className: "input__label-wrapper" },
            React.createElement("label", { className: "forms__label" }, label),
            errors && React.createElement("p", { className: "input__error" }, errors)),
        React.createElement("div", null, ingredients.map((ingredient) => {
            return (React.createElement("label", { className: "radio__label", key: ingredient },
                React.createElement("input", { ...register, type: "radio", value: ingredient }),
                ingredient));
        }))));
};
export default InputRadio;
