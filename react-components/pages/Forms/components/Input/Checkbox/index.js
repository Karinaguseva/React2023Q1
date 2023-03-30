import React from 'react';
const InputCheckbox = ({ register, label, errors }) => {
    return (React.createElement("div", { className: "input__wrapper" },
        React.createElement("div", { className: "input__label-wrapper" },
            React.createElement("label", { className: "forms__label" },
                React.createElement("input", { ...register, type: "checkbox" }),
                label),
            errors && React.createElement("p", { className: "input__error" }, errors))));
};
export default InputCheckbox;
