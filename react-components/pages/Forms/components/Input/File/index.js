import React from 'react';
const InputFile = ({ register, label, errors }) => {
    return (React.createElement("div", { className: "input__wrapper" },
        React.createElement("div", { className: "input__label-wrapper" },
            React.createElement("label", { className: "input__file" },
                React.createElement("input", { ...register, type: "file", accept: "image/jpeg,image/png,image/gif" }),
                React.createElement("span", null, label)),
            errors && React.createElement("p", { className: "input__error" }, errors))));
};
export default InputFile;
