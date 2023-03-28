import React, { useEffect, useState } from 'react';
import { Card as ICard } from 'types/card';
import Card from './Card';
import './index.scss';

interface CardsProps {
  search: string;
}

const Cards = ({ search }: CardsProps) => {
  const [cards, setCards] = useState<ICard[]>([]);
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
      if (card.title.toLowerCase().includes(search.toLowerCase())) render = true;
      if (card.ingredient.toLowerCase().includes(search.toLowerCase())) render = true;
      return render;
    });
    return filteredCards;
  };

  const totalCards = search ? filterCards() : cards;
  if (totalCards.length === 0) {
    return (
      <div className="cards__error">
        <p className="error__text">No such cards</p>
      </div>
    );
  }
  return (
    <div className="cards">
      {totalCards.map((card) => {
        return <Card data={card} key={card.id} />;
      })}
    </div>
  );
};

export default Cards;
