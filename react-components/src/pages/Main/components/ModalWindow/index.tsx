import React from 'react';
import { Card as ICard } from '../../../../types/card';

import './index.scss';
import Loader from '../../../../components/Loader';
import { useActions } from '../../../../hooks/useAction';

interface ModalWindowProps {
  modalData: ICard[] | null;
  loading: boolean;
}

const ModalWindow = ({ modalData, loading }: ModalWindowProps) => {
  const { changeCardId } = useActions();
  const close = () => {
    changeCardId(null);
  };

  if (loading)
    return (
      <div onClick={(e) => e.currentTarget === e.target && close()} className={'modal'}>
        <div className={'modal__wrapper'}>
          <Loader />
        </div>
      </div>
    );
  else if (modalData) {
    const data = modalData[0];
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
