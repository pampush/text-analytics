import axios, { AxiosResponse } from 'axios';
import { ActionCreator, Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import {
  addTextAction,
  resetTextsAction,
  setErrorAction,
  setLoadingAction,
  setMetaAction,
} from './actions';
import { Text, Types } from './types';
import { AppState } from '../';

const BASE_URL = 'https://tmgwebtest.azurewebsites.net/api/textstrings/';

/**
 * Add next texts to texts.items object
 * @param payload - text + metainformation
 * @returns Action
 */
const addTextActionCreator: ActionCreator<addTextAction> = (payload: {
  id: number;
  text: Text;
}) => ({
  type: Types.ADD_TEXT,
  payload,
});

/**
 * set loading state for user experience features
 * @param loading - true/false
 * @returns
 */
const setLoading: ActionCreator<setLoadingAction> = (loading: boolean) => ({
  type: Types.SET_LOADING,
  payload: loading,
});

/**
 * reset redux store.texts state to initial value
 * @returns
 */
const resetTexts: ActionCreator<resetTextsAction> = () => ({
  type: Types.RESET_TEXTS,
});

const setErrorActionCreator: ActionCreator<setErrorAction> = (error: string) => ({
  type: Types.SET_ERROR,
  payload: error,
});

/**
 * Set all metainfo (id, vowels, words, lang) about text at once
 * @param param0 id, vowels, words, lang
 * @returns
 */
const setMetaActionCreator: ActionCreator<setMetaAction> = ({
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

/**
 *  Fetch only one text from API by id
 * @param id - text identifier at the server
 * @returns
 */
const fetchText =
  (id: number): ThunkAction<Promise<Text>, AppState, void, Action> =>
  async (dispatch: ThunkDispatch<AppState, void, Action>) => {
    try {
      const { data: result } = await axios.get<Text, AxiosResponse<Text>>(`${BASE_URL}${id}`, {
        headers: {
          'TMG-Api-Key': '0J/RgNC40LLQtdGC0LjQutC4IQ==',
        },
      });

      dispatch(addTextActionCreator({ id, text: result }));
      return Promise.resolve(result); // dispatch returns promise
    } catch (e) {
      console.error(e.message);
      throw new Error(e);
    }
  };

export { addTextActionCreator, fetchText, setLoading, resetTexts, setMetaActionCreator, setErrorActionCreator };
