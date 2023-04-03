import React, { useEffect, useState } from 'react';
import Card from './Card';
import './index.scss';
import { ApiCard } from '../../types/api';
import Pagination from '../Pagination';
// import { useSearchParams } from 'react-router-dom';

interface CardsProps {
  search: string;
}

const Cards = ({ search }: CardsProps) => {
  const [cardsAll, setCardsAll] = useState<ApiCard[]>([]);
  const [load, setLoad] = useState(false);
  // const [searchParamss, setSearchParamss] = useSearchParams();

  // const pageParams = Number(searchParamss.get('page'));
  // const nameParams = searchParamss.get('name');

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // const url = new URL(window.location.href);
  // url.searchParams.set('name', search);
  // url.searchParams.set('page', currentPage.toString());
  // // setSearchParamss(url.searchParams);
  // console.log(searchParamss);

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/karinaguseva/api-for-react2023Q1/cards/?name_like=${search}&_page=${currentPage}&_limit=2`
    )
      .then((res) => {
        if (res.ok) {
          const totalApiPages = Number(res.headers.get('X-Total-Count'));
          setTotalPages(Math.ceil(totalApiPages / 2));
          setLoad(true);
          return res.json();
        }
        throw new Error('Invalid Search');
      })
      .then((data) => {
        if (data.length === 0) setCurrentPage(1);
        setTimeout(() => {
          setLoad(false);
          setCardsAll(data);
        }, 500);
      });
  }, [currentPage, search]);

  const filterCards = () => {
    const filteredCards = cardsAll.filter((card) => {
      let render = false;
      if (card.name.toLowerCase().includes(search.toLowerCase())) render = true;
      return render;
    });
    return filteredCards;
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    const page = selected + 1;
    setCurrentPage(page);
  };

  // if (load) {
  //   return (
  //     <div className="cards__error">
  //       <span className="loader"></span>
  //     </div>
  //   );
  // }
  const totalCards = search ? filterCards() : cardsAll;
  if (totalCards.length === 0) {
    return (
      <div className="cards__error">
        <p className="error__text">No such cards</p>
      </div>
    );
  }
  return (
    <>
      <Pagination
        pageCount={totalPages}
        initialPage={currentPage - 1}
        onChange={handlePageChange}
      />
      {load && (
        <div className="cards__error">
          <span className="loader"></span>
        </div>
      )}
      {!load && (
        <div className="cards">
          {totalCards.map((card) => {
            return (
              <div key={card.id}>
                <Card data={card} key={card.id} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Cards;
