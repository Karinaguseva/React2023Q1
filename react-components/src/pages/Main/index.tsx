import React, { useEffect, useRef, useState } from 'react';
import Search from 'components/Search';
import Cards from '../../components/Cards';

const Main = () => {
  const [search, setSearch] = useState(localStorage.getItem('search.value') || '');
  const searchRef = useRef(search);

  useEffect(() => {
    return () => {
      localStorage.setItem('search.value', searchRef.current);
    };
  }, [searchRef]);

  const changeSearch = (search: string) => {
    setSearch(search);
    searchRef.current = search;
  };

  return (
    <main className="main">
      <Search search={search} setSearch={changeSearch}></Search>
      <Cards search={search} />
    </main>
  );
};

export default Main;
