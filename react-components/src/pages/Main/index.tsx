import React from 'react';
import Search from 'components/Search';
import Cards from '../../components/Cards';

import Loader from '../../components/Loader';
import { useGetCardsQuery } from '../../store/api/cards.api';

import { useSearch } from '../../hooks/useSearch';
import { useCardId } from '../../hooks/useCardId';
import Modal from '../../components/ModalPopup';

const Main = () => {
  const search = useSearch();
  const { isLoading, data: cards } = useGetCardsQuery({ search });
  const cardId = useCardId();

  return (
    <main className="main">
      <Search />
      {isLoading ? <Loader /> : <Cards data={cards} />}
      {cardId && <Modal />}
    </main>
  );
};

export default Main;
