import React from 'react';
import { Card as ICard } from '../../../types/card';
import { useSearchParams } from 'react-router-dom';

interface ModalWindowProps {
  data: ICard | null;
}

const ModalWindow = ({ data }: ModalWindowProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const close = () => {
    searchParams.delete('id');
    setSearchParams(searchParams);
  };
  return (
    <div className={'popup'} onClick={close}>
      <div className="card">
        <div className="card__header">
          <img
            src={data?.image}
            alt={data?.name}
            className="card__img"
            width={'180px'}
            height={'180px'}
          ></img>
          <div>
            <div className="card__title">{data?.name}</div>
            <div className="card__description">
              <span className="card__span">Description:</span> {data?.description}
            </div>
          </div>
        </div>

        <div className="card__ingredient">
          <span className="card__span">Ingredient:</span> {data?.ingredient}
        </div>
        <div className="card__cost">
          <span className="card__span">Ingredient cost:</span> {data?.cost} galleons
        </div>
        <div className="card__prerequisite">
          <span className="card__span">Prerequisite:</span> {data?.prerequisite}
        </div>
      </div>
      <div onClick={close}></div>
    </div>
  );
};

export default ModalWindow;
