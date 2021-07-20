import React from 'react';

function ResultCard() {
  return (
    <div className="card">
      <img height="20rem" width="20rem" className="card__img"></img>
      <div className="card__title">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, et!
      </div>
      <div className="card-info card__words">
        <div>Слов</div>
        <div>5</div>
      </div>
      <div className="card-info card__vowels">
        <div>Гласных</div>
        <div>5</div>
      </div>
    </div>
  );
}

export default ResultCard;
