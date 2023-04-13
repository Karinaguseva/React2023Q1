import React, { useEffect, useState } from 'react';
import './index.scss';
import FormData from './components/FormData/index';
import CardForm from './components/CardForm';
import Popup from './../../components/Popup/index';
import { useActions } from '../../hooks/useAction';
import { useFormCards } from '../../hooks/useFormCards';
const Forms = () => {
    const [popup, setPopup] = useState(false);
    const { addCard } = useActions();
    const cards = useFormCards();
    const handleCard = (card) => {
        addCard(card);
        setPopup(true);
    };
    useEffect(() => {
        popup &&
            setTimeout(() => {
                setPopup(false);
            }, 3000);
    }, [popup]);
    return (React.createElement("div", { className: "main" },
        React.createElement(FormData, { handleCard: handleCard, cards: cards?.length }),
        React.createElement("div", { className: "forms__cards" },
            React.createElement(CardForm, { cards: cards })),
        React.createElement(Popup, { showPopup: popup })));
};
export default Forms;
