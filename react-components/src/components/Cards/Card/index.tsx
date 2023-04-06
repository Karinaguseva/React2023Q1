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
    searchParams.set('id', id);
    setSearchParams(searchParams);
    // if (searchParams.has('id')) searchParams.set('id', id);
    // else searchParams.append('id', id);

    // setSearchParams(searchParams);
  };

  return (
    <>
      <div
        className="preview"
        onClick={() => {
          showModalWindow(data.id.toString());
        }}
      >
        <img
          src={data.image}
          alt={data.name}
          className="preview__img"
          width={'250px'}
          height={'250px'}
        ></img>
        <div className="preview__title">{data.name}</div>
      </div>
    </>
  );
};

export default Card;
