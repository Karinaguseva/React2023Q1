import React, { useEffect, useRef, useState } from 'react';
import Search from 'components/Search';
import Cards from '../../components/Cards';
const Main = () => {
    const [search, setSearch] = useState(localStorage.getItem('search.value') || '');
    const searchRef = useRef(search);
    useEffect(() => {
        return () => {
            localStorage.setItem('search.value', searchRef.current);
        };
    }, [searchRef]);
    const changeSearch = (event) => {
        setSearch(event.currentTarget.value);
        searchRef.current = event.target.value;
    };
    return (React.createElement("main", { className: "main" },
        React.createElement(Search, { search: search, setSearch: changeSearch }),
        React.createElement(Cards, { search: search })));
};
export default Main;
