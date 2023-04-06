import React, { useCallback, useEffect, useRef, useState } from 'react';
import Search from 'components/Search';
import Cards from '../../components/Cards';
import Pagination from '../../components/Pagination';
import { useSearchParams } from 'react-router-dom';
import ModalWindow from '../../components/Cards/ModalWindow';
import Loader from '../../components/Loader';
const Main = () => {
    const [cards, setCards] = useState([]);
    const [card, setCard] = useState(null);
    const [totalPages, setTotalPages] = useState(1);
    const [load, setLoad] = useState(false);
    const [loadCard, setLoadCard] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const limit = useRef(2);
    const pageParams = Number(searchParams.get('page') || 1);
    const nameParams = searchParams.get('name') || '';
    const id = searchParams.get('id') || '';
    const local = localStorage.getItem('search.karinaguseva') || '';
    const filterCards = useCallback((data) => {
        const filteredCards = data.filter((card) => {
            let render = false;
            if (card.name.toLowerCase().includes(local.toLowerCase()))
                render = true;
            return render;
        });
        return filteredCards;
    }, [local]);
    useEffect(() => {
        setLoad(true);
        fetch(`https://my-json-server.typicode.com/karinaguseva/api-for-react2023Q1/cards/?name_like=${nameParams}&_page=${pageParams}&_limit=${limit.current}`)
            .then((res) => {
            const totalApiPages = Number(res?.headers?.get('X-Total-Count') || 1);
            setTotalPages(Math.ceil(totalApiPages / limit.current));
            return res.json();
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
            return res.json();
        })
            .then((data) => {
            setCard(data[0]);
        })
            .finally(() => {
            setLoadCard(false);
        });
    }, [id]);
    const handlePageChange = (selected) => {
        const page = selected + 1;
        if (page != 1)
            searchParams.set('page', page.toString());
        else
            searchParams.delete('page');
        setSearchParams(searchParams);
    };
    return (React.createElement("main", { className: "main" },
        React.createElement(Search, null),
        React.createElement(Pagination, { pageCount: totalPages, initialPage: pageParams - 1, onChange: handlePageChange }),
        load ? React.createElement(Loader, null) : React.createElement(Cards, { data: cards }),
        id && React.createElement(ModalWindow, { data: card, loading: loadCard })));
};
export default Main;
