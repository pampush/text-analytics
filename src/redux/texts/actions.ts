import { Action } from 'redux';
import { Types, Text } from './types';

export interface addTextAction extends Action {
  type: Types.ADD_TEXT;
  payload: Text;
}

export interface setLoadingAction extends Action {
  type: Types.SET_LOADING;
  payload: boolean;
}

export interface resetTextsAction extends Action {
  type: Types.RESET_TEXTS;
}
export type textsActions = addTextAction | setLoadingAction | resetTextsAction;
