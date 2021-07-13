import React from 'react';
import ResultBox from '../components/ResultBox';
import SearchBox from '../components/SearchBox';

function SearchPage() {
  return (
    <>
      <section className="search">
        <SearchBox />
      </section>
      <section className="cards">
        <ResultBox />
      </section>
    </>
  );
}

export default SearchPage;
