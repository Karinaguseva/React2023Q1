import React, { useState } from 'react';
import './index.scss';
import { ApiCard } from '../../../types/api';
import ModalWindow from '../ModalWindow/ModalWindow';

interface CardProps {
  data: ApiCard;
}

const Card = ({ data }: CardProps) => {
  const [showWindow, setShowWindow] = useState(false);
  const showModalWindow = () => {
    setShowWindow(true);
  };
  const notshowModalWindow = () => {
    setShowWindow(false);
  };

  return (
    <>
      <div className="card" onClick={showModalWindow}>
        <div className="card__header">
          <img src={data.image} alt={data.name} className="card__img"></img>
          <div>
            <div className="card__title">{data.name}</div>
            <div className="card__description">
              <span className="card__span">Description:</span> {data.name}
            </div>
          </div>
        </div>
        <div className="card__ingredient">
          {/* <span className="card__span">Ingredient:</span> {data.status} */}
        </div>
        <div className="card__cost">
          {/* <span className="card__span">Ingredient cost:</span> {data.species} galleons */}
        </div>
        <div className="card__prerequisite">
          {/* <span className="card__span">Prerequisite:</span> {data.gender} */}
        </div>
      </div>
      <ModalWindow
        data={data}
        key={data.image}
        onClick={notshowModalWindow}
        showWindow={showWindow}
      />
    </>
  );
};

export default Card;
