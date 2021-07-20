import axios, { AxiosResponse } from 'axios';
import { ActionCreator, Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { addTextAction, resetTextsAction, setLoadingAction, setMetaAction } from './actions';
import { Text, Types } from './types';
import { AppState } from '../';

const BASE_URL = 'https://tmgwebtest.azurewebsites.net/api/textstrings/';

const addTextActionCreator: ActionCreator<addTextAction> = (payload: {
  id: number;
  text: Text;
}) => ({
  type: Types.ADD_TEXT,
  payload,
});

const setLoading: ActionCreator<setLoadingAction> = (loading: boolean) => ({
  type: Types.SET_LOADING,
  payload: loading,
});

const resetTexts: ActionCreator<resetTextsAction> = () => ({
  type: Types.RESET_TEXTS,
});

const setMetaActionCrator: ActionCreator<setMetaAction> = ({
  ...payload
}: {
  id: number;
  vowels: number;
  words: number;
  lang: string;
}) => ({
  type: Types.SET_META,
  payload: { ...payload },
});

const fetchText =
  (id: number): ThunkAction<Promise<Text>, AppState, void, Action> =>
  async (dispatch: ThunkDispatch<AppState, void, Action>) => {
    try {
      dispatch(setLoading(true));
      const { data: result } = await axios.get<Text, AxiosResponse<Text>>(`${BASE_URL}${id}`, {
        headers: {
          'TMG-Api-Key': '0J/RgNC40LLQtdGC0LjQutC4IQ==',
        },
      });

      dispatch(addTextActionCreator({ id, text: result }));
      return Promise.resolve(result); // dispatch returns promise
    } catch (e) {
      console.error(e.message);
      return Promise.reject(false);
    }
  };

export { addTextActionCreator, fetchText, setLoading, resetTexts, setMetaActionCrator };
