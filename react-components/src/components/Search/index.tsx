import React, { useState } from 'react';
import './index.scss';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const nameParams = searchParams.get('name') || '';

  const [num, setNum] = useState(nameParams);
  const applySearch = (name: string) => {
    if (name) searchParams.set('name', name);
    else searchParams.delete('name');
    searchParams.delete('page');
    setSearchParams(searchParams);
  };

  return (
    <div className="search">
      <input
        className="search__input"
        placeholder="Find beast..."
        type="text"
        value={num}
        onChange={(event) => setNum(event.currentTarget.value)}
        onKeyUp={(event) => event.key === 'Enter' && applySearch(num)}
      ></input>
      <div
        onClick={() => {
          setNum('');
          applySearch('');
        }}
      >
        X
      </div>
    </div>
  );
};

export default Search;
