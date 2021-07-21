export interface Text {
  lang?: string;
  text: string;
  vowels?: number;
  words?: number;
}

export interface TextsState {
  readonly items: Record<number, Text>;
  readonly loading: boolean;
  readonly errors: string;
}

export enum Types {
  ADD_TEXT = '@@texts/ADD_TEXT',
  SET_LOADING = '@@texts/SET_LOADING',
  RESET_TEXTS = '@@texts/RESET_TEXTS',
  SET_META = '@@texts/SET_META',
  SET_ERROR = '@@texts/SET_ERROR',
}
