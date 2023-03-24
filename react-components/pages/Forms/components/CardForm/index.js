import React, { Component } from 'react';
import './index.scss';
class CardForm extends Component {
    render() {
        if (this.props.cards.length === 0) {
            return (React.createElement("div", { className: "cards__error" },
                React.createElement("p", { className: "error__text" }, "Cards not found")));
        }
        return this.props.cards.map((card) => {
            return (React.createElement("div", { className: "form-card", key: card.id },
                React.createElement("img", { src: card.image, alt: card.title, className: "form-card__img" }),
                React.createElement("div", { className: "form-card__title" }, card.title),
                React.createElement("div", { className: "form-card__birth birth" },
                    React.createElement("p", { className: "birth__title" }, "Birth:"),
                    React.createElement("p", { className: "birth__text" }, card.birth)),
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
        });
    }
}
export default CardForm;
