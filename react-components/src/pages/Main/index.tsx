import React, { useCallback, useEffect, useRef, useState } from 'react';
import Search from 'components/Search';
import Cards from '../../components/Cards';
import Pagination from '../../components/Pagination';
import { Card as ICard } from '../../types/card';
import { useSearchParams } from 'react-router-dom';
import ModalWindow from '../../components/Cards/ModalWindow/ModalWindow';
import Loader from '../../components/Loader';

const Main = () => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [card, setCard] = useState<ICard | null>(null);
  const [totalPages, setTotalPages] = useState(1);
  const [load, setLoad] = useState(false);
  const [loadCard, setLoadCard] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const limit = useRef(2);
  const pageParams = Number(searchParams.get('page') || 1);
  const nameParams = searchParams.get('name') || '';
  const id = searchParams.get('id') || '';

  const filterCards = useCallback(
    (data: ICard[]) => {
      const filteredCards = data.filter((card) => {
        let render = false;
        if (card.name.toLowerCase().includes(nameParams.toLowerCase())) render = true;
        return render;
      });
      return filteredCards;
    },
    [nameParams]
  );

  useEffect(() => {
    setLoad(true);
    fetch(
      `https://my-json-server.typicode.com/karinaguseva/api-for-react2023Q1/cards/?name_like=${nameParams}&_page=${pageParams}&_limit=${limit.current}`
    )
      .then((res) => {
        if (res.ok) {
          const totalApiPages = Number(res.headers.get('X-Total-Count'));
          setTotalPages(Math.ceil(totalApiPages / limit.current));
          return res.json();
        }
        throw new Error('Invalid Search');
      })
      .then((data) => {
        setCards(nameParams ? filterCards(data) : data);
      })
      .finally(() => {
        setLoad(false);
      });
  }, [pageParams, nameParams, filterCards]);

  useEffect(() => {
    setLoadCard(true);
    fetch(`https://my-json-server.typicode.com/karinaguseva/api-for-react2023Q1/cards/?id=${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Invalid Search');
      })
      .then((data) => {
        setCard(data[0]);
      })
      .finally(() => {
        setLoadCard(false);
      });
  }, [id]);

  const handlePageChange = (selected: number) => {
    const page = selected + 1;
    if (page != 1) searchParams.set('page', page.toString());
    else searchParams.delete('page');
    setSearchParams(searchParams);
  };

  return (
    <main className="main">
      <Search />
      <Pagination pageCount={totalPages} initialPage={pageParams - 1} onChange={handlePageChange} />
      {load ? <Loader /> : <Cards data={cards} />}
      {id && <ModalWindow data={card} loading={loadCard} />}
    </main>
  );
};

export default Main;
