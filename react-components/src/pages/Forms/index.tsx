import React, { useEffect, useState } from 'react';
import './index.scss';
import FormData from './components/FormData/index';
import { BeastCard } from '../../types/beastCard';
import CardForm from './components/CardForm';
import Popup from './../../components/Popup/index';
import { useActions } from '../../hooks/useAction';
import { useFormCards } from '../../hooks/useFormCards';

const Forms = () => {
  const [popup, setPopup] = useState(false);

  const { addCard } = useActions();
  const cards = useFormCards();

  const handleCard = (card: BeastCard) => {
    addCard(card);
    setPopup(true);
  };

  useEffect(() => {
    popup &&
      setTimeout(() => {
        setPopup(false);
      }, 3000);
  }, [popup]);

  return (
    <div className="main">
      <FormData handleCard={handleCard} cards={cards?.length} />
      <div className="forms__cards">
        <CardForm cards={cards} />
      </div>
      <Popup showPopup={popup} />
    </div>
  );
};

export default Forms;
