import React from 'react';
import ErrorsBox from './searchBox/ErrorsBox';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

import SearchButton from './searchBox/SearchButton';
import SearchField from './searchBox/SearchField';
import { fetchText, resetTexts } from '../redux/texts/actionCreators';
import { AppState } from '../redux';

function SearchBox() {
  const dispatch: ThunkDispatch<AppState, void, Action> = useDispatch();
  const [value, setValue] = React.useState<string>('');
  const [errors, setErrors] = React.useState<string[]>([]);

  const handleChange = (text: string) => {
    const { incorrect } = validate(text);

    if (incorrect.length) setErrors(incorrect);
    else setErrors([]);

    setValue(text);
  };

  const handleClick = async () => {
    const { correct } = validate(value);
    const uniqueTextIds = Array.from(new Set(correct));

    dispatch(resetTexts());
    for (const id of uniqueTextIds) {
      const text = await dispatch(fetchText(id));
      console.log(text);
    }

    //const data = dispatch(fetchTexts(Array.from(new Set(correct))));
  };

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
    console.log(result);

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
