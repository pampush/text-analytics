import axios, { AxiosResponse } from 'axios';
import { ActionCreator, Dispatch } from 'redux';

import { addTextAction, resetTextsAction, setLoadingAction } from './actions';
import { Text, Types } from './types';

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

const fetchText = (id: number) => async (dispatch: Dispatch) => {
  const { data: result } = await axios.get<Text, AxiosResponse<Text>>(`${BASE_URL}${id}`, {
    headers: {
      'TMG-Api-Key': '0J/RgNC40LLQtdGC0LjQutC4IQ==',
    },
  });

  dispatch(addTextActionCreator(result));
};

export { addTextActionCreator, fetchText, setLoading, resetTexts };
