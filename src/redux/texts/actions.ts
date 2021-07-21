import { Action } from 'redux';
import { Types, Text } from './types';

export interface addTextAction extends Action {
  type: Types.ADD_TEXT;
  payload: { text: Text; id: number };
}

export interface setLoadingAction extends Action {
  type: Types.SET_LOADING;
  payload: boolean;
}

export interface resetTextsAction extends Action {
  type: Types.RESET_TEXTS;
}

export interface setMetaAction extends Action {
  type: Types.SET_META;
  payload: { id: number; lang: string; vowels: number; words: number };
}

export interface setErrorAction extends Action {
  type: Types.SET_ERROR;
  payload: string;
}

export type textsActions =
  | addTextAction
  | setLoadingAction
  | resetTextsAction
  | setMetaAction
  | setErrorAction;
