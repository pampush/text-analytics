import React from 'react';

import { Text } from '../redux/texts/types';

function ResultCard(data: Text) {
  return (
    <div className="card">
      <img height="20rem" width="20rem" className="card__img"></img>
      <div className="card__title">{data.text}</div>
      <div className="card-info card__words">
        <div>Слов</div>
        <div>{data.words}</div>
      </div>
      <div className="card-info card__vowels">
        <div>Гласных</div>
        <div>{data.vowels}</div>
      </div>
    </div>
  );
}

export default ResultCard;
