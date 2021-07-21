import { Reducer } from 'redux';

import { TextsState, Types } from './types';
import { textsActions } from './actions';

const initialState: TextsState = {
  items: {},
  errors: '',
  loading: false,
};

const reducer: Reducer<TextsState, textsActions> = (state = initialState, action): TextsState => {
  switch (action.type) {
    case Types.ADD_TEXT:
      return {
        ...state,
        items: { ...state.items, [action.payload.id]: action.payload.text },
      };

    case Types.RESET_TEXTS:
      return initialState;

    case Types.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case Types.SET_META:
      const newText = action.payload;
      return {
        ...state,
        items: {
          ...state.items,
          [newText.id]: {
            ...state.items[newText.id],
            vowels: newText.vowels,
            words: newText.words,
            lang: newText.lang,
          },
        },
      };

    case Types.SET_ERROR:
      return {
        ...state,
        errors: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
