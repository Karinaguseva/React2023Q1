import React, { useState } from 'react';
import './index.scss';
import { useSearchParams } from 'react-router-dom';
import { useSearch } from '../../hooks/useSearch';
import { useActions } from '../../hooks/useAction';

const Search = () => {
  const { changeSearch } = useActions();
  const search = useSearch();

  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(search);

  // if (search) {
  //   searchParams.set('name', search);
  // } else {
  //   searchParams.delete('name');
  // }
  const applySearch = (name: string) => {
    if (name) {
      searchParams.set('name', name);
    } else {
      searchParams.delete('name');
    }
    // searchParams.delete('page');
    setSearchParams(searchParams);
    changeSearch(name);
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
        >
          Delete
        </div>
      </div>
    </div>
  );
};

export default Search;
