import React from 'react';
import './index.scss';
import { Card as ICard } from '../../../types/card';

import { useSearchParams } from 'react-router-dom';

interface CardProps {
  data: ICard;
}

const Card = ({ data }: CardProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const showModalWindow = (id: string) => {
    // searchParams.set('id', id);
    // setSearchParams(searchParams);
    if (searchParams.has('id')) searchParams.set('id', id);
    else searchParams.append('id', id);

    setSearchParams(searchParams);
  };

  return (
    <>
      <div
        className="card"
        onClick={() => {
          showModalWindow(data.id.toString());
        }}
      >
        <div className="card__header">
          <img
            src={data.image}
            alt={data.name}
            className="card__img"
            width={'180px'}
            height={'180px'}
          ></img>
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
      {/* <ModalWindow
        data={data}
        key={data.image}
        onClick={notshowModalWindow}
        showWindow={showWindow}
      /> */}
    </>
  );
};

export default Card;
