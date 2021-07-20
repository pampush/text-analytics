import axios, { AxiosResponse } from 'axios';
import { ActionCreator, Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { addTextAction, resetTextsAction, setLoadingAction } from './actions';
import { Text, Types } from './types';
import { AppState } from '../';

const BASE_URL = 'https://tmgwebtest.azurewebsites.net/api/textstrings/';

const addTextActionCreator: ActionCreator<addTextAction> = (text: Text) => ({
  type: Types.ADD_TEXT,
  payload: text,
});

const setLoading: ActionCreator<setLoadingAction> = (loading: boolean) => ({
  type: Types.SET_LOADING,
  payload: loading,
});

const resetTexts: ActionCreator<resetTextsAction> = () => ({
  type: Types.RESET_TEXTS,
});

const fetchText =
  (id: number): ThunkAction<Promise<Text>, AppState, void, Action> =>
  async (dispatch: ThunkDispatch<AppState, void, Action>) => {
    dispatch(setLoading(true));

    const { data: result } = await axios.get<Text, AxiosResponse<Text>>(`${BASE_URL}${id}`, {
      headers: {
        'TMG-Api-Key': '0J/RgNC40LLQtdGC0LjQutC4IQ==',
      },
    });

    dispatch(addTextActionCreator(result));
    return Promise.resolve(result); // dispatch returns promise
  };

export { addTextActionCreator, fetchText, setLoading, resetTexts };
