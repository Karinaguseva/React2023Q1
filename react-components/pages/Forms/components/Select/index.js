import React from 'react';
const Select = ({ register, name, label, errors }) => {
    return (React.createElement("div", { className: "input__wrapper" },
        React.createElement("div", { className: "input__label-wrapper" },
            React.createElement("label", { className: "forms__label" }, label),
            errors && React.createElement("p", { className: "input__error" }, errors)),
        React.createElement("select", { ...register, className: `forms__input ${name}` },
            React.createElement("option", { hidden: true, value: "" }, "Choose the house"),
            React.createElement("option", null, "Gryffindor"),
            React.createElement("option", null, "Ravenclaw"),
            React.createElement("option", null, "Hufflepuff"),
            React.createElement("option", null, "Slytherin"))));
};
export default Select;
