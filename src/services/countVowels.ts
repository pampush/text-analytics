import { default as dictionary } from '../resources/languagesMap.json';

import { Languages } from '../types';

export function countVowels(text: string, lang: Languages) {
  let vowels = 0;

  try {
    for (let i = 0; i < text.length; i++) {
      if (dictionary[lang]?.includes(text[i])) vowels++;
    }
    return vowels;
  } catch (e) {
    console.error(e.message);
    return 0;
  }
}
