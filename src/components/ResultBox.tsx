import React from 'react';
import { useSelector } from 'react-redux';

import ResultCard from './ResultCard';
import { AppState } from '../redux/';
import ResultSkeleton from './ResultSkeleton';

function ResultBox() {
  const { loading, items } = useSelector((state: AppState) => state.texts);

  return (
    <>
      {loading
        ? Array(3)
            .fill(0)
            .map((item, i) => <ResultSkeleton key={i} />)
        : Object.entries(items).map(([id, data]) => <ResultCard key={id} {...data} />)}
    </>
  );
}

export default ResultBox;
