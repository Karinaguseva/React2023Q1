import React from 'react';
const InputDate = ({ register, name, label, errors }) => {
    return (React.createElement("div", { className: "input__wrapper" },
        React.createElement("div", { className: "input__label-wrapper" },
            React.createElement("label", { className: "forms__label", htmlFor: name }, label),
            errors && React.createElement("div", { className: "input__error" }, errors)),
        React.createElement("input", { ...register, type: "date", className: `forms__input ${name}`, id: name })));
};
export default InputDate;
