import React from 'react';
import './index.scss';
const Search = ({ search, setSearch }) => {
    return (React.createElement("div", { className: "search" },
        React.createElement("input", { className: "search__input", placeholder: "Find beast...", type: "search", value: search, onChange: setSearch })));
};
export default Search;
