import React from 'react';
import './index.scss';
import { CardPreview } from '../../../../types/card';
import { useActions } from '../../../../hooks/useAction';

interface CardProps {
  data: CardPreview;
}

const Card = ({ data }: CardProps) => {
  const { changeCardId } = useActions();

  const showModalWindow = (id: string) => {
    changeCardId(id);
  };

  return (
    <div data-cy="card">
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
    </div>
  );
};

export default Card;
