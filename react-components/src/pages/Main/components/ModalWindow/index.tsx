import React from 'react';
import './index.scss';
import Loader from '../../../../components/Loader';
import { useActions } from '../../../../hooks/useAction';
import { useGetCardQuery } from '../../../../store/api/cards.api';
import { useCardId } from '../../../../hooks/useCardId';

const ModalWindow = () => {
  const cardId = useCardId();
  const { isLoading, data: card } = useGetCardQuery(cardId);
  const { changeCardId } = useActions();

  const close = () => {
    changeCardId(null);
  };

  if (isLoading)
    return (
      <div onClick={(e) => e.currentTarget === e.target && close()} className={'modal'}>
        <div className={'modal__wrapper'}>
          <Loader />
        </div>
      </div>
    );
  else if (card) {
    const data = card[0];
    return (
      <div onClick={(e) => e.currentTarget === e.target && close()} className={'modal'}>
        <div className={'modal__wrapper'}>
          <div onClick={close} className="modal__close"></div>
          <div className="modal__card card">
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
        </div>
      </div>
    );
  }
  return <></>;
};

export default ModalWindow;
