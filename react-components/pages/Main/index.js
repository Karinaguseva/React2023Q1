import React from 'react';
import Search from 'pages/Main/components/Search';
import Cards from './components/Cards';
import Loader from '../../components/Loader';
import { useGetCardsQuery } from '../../store/api/cards.api';
import { useSearch } from '../../hooks/useSearch';
import { useCardId } from '../../hooks/useCardId';
import ModalWindow from './components/ModalWindow';
const Main = () => {
    const search = useSearch();
    const { isLoading } = useGetCardsQuery({ search });
    const cardId = useCardId();
    return (React.createElement("main", { className: "main" },
        React.createElement(Search, null),
        isLoading ? React.createElement(Loader, null) : React.createElement(Cards, null),
        cardId && React.createElement(ModalWindow, null)));
};
export default Main;
