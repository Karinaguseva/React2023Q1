import React, { useState } from 'react';
import './index.scss';
import { useSearch } from '../../hooks/useSearch';
import { useActions } from '../../hooks/useAction';
const Search = () => {
    const { changeSearch } = useActions();
    const search = useSearch();
    const [value, setValue] = useState(search);
    const applySearch = (name) => {
        changeSearch(name);
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
