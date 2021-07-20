import React from 'react';

function ResultCard() {
  async function handleClick() {
    const response = await fetch(
      'https://translation.googleapis.com/language/translate/v2/detect?q=%22Hello%22&key=AIzaSyDnEjxJ2_Lk0SiuGWpW9f13xygv82rOnyk',
      {
        method: 'POST',
      },
    );

    const data: { data: { detections: Record<string, string> } } = (await response.json()) as {
      data: { detections: Record<string, string> };
    };
    console.log(data);
  }

  return (
    <div className="card">
      <img height="20rem" width="20rem" className="card__img"></img>
      <div className="card__title">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, et!
      </div>
      <div className="card-info card__words">
        <div onClick={handleClick}>Слов</div>
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
