import React, { useState } from 'react';
import Search from 'components/Search';
import Cards from '../../components/Cards';

const Main = () => {
  const [search, setSearch] = useState(localStorage.getItem('search.value') || '');

  const setSearchToLocal = (event: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem('search.value', event.currentTarget.value);
    setSearch(event.currentTarget.value);
  };

  return (
    <main className="main">
      <Search search={search} setSearch={setSearchToLocal}></Search>
      <Cards search={search} />
    </main>
  );
};

export default Main;
