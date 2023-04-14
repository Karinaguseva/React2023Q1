import React from 'react';
import Card from '../Card';
import './index.scss';
import { useSearch } from '../../../../hooks/useSearch';
import { useGetCardsQuery } from '../../../../store/api/cards.api';
const Cards = () => {
    const search = useSearch();
    const { data: cards } = useGetCardsQuery({ search });
    if (!cards.length)
        return (React.createElement("div", { className: "cards__error" },
            React.createElement("p", { className: "error__text" }, "No such cards")));
    return (React.createElement("div", { className: "cards" }, cards.map((card) => {
        return (React.createElement("div", { key: card.id },
            React.createElement(Card, { data: card, key: card.id })));
    })));
};
export default Cards;
