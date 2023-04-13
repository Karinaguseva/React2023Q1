import React from 'react';
import './index.scss';
import { useCardId } from '../../hooks/useCardId';
import ModalWindow from '../ModalWindow';
import { useGetCardQuery } from '../../store/api/cards.api';

const Modal = () => {
  const cardId = useCardId();
  const { isLoading, data: card } = useGetCardQuery(cardId);

  return <>{cardId && <ModalWindow modalData={card} loading={isLoading} />}</>;
};

export default Modal;
