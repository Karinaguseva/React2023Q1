import React, { useState } from 'react';
import './index.scss';
import { useSearch } from '../../../../hooks/useSearch';
import { useActions } from '../../../../hooks/useAction';

const Search = () => {
  const { changeSearch } = useActions();
  const search = useSearch();

  const [value, setValue] = useState(search);
  const applySearch = (name: string) => {
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
          data-cy="search"
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
