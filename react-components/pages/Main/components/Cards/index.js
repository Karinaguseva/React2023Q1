import React from 'react';
import Card from '../Card';
import './index.scss';
const Cards = ({ data }) => {
    if (!data.length)
        return (React.createElement("div", { className: "cards__error" },
            React.createElement("p", { className: "error__text" }, "No such cards")));
    return (React.createElement("div", { className: "cards" }, data.map((card) => {
        return (React.createElement("div", { key: card.id },
            React.createElement(Card, { data: card, key: card.id })));
    })));
};
export default Cards;
