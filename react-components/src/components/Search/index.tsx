import React from 'react';
import { SetSearch } from '../../types/search';
import './index.scss';

interface SearchProps {
  search: string;
  setSearch: SetSearch;
}

const Search = ({ search, setSearch }: SearchProps) => {
  return (
    <div className="search">
      <input
        className="search__input"
        placeholder="Find beast..."
        type="search"
        value={search}
        onChange={setSearch}
      ></input>
    </div>
  );
};

export default Search;
