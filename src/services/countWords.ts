/**
 * Let's just use the simpliest way to count words using spaces as separators.
 * Let me explain a bit more, we could use RegEx to count words, but this would required
 * list letters in all languages.
 */
export function countWords(text: string) {
  return text.split(' ').length;
}
