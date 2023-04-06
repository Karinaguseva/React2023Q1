import React, { useState, useEffect } from 'react';
import './index.scss';
import { useSearchParams } from 'react-router-dom';
const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const nameParams = searchParams.get('name') || '';
    const nameLocal = localStorage.getItem('search.karinaguseva');
    const [value, setValue] = useState(nameParams);
    useEffect(() => {
        if (!nameParams && nameLocal) {
            searchParams.set('name', nameLocal);
            setSearchParams(searchParams);
            setValue(nameLocal);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const applySearch = (name) => {
        if (name) {
            searchParams.set('name', name);
            localStorage.setItem('search.karinaguseva', name);
        }
        else {
            searchParams.delete('name');
            localStorage.removeItem('search.karinaguseva');
        }
        searchParams.delete('page');
        setSearchParams(searchParams);
    };
    return (React.createElement("div", { className: "search" },
        React.createElement("div", { className: "search__wrapper" },
            React.createElement("input", { className: "search__input", placeholder: "Find beast...", type: "text", value: value, onChange: (event) => setValue(event.currentTarget.value), onKeyUp: (event) => event.key === 'Enter' && applySearch(value) }),
            React.createElement("div", { className: "search__delete", onClick: () => {
                    setValue('');
                    applySearch('');
                } }, "Delete"))));
};
export default Search;
