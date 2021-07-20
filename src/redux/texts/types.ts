export interface Text {
  lang?: string;
  text: string;
  vowels?: number;
  word?: number;
}

export interface TextsState {
  readonly items: Array<Text>;
  readonly loading: boolean;
  readonly errors: Record<string, string>;
}

export enum Types {
  ADD_TEXT = '@@texts/ADD_TEXT',
  SET_LOADING = '@@texts/SET_LOADING',
  RESET_TEXTS = '@@texts/RESET_TEXTS',
}
