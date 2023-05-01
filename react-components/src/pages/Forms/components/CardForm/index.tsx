import React from 'react';
import { BeastCard } from '../../../../types/beastCard';
import './index.scss';

interface CardFormProps {
  cards: BeastCard[];
}

const CardForm = ({ cards }: CardFormProps) => {
  if (cards.length === 0) {
    return (
      <div className="cards__error">
        <p className="error__text">Cards not found</p>
      </div>
    );
  }
  return (
    <>
      {cards.map((card) => {
        const cardBirth = card.date.replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`);
        return (
          <div className="form-card" key={card.id} data-cy="form-card">
            <div className="form-card__img">
              <img src={card.image.toString()} alt={card.name} className="form-card__img"></img>
            </div>
            <div className="form-card__title">{card.name}</div>
            <div className="form-card__birth birth">
              <p className="birth__title">Birth:</p>
              <p className="birth__text">{cardBirth}</p>
            </div>
            <div className="form-card__description">
              <span className="form-card__span">Description:</span> {card.description}
            </div>
            <div className="form-card__info">
              <div className="form-card__ingredient item">
                <p className="item__title">{card.ingredient}</p>
                <p className="item__text">Ingredient</p>
              </div>
              <div className="form-card__cost item">
                <p className="item__title">{card.cost} &#667;</p>
                <p className="item__text">Cost</p>
              </div>
              <div className="form-card__house item">
                <p className="item__title">{card.house}</p>
                <p className="item__text">Native House</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardForm;
