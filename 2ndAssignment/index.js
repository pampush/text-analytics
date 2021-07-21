// I don't even know what is that code counting but, yeah, I am struggling reading
// nested loops, so we will use functional style JS

// It's hard to develop code without expected input and output, so
// supposed input:
// ruText = ['text', 'text']
// enTextWithComments = ['text|comment', 'text|comment']
// output: res = { ru , en }

// Algorithm is assigment has O(n^2) (n - length of arrays) complexity,
// my one has linear complexity on the average
// but the worst scenario when the first array strings are the same length and
// second array fully corresponds to the first one still O(n^2). Even so that is pretty rare scenario.

// We  iterate over two string arrays separately, create two objects with corresponding length(key) and string itself(value)
// then create so called Cartesian product (Декартово произведение) on corresponding keys of two objects.

// Before you ask, I know that forEach is much slower than for loop
// I assume that assigment was about algorithm optimization, not performance.

function compare(ruText, enTextWithComments) {
  const equalPairs = [],
    nonLetters = [' ', ',', '.', ':', '-', ';', "'"],
    startIndex = 0.5,
    diff = 1;

  let ruIndexes = {},
    enIndexes = {};

  // make object which has length of index as a key, and string as a value
  ruText.forEach((ruString) => {
    const lettersInString = countLetters(ruString, nonLetters);
    const index = sumOfArithmeticProgression(startIndex, diff, lettersInString);

    console.log(lettersInString);

    ruIndexes = {
      ...ruIndexes,
      [index]: ruIndexes[index] ? [...ruIndexes[index], ruString] : [ruString],
    };
  });

  // make object which has length of index as a key, and string as a value
  enTextWithComments.forEach((enString) => {
    const enText = enString.split('|')[0],
      enComment = enString.split('|')[1],
      lettersInText = countLetters(enText, nonLetters),
      lettersInComment = countLetters(enComment, nonLetters);

    const index =
      sumOfArithmeticProgression(startIndex, diff, lettersInText) +
      sumOfArithmeticProgression(startIndex, diff, lettersInComment);

    enIndexes = {
      ...enIndexes,
      [index]: enIndexes[index] ? [...enIndexes[index], enString] : [enString],
    };
  });

  return matchLengths(ruIndexes, enIndexes);
}

/**  combine two objects (Cartesian product):  {1: ['str', 'str2']} , { 1: ['str3','str4']} =>
    [{ ru: 'str', en: 'str3' }, { ru: 'str', en: 'str4'}, { ru: 'str2', en: 'str3'}, {ru: 'str2', en: 'str4'}]
*/
function matchLengths(ruIndexes, enIndexes) {
  const pairs = [];
  Object.keys(ruIndexes).forEach((key) => {
    if (enIndexes[key] !== undefined) {
      ruIndexes[key].forEach((ruText) =>
        enIndexes[key].forEach((enText) => {
          pairs.push({
            ruText,
            enText,
          });
        }),
      );
    }
  });

  return pairs;
}

console.log(
  matchLengths(
    { 2: ['str', 'str1'], 3: ['test'] },
    { 2: ['str2', 'str3'], 3: ['test2'], 5: ['asd'] },
  ),
);

function countLetters(string, nonLetters) {
  return string.split('').filter((letter) => !nonLetters.includes(letter)).length;
}

/**
 * Sum of arithmetic progression S = (a1 + d * (n - 1)) * n / 2
 * @param {*} first - first item of progression
 * @param {*} diff - difference between two successive items
 * @param {*} length length of progression
 * @returns
 */
function sumOfArithmeticProgression(first, diff, length) {
  return ((2 * first + diff * (length - 1)) * length) / 2;
}

console.log(compare(['string', 'helper'], ['test|test', 'st|sd', 'qw|qr']));
