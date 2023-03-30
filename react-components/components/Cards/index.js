import React, { useEffect, useState } from 'react';
import Card from './Card';
import './index.scss';
const Cards = ({ search }) => {
    const [cards, setCards] = useState([]);
    const data = import('./../../data/data.json');
    useEffect(() => {
        async function fetchData() {
            setCards((await data).default);
        }
        fetchData();
    }, [data]);
    const filterCards = () => {
        const filteredCards = cards.filter((card) => {
            let render = false;
            if (card.name.toLowerCase().includes(search.toLowerCase()))
                render = true;
            if (card.ingredient.toLowerCase().includes(search.toLowerCase()))
                render = true;
            return render;
        });
        return filteredCards;
    };
    const totalCards = search ? filterCards() : cards;
    if (totalCards.length === 0) {
        return (React.createElement("div", { className: "cards__error" },
            React.createElement("p", { className: "error__text" }, "No such cards")));
    }
    return (React.createElement("div", { className: "cards" }, totalCards.map((card) => {
        return React.createElement(Card, { data: card, key: card.id });
    })));
};
export default Cards;
