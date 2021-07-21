import React from 'react';
import ErrorsBox from './searchBox/ErrorsBox';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

import SearchButton from './searchBox/SearchButton';
import SearchField from './searchBox/SearchField';
import {
  fetchText,
  resetTexts,
  setMetaActionCreator,
  setLoading,
  setErrorActionCreator,
} from '../redux/texts/actionCreators';
import { AppState } from '../redux';
import { detectLanguage } from '../services/translateAPI';
import { countVowels } from '../services/countVowels';
import { Languages } from '../types';
import { countWords } from '../services/countWords';

function SearchBox() {
  const dispatch: ThunkDispatch<AppState, void, Action> = useDispatch();
  const [value, setValue] = React.useState<string>('');
  const [errors, setErrors] = React.useState<string[]>([]);

  /**
   *  Control input by value state of SearchBox
   *  Validate string on each input change to detect errors
   * @param text
   */
  const handleChange = (text: string) => {
    const { incorrect } = validate(text);

    if (incorrect.length) setErrors(incorrect);
    else setErrors([]);

    setValue(text);
  };
  console.log('render');

  /**
   * @description 1. Validate and return correct tokens
   *  2. Filter duplicates
   *  3. Reset previous redux texts state
   *  4. Tell user that fetching has started
   *  5. In loop iterate over ids and determine metainfo for each text. If request (fetchText or detectLanguage)
   * was rejected, we skip current iteration and start next
   *  6. Changing loading state to false indicates that fetching is over
   */
  const handleClick = async () => {
    const { correct } = validate(value);
    const uniqueTextIds = Array.from(new Set(correct));

    dispatch(resetTexts());
    dispatch(setLoading(true));

    for (const id of uniqueTextIds) {
      try {
        const textObject = await dispatch(fetchText(id));
        const text = textObject.text.toLowerCase();
        const lang: Languages = await detectLanguage(text);
        const vowels = countVowels(text, lang);
        const words = countWords(text);
        dispatch(setMetaActionCreator({ id, lang, vowels, words }));
      } catch (e) {
        dispatch(setErrorActionCreator(`Ошибка запроса: ${e.message}`));
        console.error(e.message);
      }
    }

    dispatch(setLoading(false));
  };

  /**
   * Define whether the unacceptable substrings are in input string
   * @param str input string
   * @returns correct - correct tokens, uncorrect - forbidden tokens
   */
  const validate = (
    str: string,
  ): {
    correct: number[];
    incorrect: string[];
  } => {
    const textIndexes = str.split(/[,;]+/);

    const result = textIndexes.reduce<{
      correct: number[];
      incorrect: string[];
    }>(
      (accum, next) => {
        if (!next.trim()) return accum;
        if (next.trim().search(/^0*([1-9]|1[0-9]|20)$/) !== -1) {
          const toBeNumber = Number(next.trim());
          if (!Number.isNaN(toBeNumber))
            return { ...accum, correct: [...accum.correct, toBeNumber] };
          else {
            return { ...accum, incorrect: [...accum.incorrect, next.trim()] };
          }
        } else {
          return { ...accum, incorrect: [...accum.incorrect, next.trim()] };
        }
      },
      { correct: [], incorrect: [] },
    );

    return result;
  };

  return (
    <>
      <div className="search-input__container">
        <div className="search-input__field">
          <SearchField
            name="search-input"
            placeholder="Введите номера текстов"
            size="small"
            value={value}
            onChange={handleChange}
          />
        </div>
        {errors.length ? (
          <div className="search-errors">
            <ErrorsBox message="Некорректные значения:" errors={errors} />
          </div>
        ) : null}
      </div>
      <div className="search-button">
        <SearchButton onClick={handleClick} size="small" value="Подсчитать" />
      </div>
    </>
  );
}

export default SearchBox;
