import React from 'react';
import Card from './Card';
import './index.scss';
import { ApiCard } from '../../types/api';

interface CardProps {
  data: ApiCard[];
}
const Cards = ({ data }: CardProps) => {
  if (!data.length)
    return (
      <div className="cards__error">
        <p className="error__text">No such cards</p>
      </div>
    );
  return (
    <div className="cards">
      {data.map((card) => {
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
