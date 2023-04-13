import React from 'react';
import Search from 'components/Search';
import Cards from '../../components/Cards';
// import Pagination from '../../components/Pagination';
// import { Card as ICard } from '../../types/card';
import { useSearchParams } from 'react-router-dom';
import ModalWindow from '../../components/ModalWindow';
import Loader from '../../components/Loader';
import {
  useGetCardQuery,
  useGetCardsQuery,
  // useGetTotalPagesQuery,
} from '../../store/api/cards.api';
// import Card from '../../components/Cards/Card';
// import { BeastCard } from '../../types/beastCard';
import { useSearch } from '../../hooks/useSearch';

const Main = () => {
  // const [cards, setCards] = useState<ICard[]>([]);
  // const [card, setCard] = useState<ICard | null>(null);
  // const [totalPages, setTotalPages] = useState(1);
  // const [load, setLoad] = useState(false);
  // const [loadCard, setLoadCard] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  // const limit = useRef(2);
  const pageParams = Number(searchParams.get('page') || 1);
  // const nameParams = searchParams.get('name') || '';
  const id = searchParams.get('id') || '';
  // const local = localStorage.getItem('search.karinaguseva') || '';

  const search = useSearch();
  // if (!search) {
  //   searchParams.set('name', search);
  // } else {
  //   searchParams.delete('name');
  // }

  // if (search) {
  //   searchParams.set('name', search);
  //   console.log(search);
  // } else {
  //   searchParams.delete('name');
  // }

  // useEffect(() => {
  //   if (!nameParams && local) {
  //     searchParams.set('name', local);
  //     setSearchParams(searchParams);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // useEffect(() => {
  //   setLoad(true);
  //   fetch(
  //     `https://my-json-server.typicode.com/karinaguseva/api-for-react2023Q1/cards/?name_like=${local}&_page=${pageParams}&_limit=${limit.current}`
  //   )
  //     .then((res) => {
  //       const totalApiPages = Number(res?.headers?.get('X-Total-Count') || 1);
  //       setTotalPages(Math.ceil(totalApiPages / limit.current));
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setCards(data);
  //     })
  //     .finally(() => {
  //       setLoad(false);
  //     });
  // }, [pageParams, local]);

  // useEffect(() => {
  //   setLoadCard(true);
  //   if (id) {
  //     fetch(`https://my-json-server.typicode.com/karinaguseva/api-for-react2023Q1/cards/?id=${id}`)
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setCard(data[0]);
  //       })
  //       .finally(() => {
  //         setLoadCard(false);
  //       });
  //   }
  // }, [id]);

  // const handlePageChange = (selected: number) => {
  //   const page = selected + 1;
  //   if (page != 1) searchParams.set('page', page.toString());
  //   else searchParams.delete('page');
  //   setSearchParams(searchParams);
  // };
  const { isLoading, data: cards } = useGetCardsQuery({ pageParams, search });
  const { data: card } = useGetCardQuery(id);
  // const totalcards = 'totalcards';

  // const { data: total } = useGetTotalPagesQuery(totalcards);

  // const totalApiPages = total?.totalcards;
  // useMemo(() => setTotalPages(Math.ceil(totalApiPages / limit.current)), [totalApiPages]);

  return (
    <main className="main">
      <Search />
      {/* <Pagination pageCount={totalPages} initialPage={pageParams - 1} onChange={handlePageChange} /> */}
      {isLoading ? <Loader /> : <Cards data={cards} />}
      {id && <ModalWindow data={card[0]} loading={isLoading} />}
      {/* <Pagination pageCount={totalPages} initialPage={pageParams - 1} onChange={handlePageChange} />
      {load ? <Loader /> : <Cards data={cards} />}
      {id && <ModalWindow data={card} loading={loadCard} />} */}
    </main>
  );
};

export default Main;
