import React, { useCallback, useEffect, useState } from 'react';
import Search from 'components/Search';
import Cards from '../../components/Cards';
import Pagination from '../../components/Pagination';
import { ApiCard } from '../../types/api';
import { useSearchParams } from 'react-router-dom';

const Main = () => {
  const [cardsAll, setCardsAll] = useState<ApiCard[]>([]);
  const [load, setLoad] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const pageParams = Number(searchParams.get('page') || 1);
  const nameParams = searchParams.get('name') || '';

  const [totalPages, setTotalPages] = useState(1);

  const filterCards = useCallback(
    (data: ApiCard[]) => {
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
      `https://my-json-server.typicode.com/karinaguseva/api-for-react2023Q1/cards/?name_like=${nameParams}&_page=${pageParams}&_limit=2`
    )
      .then((res) => {
        if (res.ok) {
          const totalApiPages = Number(res.headers.get('X-Total-Count'));
          setTotalPages(Math.ceil(totalApiPages / 2));
          return res.json();
        }
        throw new Error('Invalid Search');
      })
      .then((data) => {
        setCardsAll(nameParams ? filterCards(data) : data);
      })
      .finally(() => {
        setLoad(false);
      });
  }, [pageParams, nameParams, filterCards]);

  const handlePageChange = (selected: number) => {
    const page = selected + 1;
    if (page != 1) searchParams.set('page', page.toString());
    else searchParams.delete('page');
    setSearchParams(searchParams);
  };
  return (
    <main className="main">
      <Search />
      {load ? (
        <div className="cards__error">
          <span className="loader"></span>
        </div>
      ) : (
        <>
          <Pagination
            pageCount={totalPages}
            initialPage={pageParams - 1}
            onChange={handlePageChange}
          />
          <Cards data={cardsAll} />
        </>
      )}
    </main>
  );
};

export default Main;
