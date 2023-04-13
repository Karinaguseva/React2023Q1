import React from 'react';
import './index.scss';
const CardForm = ({ cards }) => {
    if (cards.length === 0) {
        return (React.createElement("div", { className: "cards__error" },
            React.createElement("p", { className: "error__text" }, "Cards not found")));
    }
    return (React.createElement(React.Fragment, null, cards.map((card) => {
        const cardBirth = card.date.replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`);
        return (React.createElement("div", { className: "form-card", key: card.id },
            React.createElement("div", { className: "form-card__img" },
                React.createElement("img", { src: card.image.toString(), alt: card.name, className: "form-card__img" })),
            React.createElement("div", { className: "form-card__title" }, card.name),
            React.createElement("div", { className: "form-card__birth birth" },
                React.createElement("p", { className: "birth__title" }, "Birth:"),
                React.createElement("p", { className: "birth__text" }, cardBirth)),
            React.createElement("div", { className: "form-card__description" },
                React.createElement("span", { className: "form-card__span" }, "Description:"),
                " ",
                card.description),
            React.createElement("div", { className: "form-card__info" },
                React.createElement("div", { className: "form-card__ingredient item" },
                    React.createElement("p", { className: "item__title" }, card.ingredient),
                    React.createElement("p", { className: "item__text" }, "Ingredient")),
                React.createElement("div", { className: "form-card__cost item" },
                    React.createElement("p", { className: "item__title" },
                        card.cost,
                        " \u029B"),
                    React.createElement("p", { className: "item__text" }, "Cost")),
                React.createElement("div", { className: "form-card__house item" },
                    React.createElement("p", { className: "item__title" }, card.house),
                    React.createElement("p", { className: "item__text" }, "Native House")))));
    })));
};
export default CardForm;
