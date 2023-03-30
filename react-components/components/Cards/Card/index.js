import React from 'react';
import './index.scss';
const Card = ({ data }) => {
    return (React.createElement("div", { className: "card" },
        React.createElement("div", { className: "card__header" },
            React.createElement("img", { src: import.meta.env.BASE_URL + '/assets/' + data.image, alt: data.name, className: "card__img" }),
            React.createElement("div", null,
                React.createElement("div", { className: "card__title" }, data.name),
                React.createElement("div", { className: "card__description" },
                    React.createElement("span", { className: "card__span" }, "Description:"),
                    " ",
                    data.description))),
        React.createElement("div", { className: "card__ingredient" },
            React.createElement("span", { className: "card__span" }, "Ingredient:"),
            " ",
            data.ingredient),
        React.createElement("div", { className: "card__cost" },
            React.createElement("span", { className: "card__span" }, "Ingredient cost:"),
            " ",
            data.cost,
            " galleons"),
        React.createElement("div", { className: "card__prerequisite" },
            React.createElement("span", { className: "card__span" }, "Prerequisite:"),
            " ",
            data.prerequisite)));
};
export default Card;
