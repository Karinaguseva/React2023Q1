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

  return (
    <main className="main">
      <Search />
      {/* <Cards /> */}
      {isLoading ? <Loader /> : <Cards />}
      {cardId && <ModalWindow />}
    </main>
  );
};

export default Main;
