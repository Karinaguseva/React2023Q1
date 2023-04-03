import React, { useState } from 'react';
import { SetSearch } from '../../types/search';
import './index.scss';

interface SearchProps {
  search: string;
  setSearch: SetSearch;
}

const Search = ({ search, setSearch }: SearchProps) => {
  const [num, setNum] = useState(search);
  // const changeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setNum(event.currentTarget.value);
  //   // searchRef.current = event.target.value;
  // };
  return (
    <div className="search">
      <input
        className="search__input"
        placeholder="Find beast..."
        type="text"
        value={num}
        onChange={(event) => setNum(event.currentTarget.value)}
        onKeyUp={(event) => event.key === 'Enter' && setSearch(num)}
      ></input>
      <div
        onClick={() => {
          setNum('');
          setSearch('');
        }}
      >
        X
      </div>
    </div>
  );
};

export default Search;
