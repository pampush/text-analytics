import React from 'react';

function SearchBox() {
  return (
    <>
      <div className="search-input">
        <input type="text" className="search__item search-input__field" />
      </div>
      <div className="search-button">
        <button className="search__item search-button__button">Подсчитать</button>
      </div>
    </>
  );
}

export default SearchBox;
