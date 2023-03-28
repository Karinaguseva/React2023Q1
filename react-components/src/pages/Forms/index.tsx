import React, { useEffect, useState } from 'react';
import './index.scss';
import FormData from './components/FormData/index';
import { BeastCard } from '../../types/beastCard';
import CardForm from './components/CardForm';
import Popup from './../../components/Popup/index';
import FormData2 from './components/FormData/index copy';

const Forms = () => {
  const [cards, setCards] = useState<BeastCard[]>([]);
  const [popup, setPopup] = useState(false);

  const handleCard = (card: BeastCard) => {
    setCards([...cards, card]);
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
      <FormData2 handleCard={handleCard} cards={cards.length} />
      <div className="forms__cards">
        <CardForm cards={cards} />
      </div>
      <Popup showPopup={popup} />
    </div>
  );
};

export default Forms;
