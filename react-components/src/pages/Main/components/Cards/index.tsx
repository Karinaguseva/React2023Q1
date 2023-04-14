import React from 'react';
import Card from '../Card';
import './index.scss';
import { CardPreview } from '../../../../types/card';
import { useSearch } from '../../../../hooks/useSearch';
import { useGetCardsQuery } from '../../../../store/api/cards.api';

const Cards = () => {
  const search = useSearch();
  const { data: cards } = useGetCardsQuery({ search });

  if (!cards.length)
    return (
      <div className="cards__error">
        <p className="error__text">No such cards</p>
      </div>
    );
  return (
    <div className="cards">
      {cards.map((card: CardPreview) => {
        return (
          <div key={card.id}>
            <Card data={card} key={card.id} />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
