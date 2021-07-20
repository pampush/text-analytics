import { combineReducers } from 'redux';

import textsReducer from './texts/reducer';
import { TextsState } from './texts/types';

export interface AppState {
  texts: TextsState;
}

const rootReducer = combineReducers<AppState>({
  texts: textsReducer,
});

export default rootReducer;
