import React, { useState } from 'react';
import './index.scss';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const nameParams = searchParams.get('name') || '';

  const [value, setValue] = useState(nameParams);
  const applySearch = (name: string) => {
    if (name) searchParams.set('name', name);
    else searchParams.delete('name');
    searchParams.delete('page');
    setSearchParams(searchParams);
  };

  return (
    <div className="search">
      <div className="search__wrapper">
        <input
          className="search__input"
          placeholder="Find beast..."
          type="text"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          onKeyUp={(event) => event.key === 'Enter' && applySearch(value)}
        ></input>
        <div
          className="search__delete"
          onClick={() => {
            setValue('');
            applySearch('');
          }}
        ></div>
      </div>
    </div>
  );
};

export default Search;
