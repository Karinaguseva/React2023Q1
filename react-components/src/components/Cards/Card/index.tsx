import React from 'react';
import { Card as ICard } from 'types/card';
import './index.scss';

interface CardProps {
  data: ICard;
}

const Card = ({ data }: CardProps) => {
  return (
    <div className="card">
      <div className="card__header">
        <img
          src={import.meta.env.BASE_URL + '/assets/' + data.image}
          alt={data.title}
          className="card__img"
        ></img>
        <div>
          <div className="card__title">{data.title}</div>
          <div className="card__description">
            <span className="card__span">Description:</span> {data.description}
          </div>
        </div>
      </div>

      <div className="card__ingredient">
        <span className="card__span">Ingredient:</span> {data.ingredient}
      </div>
      <div className="card__cost">
        <span className="card__span">Ingredient cost:</span> {data.cost} galleons
      </div>
      <div className="card__prerequisite">
        <span className="card__span">Prerequisite:</span> {data.prerequisite}
      </div>
    </div>
  );
};

export default Card;
