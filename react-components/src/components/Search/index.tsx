import React, { useState, useEffect } from 'react';
import './index.scss';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const nameParams = searchParams.get('name') || '';
  const nameLocal = localStorage.getItem('search.karinaguseva') || nameParams;
  const [value, setValue] = useState(nameLocal);

  useEffect(() => {
    if (!nameParams && nameLocal !== '') {
      searchParams.set('name', nameLocal);
      setSearchParams(searchParams);
    } else searchParams.delete('name');
  }, [nameParams, nameLocal, setSearchParams, searchParams]);

  const applySearch = (name: string) => {
    if (name) {
      searchParams.set('name', name);
      localStorage.setItem('search.karinaguseva', name);
    } else {
      searchParams.delete('name');
      localStorage.removeItem('search.karinaguseva');
    }
    searchParams.delete('page');
    setSearchParams(searchParams);
  };

  return (
    <div className="search">
      <div className="search__wrapper">
        {/* <form className="search__wrapper"> */}
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
        {/* </form> */}
      </div>
    </div>
  );
};

export default Search;
