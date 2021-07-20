import { default as dictionary } from '../resources/languagesMap.json';
import { Text } from '../redux/texts/types';
import { Languages } from '../types';

export function countVowels(text: Text, lang: Languages) {
  let vowels = 0;
  console.log(dictionary);

  const subject = text.text;
  for (let i = 0; i < subject.length; i++) {
    if (dictionary[lang].includes(subject[i])) vowels++;
  }
  return vowels;
}
