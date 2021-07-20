import React from 'react';
import { useSelector } from 'react-redux';

import ResultCard from './ResultCard';
import { AppState } from '../redux/';
import ResultSkeleton from './ResultSkeleton';

function ResultBox() {
  const loading = useSelector((state: AppState) => state.texts.loading);

  return <>{loading ? <ResultSkeleton /> : <ResultCard />}</>;
}

export default ResultBox;
